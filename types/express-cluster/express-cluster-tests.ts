import * as cluster from 'express-cluster';

() => {
    cluster(worker => {}, {count: 5});
    cluster({count: 5}, worker => {});
};
