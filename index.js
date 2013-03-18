const path = require("path");

module.exports = {
  "root": path.join(__dirname, "fonts"),

  // where to find a locale's fonts in the fonts directory
  "locale-to-subdirs": {
    "pt": "es",
    "ru": "cyrillic"
  },

  // what font types are enabled and what are the extensions of
  // the font files.
  //
  // valid types are embedded-opentype, woff, truetype, svg
  "enabled-types": [ "eot", "woff", "ttf", "svg" ],

  // The fonts. The name of the font must be the same as the font
  // in the fonts directory.
  "fonts": {
    "opensans-bold": {
      "fontFamily": "Open Sans",
      "fontStyle": "normal",
      "fontWeight": "700",
      "local": [ "Open Sans Bold", "OpenSans-Bold" ]
    },

    "opensans-bolditalic": {
      "fontFamily": "Open Sans",
      "fontStyle": "italic",
      "fontWeight": "700",
      "local": [ "Open Sans Bold Italic", "OpenSans-BoldItalic" ]
    },

    "opensans-extrabold": {
      "fontFamily": "Open Sans",
      "fontStyle": "normal",
      "fontWeight": "800",
      "local": [ "Open Sans Extrabold", "OpenSans-Extrabold" ]
    },

    "opensans-extrabolditalic": {
      "fontFamily": "Open Sans",
      "fontStyle": "italic",
      "fontWeight": "800",
      "local": [ "Open Sans Extrabold Italic", "OpenSans-ExtraboldItalic" ]
    },

    "opensans-italic": {
      "fontFamily": "Open Sans",
      "fontStyle": "italic",
      "fontWeight": "400",
      "local": [ "Open Sans Italic", "OpenSans-Italic" ]
    },

    "opensans-light": {
      "fontFamily": "Open Sans",
      "fontStyle": "normal",
      "fontWeight": "300",
      "local": [ "Open Sans Light", "OpenSans-Light" ]
    },

    "opensans-lightitalic": {
      "fontFamily": "Open Sans",
      "fontStyle": "italic",
      "fontWeight": "300",
      // oddly enough, the Postscripot name is OpenSansLight-Italic, not
      // OpenSans-LightItalic
      "local": [ "Open Sans Light Italic", "OpenSansLight-Italic" ]
    },

    "opensans-regular": {
      "fontFamily": "Open Sans",
      "fontStyle": "normal",
      "fontWeight": "400",
      "local": [ "Open Sans", "OpenSans" ]
    },

    "opensans-semibold": {
      "fontFamily": "Open Sans",
      "fontStyle": "normal",
      "fontWeight": "600",
      "local": [ "Open Sans Semibold", "OpenSans-Semibold" ]
    },

    "opensans-semibolditalic": {
      "fontFamily": "Open Sans",
      "fontStyle": "italic",
      "fontWeight": "600",
      "local": [ "Open Sans Semibold Italic", "OpenSans-SemiboldItalic" ]
    }
  }
};
