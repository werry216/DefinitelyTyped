import Pubnub = require('pubnub');

const console = {
    log: (...params: any[]) => {},
    error: (...params: any[]) => {},
};

const config: Pubnub.PubnubConfig = {
    subscribeKey: '',
    publishKey: '',
    secretKey: '',
    ssl: true,
    authKey: '',
};

const pubnub = new Pubnub(config);

pubnub.setAuthKey('myAuthenKey');

// publish with callback
pubnub.publish({ channel: 'channel-1', message: { data: 1 } }, (status, response) => {
    /*
     * Do something
     */
    console.log(response.timetoken);
});

// publish promise
pubnub.publish({ channel: 'channel-1', message: { data: 1 } }).then(response => {
    /*
     * Do something
     */
    console.log(response.timetoken);
});

pubnub.signal({ channel: 'channel-1', message: { data: 'small payload' } }, (status, { timetoken }) =>
    console.log(timetoken),
);

pubnub
    .signal({ channel: 'channel-1', message: { data: 'small payload' } })
    .then(({ timetoken }) => console.log(timetoken));

pubnub.subscribe({ channels: ['channel-1', 'user-1', 'space-1'] });

pubnub.addListener({
    status: statusEvent => {
        if (statusEvent.category === Pubnub.CATEGORIES.PNConnectedCategory) {
            console.log(statusEvent.category);
        } else if (statusEvent.operation === Pubnub.OPERATIONS.PNAccessManagerAudit) {
            console.log(statusEvent.operation);
        }
    },
    message: ({ message }) => console.log(message),
    presence: ({ action, occupancy, state, uuid }) =>
        console.log({
            action,
            occupancy,
            state,
            uuid,
        }),
    signal: ({ message }) => console.log(message),
    user: ({
        message: {
            data: { id, name, externalId, profileUrl, email, custom, eTag, created, updated },
        },
    }) => console.log({ id, name, externalId, profileUrl, email, custom, eTag, created, updated }),
    space: ({
        message: {
            data: { id, name, description, custom, eTag, created, updated },
        },
    }) => console.log({ id, name, description, custom, eTag, created, updated }),
    membership: ({
        message: {
            data: { userId, spaceId, eTag, created, updated, custom },
        },
    }) => console.log({ userId, spaceId, eTag, created, updated, custom }),
});

pubnub.unsubscribe({ channels: ['channel-1'] });

pubnub.unsubscribeAll();

pubnub.setUUID(Pubnub.generateUUID());
const uuid = pubnub.getUUID();

pubnub.whereNow({ uuid: '' }, (status, res) => {
    if (!status.error) {
        console.log(res.channels[0]);
    }
});

pubnub.whereNow({ uuid: '' }).then(res => {
    console.log(res.channels[1]);
});

pubnub.getState({ uuid: '' }, (status, res) => {
    if (!status.error) {
        console.log(res.channels[0]);
    }
});

pubnub.getState({ uuid: '' }).then(res => {
    console.log(res.channels[1]);
});

pubnub.setState({ channels: [] }, (status, res) => {
    if (!status.error) {
        console.log(res.state);
    }
});

pubnub.setState({ channels: [] }).then(res => {
    console.log(res.state);
});

const grantOptions = {
    channels: ['channel-1'],
    authKeys: ['auth-key'],
    read: true,
    write: false,
    manage: false,
};
pubnub.grant(grantOptions).then(status => {
    console.log(status);
});

pubnub.history({ channel: 'channel-1', count: 2 }, (status, res) => {
    console.log(status, res);
});

const cryptoOptions = {
    encryptKey: true,
    keyEncoding: 'utf8',
    keyLength: 256,
    mode: 'cbc',
};

const mySecret = {
    message: 'Hi!',
};

pubnub.decrypt(mySecret, undefined, cryptoOptions);
pubnub.decrypt('mySecretString', undefined, cryptoOptions);
pubnub.encrypt('egrah5rwgrehwqh5eh3hwfwef', undefined, cryptoOptions);

pubnub.time().then(response => console.log(response));

const channelGroup = 'channel-group-1';
const channels = ['channel-1'];

pubnub.channelGroups.addChannels({ channelGroup, channels }).then(response => console.log(response));

pubnub.channelGroups.listChannels({ channelGroup }).then(response => console.log(response));

pubnub.channelGroups.listGroups().then(response => console.log(response));

pubnub.channelGroups.removeChannels({ channelGroup, channels }).then(response => console.log(response));

pubnub.channelGroups.deleteGroup({ channelGroup }).then(response => console.log(response));

pubnub.channelGroups.addChannels({ channelGroup, channels }, status => console.log(status));

pubnub.channelGroups.listChannels({ channelGroup }, (status, response) => console.log(status, response));

pubnub.channelGroups.listGroups((status, response) => console.log(status, response));

pubnub.channelGroups.removeChannels({ channelGroup, channels }, status => console.log(status));

pubnub.channelGroups.deleteGroup({ channelGroup }, status => console.log(status));

/**
 * Objects
 */

pubnub.createUser(
    {
        id: 'user-1',
        name: 'John Doe',
    },
    (
        { error, category, operation, statusCode, errorData },
        { data: { id, name, externalId, profileUrl, email, custom, eTag, created, updated }, status },
    ) => {
        console.log(statusCode, operation);

        if (error) {
            console.log(category);
            console.error(errorData);
            return;
        }

        console.log(status);
        console.log({ user: { id, name, externalId, profileUrl, email, custom, eTag, created, updated } });
    },
);

pubnub
    .createUser({
        id: 'user-1',
        name: 'John Doe',
    })
    .then(res => console.log(res));

