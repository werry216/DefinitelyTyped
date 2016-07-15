﻿/// <reference types="angular" />

var app = angular.module("angular-jwt-tests", ["angular-jwt"]);

var $jwtHelper: ng.jwt.IJwtHelper;

var expToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3NhbXBsZXMuYXV0aDAuY29tLyIsInN1YiI6ImZhY2Vib29rfDEwMTU0Mjg3MDI3NTEwMzAyIiwiYXVkIjoiQlVJSlNXOXg2MHNJSEJ3OEtkOUVtQ2JqOGVESUZ4REMiLCJleHAiOjE0MTIyMzQ3MzAsImlhdCI6MTQxMjE5ODczMH0.7M5sAV50fF1-_h9qVbdSgqAnXVF7mz3I6RjS6JiH0H8';
var tokenPayload = $jwtHelper.decodeToken(expToken);
var date = $jwtHelper.getTokenExpirationDate(expToken);
var bool = $jwtHelper.isTokenExpired(expToken);

var $jwtInterceptor: ng.jwt.IJwtInterceptor;

$jwtInterceptor.tokenGetter = () => {
    return expToken;
}
