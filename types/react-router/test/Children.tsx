import * as React from 'react';
import { Route } from 'react-router';

function RouteWithFunctionChildrenAttribute() {
    return <Route path="/" children={() => <div>Hello!</div>} />
}

function RouteWithFunctionJsxChildren() {
    return <Route path="/">
        {() => <div>Hello!</div>}
    </Route>
}

function RouteWithElementChildrenAttribute() {
    return <Route path="/" children={<div>Hello!</div>} />
}

function RouteWithElementJsxChildren() {
    return <Route path="/">
        {<div>Hello!</div>}
    </Route>
}