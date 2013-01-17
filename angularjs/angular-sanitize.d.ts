// Type definitions for Angular JS 1.0 (ngSanitize module)
// Project: http://angularjs.org
// Definitions by: Diego Vilar <http://github.com/diegovilar>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


/// <reference path="angular.d.ts" />

///////////////////////////////////////////////////////////////////////////////
// ngSanitize module (angular-sanitize.js)
///////////////////////////////////////////////////////////////////////////////
module ng.sanitize {

    ///////////////////////////////////////////////////////////////////////////
    // SanitizeService
    // see http://docs.angularjs.org/api/ngSanitize.$sanitize
    ///////////////////////////////////////////////////////////////////////////
    interface ISanitizeService {
        (html: string): string;
    }

}
