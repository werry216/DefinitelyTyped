/// <reference path="emojione.d.ts" />

emojione.sprites = true;
emojione.imagePathPNG = 'foobar';
emojione.imagePathSVG = 'foobar';
emojione.imagePathSVGSprites = 'foobar';
emojione.imageType = 'svg';
emojione.unicodeAlt = false;
emojione.ascii = true;
emojione.unicodeRegexp = '123.*';
emojione.cacheBustParam = 'asdf';
const myShort: string = emojione.toShort('hi');
const myImage1: string = emojione.toImage('hi');
const myImage2: string = emojione.shortnameToImage('hi');
const myImage3: string = emojione.unicodeToImage('hi');
