import opn = require('opn');

const errorCallback = (err: Error) => {};

opn('foo'); // $ExpectType Promise<ChildProcess>

opn('foo', { app: 'bar' }); // $ExpectType Promise<ChildProcess>
opn('foo', { app: ['bar', '--arg'] }); // $ExpectType Promise<ChildProcess>
opn('foo', { app: 'bar', wait: false }); // $ExpectType Promise<ChildProcess>
opn('foo', { app: ['bar', '--arg'], wait: false }); // $ExpectType Promise<ChildProcess>