pubnub.updateUser(
    {
        id: 'user-1',
        name: 'John Updated Doe',
    },
    (status, res) => console.log(status, res),
);

pubnub
    .updateUser({
        id: 'user-1',
        name: 'John Updated Doe',
    })
    .then(res => console.log(res));

pubnub.deleteUser('user-1', (status, res) => console.log(status, res));

pubnub.deleteUser('user-1').then(res => console.log(res));

pubnub.getUsers(
    {
        limit: 10,
    },
    (status, { data }) => {
        data.forEach(({ id, name, externalId, profileUrl, email, custom, eTag, created, updated }, index) => {
            console.log(index, { id, name, externalId, profileUrl, email, custom, eTag, created, updated });
        });
    },
);

pubnub
    .getUsers({
        limit: 10,
    })
    .then(res => console.log(res));

pubnub.getUser(
    {
        userId: 'user-1',
    },
    (status, res) => console.log(status, res),
);

pubnub
    .getUser({
        userId: 'user-1',
    })
    .then(res => console.log(res));

pubnub.createSpace(
    {
        id: 'space-1',
        name: 'Demo Space',
    },
    ({ error }, { data: { id, name, description, custom, eTag, created, updated } }) => {
        if (error) {
            return;
        }
        console.log({ space: { id, name, description, custom, eTag, created, updated } });
    },
);

pubnub
    .createSpace({
        id: 'space-1',
        name: 'Updated Space Name',
    })
    .then(res => console.log(res));

pubnub.updateSpace(
    {
        id: 'space-1',
        name: 'Updated Space Name',
    },
    (status, res) => console.log(status, res),
);

pubnub
    .updateSpace({
        id: 'space-1',
        name: 'Updated Space Name',
    })
    .then(res => console.log(res));

pubnub.deleteSpace('space-1', (status, res) => console.log(status, res));

pubnub.deleteSpace('space-1').then(res => console.log(res));

pubnub.getSpaces(
    {
        limit: 10,
    },
    (status, { data }) => {
        data.forEach(({ id, name, description, custom, eTag, created, updated }, index) => {
            console.log(index, { id, name, description, custom, eTag, created, updated });
        });
    },
);

pubnub
    .getSpaces({
        limit: 10,
    })
    .then(res => console.log(res));

pubnub.getSpace(
    {
        spaceId: 'space-1',
    },
    (status, res) => console.log(status, res),
);

pubnub
    .getSpace({
        spaceId: 'space-1',
    })
    .then(res => console.log(res));

pubnub.getMemberships(
    {
        userId: 'user-1',
    },
    (status, { data }) => {
        data.forEach(({ id, custom, eTag, created, updated }, index) => {
            console.log(index, { id, custom, eTag, created, updated });
        });
    },
);

pubnub
    .getMemberships({
        userId: 'user-1',
    })
    .then(res => console.log(res));

pubnub.getMembers(
    {
        spaceId: 'space-1',
    },
    (status, { data }) => {
        data.forEach(({ id, custom, eTag, created, updated }, index) => {
            console.log(index, { id, custom, eTag, created, updated });
        });
    },
);

pubnub
    .getMembers({
        spaceId: 'space-1',
    })
    .then(res => console.log(res));

pubnub.joinSpaces(
    {
        userId: 'user-1',
        spaces: [
            {
                id: 'space-1',
            },
            {
                id: 'space-2',
            },
        ],
    },
    (status, res) => console.log(status, res),
);

pubnub
    .joinSpaces({
        userId: 'user-1',
        spaces: [
            {
                id: 'space-1',
            },
            {
                id: 'space-2',
            },
        ],
    })
    .then(res => console.log(res));

pubnub.updateMemberships(
    {
        userId: 'user-1',
        spaces: [
            {
                id: 'space-1',
                custom: { starred: true },
            },
        ],
        include: { customFields: true },
    },
    (status, res) => console.log(status, res),
);

pubnub
    .updateMemberships({
        userId: 'user-1',
        spaces: [
            {
                id: 'space-1',
                custom: { starred: true },
            },
        ],
        include: { customFields: true },
    })
    .then(res => console.log(res));

pubnub.leaveSpaces(
    {
        userId: 'user-1',
        spaces: ['space-1', 'space-2'],
    },
    (status, res) => console.log(status, res),
);

pubnub
    .leaveSpaces({
        userId: 'user-1',
        spaces: ['space-1', 'space-2'],
    })
    .then(res => console.log(res));

pubnub.addMembers(
    {
        spaceId: 'space-1',
        users: [
            {
                id: 'user-1',
                custom: {
                    starred: true,
                },
            },
        ],
    },
    (status, res) => console.log(status, res),
);

pubnub
    .addMembers({
        spaceId: 'space-1',
        users: [
            {
                id: 'user-1',
                custom: {
                    starred: true,
                },
            },
        ],
    })
    .then(res => console.log(res));

pubnub.updateMembers(
    {
        spaceId: 'space-1',
        users: [
            {
                id: 'user-1',
                custom: {
                    starred: true,
                },
            },
        ],
    },
    (status, res) => {
        console.log(status, res);
    },
);

pubnub
    .updateMembers({
        spaceId: 'space-1',
        users: [
            {
                id: 'user-1',
                custom: {
                    starred: true,
                },
            },
        ],
    })
    .then(res => console.log(res));

pubnub.removeMembers(
    {
        spaceId: 'space-1',
        users: ['user-1', 'user-2'],
    },
    (status, res) => {
        console.log(status, res);
    },
);

pubnub
    .removeMembers({
        spaceId: 'space-1',
        users: ['user-1', 'user-2'],
    })
    .then(res => console.log(res));
