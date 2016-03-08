/// <reference path="format-unicorn-safe.d.ts"/>

import formatUnicorn from 'format-unicorn/safe';

// Safe version
var outputString: string;

outputString = formatUnicorn('Hello, {name}; you have {favoriteNumber}', {
  name: "kruncher",
  favoriteNumber: 42
});
