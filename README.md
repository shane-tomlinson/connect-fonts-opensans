# connect-fonts-opensans

A connect-fonts fontpack for the OpenSans font.

## Usage

1. Include connect-fonts in a node module.
```
const font_middleware = require("connect-fonts");
```

2. Include the font packs that you want to serve.
```
const opensans = require("connect-fonts-opensans");
```

3. Add a middleware by calling the `setup` function.
```
app.use(font_middleware.setup({
  fonts: [ opensans ],
  allow_origin: "https://exampledomain/com"
}));
```


## Author
* Shane Tomlinson
* shane@shanetomlinson.com
* stomlinson@mozilla.com
* set117@yahoo.com
* https://shanetomlinson.com
* http://github.com/stomlinson
* http://github.com/shane-tomlinson
* @shane_tomlinson

## Credits

Original font set downloaded from fontsquirrel.com. Open Sans created by
Ascender Fonts @ http://www.ascenderfonts.com/

## License

This software is dual licenced under version 2.0 of the MPL and version 2.0 of
the Apache License.

  https://www.mozilla.org/MPL/

  http://www.apache.org/licenses/


