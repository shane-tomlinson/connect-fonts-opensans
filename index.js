module.exports = {
  // where to find a locale's fonts in the fonts directory
  "locale_to_subdirs": {
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
  "font-types": {
    "embedded-opentype": "eot",
    "woff": "woff",
    "truetype": "ttf",
    "svg": "svg"
  },

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
