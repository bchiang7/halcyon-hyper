'use strict';

const WORKBENCH = '#171c28';
const BACKGROUND = '#1d2433';
const FOREGROUND = '#d7dce2';
const UI_GREY = '#8695b7';
const ACCENT = '#ffcc66';

const RED = '#ef6b73';
const GREEN = '#BAE67E';
const YELLOW = '#FFD580';
const ORANGE = '#ffae57';
const BLUE = '#5CCFE6';
const MAGENTA = '#c3a6ff';
const PURPLE = '#c3a6ff';
const SEAFOAM = '#95e6cb';
const WHITE = '#FFFFFF';
const LIGHT_GREY = '#a2aabc';
const GREY = '#8695b7';
const DARK_GREY = '#2f3b54';

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
