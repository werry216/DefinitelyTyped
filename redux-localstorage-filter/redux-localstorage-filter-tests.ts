// Redux Localstorage Filter Test
// ================================================================================
/// <reference path="./redux-localstorage-filter.d.ts" />
/// <reference path="../redux-localstorage/redux-localstorage.d.ts" />
/// <reference path="../redux/redux.d.ts" />

// Imports
// --------------------------------------------------------------------------------
import { compose } from "redux"
import {
    default as persistState
} from "redux-localstorage"
import * as adapter from "redux-localstorage/lib/adapters/localStorage"
import { default as filter } from "redux-localstorage-filter"

const storageSingle = compose(
    filter("foo")
)(adapter(window.localStorage))
const enhancerSingle = persistState(storageSingle, "test")

const storageMulti = compose(
    filter(["foo", "bar"])
)(adapter(window.localStorage))
const enhancerMulti = persistState(storageMulti, "test")
