# connect-fonts-opensans

Open Sans fontpack for [connect-fonts](https://github.com/shane-tomlinson/connect-fonts).

## Usage

1. Include [connect-fonts](https://github.com/shane-tomlinson/connect-fonts) in a node module.
```js
const font_middleware = require("connect-fonts");
```

2. Include the font packs that you want to serve.
```js
const font_pack  = require("connect-fonts-opensans");
```

3. Add a middleware by calling the `setup` function.
```js
    app.use(font_middleware.setup({
      fonts: [ font_pack ],
      allow_origin: "https://exampledomain.com"
    }));
```

4. Add a link tag to include the font CSS.
```html
<link href="/opensans-bold/fonts.css" type="text/css" rel="stylesheet"/ >
```

Multiple fonts from the family can be included by using a comma separated list of fonts:
```html
<link href="/opensans-bold,opensans-bolditalic,opensans-extrabold,opensans-extrabolditalic,opensans-italic,opensans-light,opensans-lightitalic,opensans-regular,opensans-semibold,opensans-semibolditalic/fonts.css" type="text/css" rel="stylesheet"/ >
```

Available fonts:
* opensans-bold
* opensans-bolditalic
* opensans-extrabold
* opensans-extrabolditalic
* opensans-italic
* opensans-light
* opensans-lightitalic
* opensans-regular
* opensans-semibold
* opensans-semibolditalic

Locale-optimised font sets can be served by specifying the locale in the fonts.css URL.
```html
<link href="/latin/opensans-bold/fonts.css" type="text/css" rel="stylesheet"/ >
```

Available subsets:
* latin
* ca
* cs
* cyrillic
* da
* de
* en
* es
* et
* fr
* hu
* it
* nl
* pl
* pt
* ro
* sk
* sv

5. Set your CSS up to use the new font by using the "Open Sans" font-family.
```
    body {
      font-family: 'Open Sans', 'sans-serif', 'serif';
    }
```

## Font Info
Open Sans

* Copyright: Digitized data copyright © 2010-2011, Google Corporation.
* Trademark: Open Sans is a trademark of Google and may be registered in certain jurisdictions.
* Designer URL: http://www.ascendercorp.com/typedesigners.html
* Vendor: Ascender Corporation
* Vendor URL: http://www.ascendercorp.com/

## Development Info
* Homepage: https://github.com/shane-tomlinson/connect-fonts-opensans
* Repo: https://github.com/shane-tomlinson/connect-fonts-opensans

## Author
* Shane Tomlinson
* shane@shanetomlinson.com
* stomlinson@mozilla.com
* set117@yahoo.com
* https://shanetomlinson.com
* https://github.com/shane-tomlinson
* https://github.com/stomlinson
* @shane_tomlinson


## License

Software: Licenced under version 2.0 of the MPL

  https://www.mozilla.org/MPL/

Fonts: Licensed under version 2.0 of the Apache

  http://www.apache.org/licenses/LICENSE-2.0

