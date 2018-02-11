'use strict';

const WORKBENCH = '#191E27';
const BACKGROUND = '#212733';
const FOREGROUND = '#D9D7CE';
const UI_GREY = '#738699';
const ACCENT = '#ffcc66';

const RED = '#FF3333';
const LIGHT_RED = '#f07178';
const GREEN = '#BAE67E';
const YELLOW = '#FFD580';
const ORANGE = '#ffae57';
const BLUE = '#5CCFE6';
const MAGENTA = '#c678dd';
const PURPLE = '#c3a6ff';
const SEAFOAM = '#95e6cb';
const WHITE = '#FFFFFF';
const LIGHT_GREY = '#abb2bf';
const GREY = '#607080';
const DARK_GREY = '#343D4A';

const CURSOR_COLOR = ACCENT;
const BORDER_COLOR = BACKGROUND;

const TAB_BORDER_COLOR = DARK_GREY;
const TAB_TEXT_COLOR = FOREGROUND;
const TAB_BORDER_ACTIVE_COLOR = ACCENT;

const colors = {
  black: BACKGROUND,
  red: RED,
  green: GREEN,
  yellow: YELLOW,
  blue: BLUE,
  magenta: MAGENTA,
  cyan: BLUE,
  white: LIGHT_GREY,
  lightBlack: DARK_GREY,
  lightRed: RED,
  lightGreen: GREEN,
  lightYellow: YELLOW,
  lightBlue: BLUE,
  lightMagenta: MAGENTA,
  lightCyan: BLUE,
  lightWhite: LIGHT_GREY,
  colorCubes: WHITE,
  grayscale: UI_GREY
};

exports.decorateConfig = config => {
  return Object.assign({}, config, {
    cursorColor: CURSOR_COLOR,
    cursorShape: 'BEAM',
    cursorBlink: true,
    foregroundColor: FOREGROUND,
    backgroundColor: BACKGROUND,
    borderColor: 'transparent',
    colors,
    css: `
      ${config.css || ''}
      .tab_tab.tab_active {
        border-bottom: 1px solid ${ACCENT} !important;
      }
    `
  });
};
