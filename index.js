const path = require("path");

module.exports = {
  "root": path.join(__dirname, "fonts"),

  // where to find a locale's fonts in the fonts directory
  "locale-to-subdirs": {
    "ca": "ca",
    "cs": "cs",
    "da": "da",
    "de": "de",
    "en": "en",
    "es": "es",
    "et": "et",
    "fr": "fr",
    "it": "it",
    "it-ch": "default",
    "nl": "nl",
    "pl": "pl",
    "pt": "es",
    "ro": "ro",
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
    "opensans-regular": {
      "fontFamily": "Open Sans",
      "fontStyle": "normal",
      "fontWeight": "400",
      "local": [ "Open Sans", "OpenSans" ]
    },

    "opensans-light": {
      "fontFamily": "Open Sans",
      "fontStyle": "normal",
      "fontWeight": "300",
      "local": [ "Open Sans Light", "OpenSansLight" ]
    },

    "opensans-bold": {
      "fontFamily": "Open Sans",
      "fontStyle": "normal",
      "fontWeight": "700",
      "local": [ "Open Sans Bold", "OpenSansBold" ]
    },

    "opensans-italic": {
      "fontFamily": "Open Sans",
      "fontStyle": "italic",
      "fontWeight": "400",
      "local": [ "Open Sans Italic", "OpenSansItalic" ]
    }
  }
};
