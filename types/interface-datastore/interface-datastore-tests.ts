import { Key, MemoryDatastore, Pair, Query, Batch, Errors, utils, Datastore, Adapter } from 'interface-datastore';

const store: Datastore = new MemoryDatastore();

const k = new Key('/z/one');
store.put(k, Buffer.from('one'));

const data: Array<[Key, Buffer]> = [];
for (let i = 0; i < 100; i++) {
    data.push([new Key(`/z/key${i}`), Buffer.from(`data${i}`)]);
}

Promise.all(data.map(d => store.put(d[0], d[1]))).then(() => {
    Promise.all(data.map(d => store.get(d[0]))).then(res => {
        console.log(res);
    });
});

store.put(k, Buffer.from('hello')).then(() => {
    store.get(k).then(res => {
        console.log(res);
    });
});

const invalid = new Key('/does/not/exist');

try {
    store.get(invalid);
} catch (err) {
    console.log(err); // ErrCode
}

store.put(k, Buffer.from('hello')).then(() => {
    store.get(k).then(() => {
        store.delete(k).then(() => {
            store.has(k).then(exists => {
                console.log(exists);
                // true
            });
        });
    });
});

const putMany = async () => {
    const source = [];
    for (let i = 0; i < 100; i++) {
        source.push({ key: new Key(`/z/key${i}`), value: Buffer.from(`data${i}`) });
    }
    for await (const { key, value } of store.putMany(source)) {
        console.log(key, value);
    }
};

putMany();

const getMany = async () => {
    const k = new Key('/z/one');
    await store.put(k, Buffer.from('hello'));
    const source = [k];

    for await (const value of store.getMany(source)) {
        console.log(value);
    }
};

getMany();

const deleteMany = async () => {
    const data = [];
    for (let i = 0; i < 100; i++) {
        data.push({ key: new Key(`/a/key${i}`), value: Buffer.from(`data${i}`) });
    }

    // Drain them all
    for await (const { key, value } of store.putMany(data)) {
        console.log(key, value);
    }

    const res0 = await Promise.all(data.map(d => store.has(d.key)));
    res0.forEach(res => typeof res === 'boolean');

    for await (const key of store.deleteMany(data.map(d => d.key))) {
        console.log(key.toString());
    }
};

deleteMany();

const b: Batch = store.batch();

store.put(new Key('/z/old'), Buffer.from('old')).then(() => {
    b.put(new Key('/a/one'), Buffer.from('1'));
    b.put(new Key('/q/two'), Buffer.from('2'));
    b.put(new Key('/q/three'), Buffer.from('3'));
    b.delete(new Key('/z/old'));
    b.commit().then(() => {
        const keys = ['/a/one', '/q/two', '/q/three', '/z/old'];
        Promise.all(keys.map(k => store.has(new Key(k)))).then(res => {
            console.log(res);
            // [true, true, true, false]
        });
    });
});

const hello = { key: new Key('/q/1hello'), value: Buffer.from('1') };
const world = { key: new Key('/z/2world'), value: Buffer.from('2') };
const hello2 = { key: new Key('/z/3hello2'), value: Buffer.from('3') };

const filter1: Query.Filter = (entry: Pair) => !entry.key.toString().endsWith('hello');
const filter2 = (entry: Pair) => entry.key.toString().endsWith('hello2');

const order: Query.Order = (res: Pair[]) => {
    return res.sort((a, b) => {
        if (a.value.toString() < b.value.toString()) {
            return -1;
        }
        return 1;
    });
};

const batch = store.batch();

batch.put(hello.key, hello.value);
batch.put(world.key, world.value);
batch.put(hello2.key, hello2.value);

batch.commit();

// Do some waiting...

const query: Query = {
    prefix: '/z',
    keysOnly: false,
    filters: [filter1, filter2],
    orders: [order],
    offset: 1,
    limit: 1,
};

const test = async () => {
    const res: Pair[] = [];
    for await (const item of store.query(query)) {
        res.push(item);
        const key = item.key.toString();
        const value = item.value.buffer;
        console.log(`${key}: ${value}`);
    }
};
test();
