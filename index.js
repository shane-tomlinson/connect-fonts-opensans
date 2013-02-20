const path = require("path");

module.exports = {
  "root": path.join(__dirname, "fonts"),

  // where to find a locale's fonts in the fonts directory
  "locale-to-subdirs": {
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
      "local": [ "Open Sans Bold", "OpenSansBold" ]
    },

    "opensans-bolditalic": {
      "fontFamily": "Open Sans",
      "fontStyle": "italic",
      "fontWeight": "700",
      "local": [ "Open Sans Bold Italic", "OpenSansBoldItalic" ]
    },

    "opensans-extrabold": {
      "fontFamily": "Open Sans",
      "fontStyle": "normal",
      "fontWeight": "800",
      "local": [ "Open Sans ExtraBold", "OpenSansExtraBold" ]
    },

    "opensans-extrabolditalic": {
      "fontFamily": "Open Sans",
      "fontStyle": "italic",
      "fontWeight": "800",
      "local": [ "Open Sans ExtraBold Italic", "OpenSansExtraBoldItalic" ]
    },

    "opensans-italic": {
      "fontFamily": "Open Sans",
      "fontStyle": "italic",
      "fontWeight": "400",
      "local": [ "Open Sans Italic", "OpenSansItalic" ]
    },

    "opensans-light": {
      "fontFamily": "Open Sans",
      "fontStyle": "normal",
      "fontWeight": "300",
      "local": [ "Open Sans Light", "OpenSansLight" ]
    },

    "opensans-lightitalic": {
      "fontFamily": "Open Sans",
      "fontStyle": "italic",
      "fontWeight": "300",
      "local": [ "Open Sans Light Italic", "OpenSansLightItalic" ]
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
      "local": [ "Open Sans SemiBold", "OpenSansSemiBold" ]
    },

    "opensans-semibolditalic": {
      "fontFamily": "Open Sans",
      "fontStyle": "italic",
      "fontWeight": "600",
      "local": [ "Open Sans SemiBold Italic", "OpenSansSemiBoldItalic" ]
    }
  }
};
