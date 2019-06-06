const WORKBENCH = '#171c28';
const BACKGROUND = '#1d2433';
const FOREGROUND = '#a2aabc';
const UI_GREY = '#6679a4';
const ACCENT = '#ffcc66';

const RED = '#ef6b73';
const GREEN = '#bae67e';
const YELLOW = '#ffd580';
// const ORANGE = '#ffae57';
const BLUE = '#5ccfe6';
const PURPLE = '#c3a6ff';
const MAGENTA = PURPLE;
const WHITE = '#d7dce2';
const LIGHT_GREY = '#8695b7';
const GREY = '#2f3b54';
const DARK_GREY = '#1d2433';

const colors = {
  black: WORKBENCH,
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
  grayscale: UI_GREY,
};

exports.decorateConfig = config => Object.assign({}, config, {
  fontSize: 13,
  fontFamily: 'Fira Mono for Powerline, Fira Mono, Fira Code, SF Mono, Menlo, Lucida Console, monospace',
  fontWeight: 'normal',
  fontWeightBold: 'normal',
  lineHeight: 1.3,
  cursorColor: ACCENT,
  cursorShape: 'BEAM',
  cursorBlink: true,
  foregroundColor: FOREGROUND,
  backgroundColor: BACKGROUND,
  selectionColor: GREY,
  borderColor: GREY,
  css: `
    .hyper_main {
      border: none !important;
    }
    .header_header {
      background: ${WORKBENCH} !important;
    }
    .tab_tab {
      color: ${FOREGROUND};
      background: ${WORKBENCH} !important;
      border: 0;
    }
    .tab_tab.tab_active {
      color: ${WHITE};
      border-bottom: 1px solid ${ACCENT} !important;
      background: ${BACKGROUND} !important;
    }
    .tabs_borderShim {
      border-color: transparent !important;
    }
    ${config.css || ''}
    `,
  colors,
});
