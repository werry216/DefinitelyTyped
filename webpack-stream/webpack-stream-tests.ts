import webpackStream = require("webpack-stream");
import webpack = require("webpack");

let output: NodeJS.ReadWriteStream;

output = webpackStream();
output = webpackStream({ entry: '' });
output = webpackStream({ entry: '' }, webpack);
output = webpackStream({ entry: '' }, webpack, (error: Error, stats: webpack.compiler.Stats) => { });
