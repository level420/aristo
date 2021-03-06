/* ************************************************************************

   Copyright:
     2010 Guilherme R. Aiolfi

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php

   Authors:
 * Guilherme R. Aiolfi (guilhermeaiolfi)
 * John Spackman (john.spackman@zenesis.com)

   ======================================================================

   This class contains code and resources based on the following work:

 * Aristo
     http://github.com/280north/aristo

     License:
       http://creativecommons.org/licenses/by-sa/3.0/us/

     Authors:
 * 280 North, Inc., http://280north.com/
 * Sofa, http://madebysofa.com/

 ************************************************************************ */

/**
 * The Aristo font theme.
 */
qx.Theme.define("aristo.theme.Font", {
  fonts: {
    "default": {
      size: 12,
      lineHeight: 1.4,
      family: [ /* "Open Sans", "Segoe UI", */ "Arial", "Tahoma", "Verdana", "Bitstream Vera Sans", "Liberation Sans" ]
    },

    "bold": {
      size: 12,
      lineHeight: 1.4,
      family: [ /* "Open Sans", "Segoe UI", */ "Arial", "Tahoma", "Verdana", "Bitstream Vera Sans", "Liberation Sans" ],
      bold: true
    },

    "underline": {
      size: 12,
      lineHeight: 1.4,
      family: [ /* "Open Sans", "Segoe UI", */ "Arial", "Tahoma", "Verdana", "Bitstream Vera Sans", "Liberation Sans" ],
      decoration: "underline"
    },

    "italic": {
      size: 12,
      lineHeight: 1.4,
      family: [ /* "Open Sans", "Segoe UI", */ "Arial", "Tahoma", "Verdana", "Bitstream Vera Sans", "Liberation Sans" ],
      italic: true
    },

    "bold-underline": {
      size: 12,
      lineHeight: 1.4,
      family: [ /* "Open Sans", "Segoe UI", */ "Arial", "Tahoma", "Verdana", "Bitstream Vera Sans", "Liberation Sans" ],
      bold: true,
      decoration: "underline"
    },

    "small": {
      size: 11,
      lineHeight: 1.4,
      family: [ /* "Open Sans", "Segoe UI", */ "Arial", "Tahoma", "Verdana", "Bitstream Vera Sans", "Liberation Sans" ]
    },

    "monospace": {
      size: 12,
      lineHeight: 1.4,
      family: [ "Courier New", "DejaVu Sans Mono", "monospace" ]
    },

    "medium": {
      size: 16,
      family: [ /* "Open Sans", "Segoe UI", */ "Arial", "Tahoma", "Verdana", "Bitstream Vera Sans", "Liberation Sans" ]
    },

    "headline": {
      size: 24,
      family: [ /* "Open Sans", "Segoe UI", */ "Arial", "Tahoma", "Verdana", "Bitstream Vera Sans", "Liberation Sans" ]
    }

  }
});
