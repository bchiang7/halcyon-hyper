const ACCENT =       '#ffcc66';
const BLUE =         '#5ccfe6';
const GREEN =        '#bae67e';
const ORANGE =       '#ffaf57';
const YELLOW =       '#ffd580';
const PURPLE =       '#c3a6ff';
const RED =          '#ef6b73';
const BLACK =        '#171c28';
const DARKEST_GREY = '#1d2433';
const DARK_GREY =    '#2f3b54';
const GREY =         '#6779a3';
const LIGHT_GREY =   '#8695b7';
const DIM_WHITE =    '#a2aabc';
const WHITE =        '#d7dce2';

const WORKBENCH =    BLACK;
const BACKGROUND =   DARKEST_GREY;
const FOREGROUND =   DIM_WHITE;

const colors = {
  black: GREY,
  red: RED,
  green: GREEN,
  yellow: YELLOW,
  blue: BLUE,
  magenta: PURPLE,
  cyan: BLUE,
  white: WHITE,
  lightBlack: GREY,
  lightRed: RED,
  lightGreen: GREEN,
  lightYellow: YELLOW,
  lightBlue: BLUE,
  lightMagenta: PURPLE,
  lightCyan: BLUE,
  lightWhite: WHITE,
  colorCubes: WHITE,
  grayscale: GREY,
};

exports.decorateConfig = config => Object.assign({}, config, {
  fontWeight: 'normal',
  fontWeightBold: 'normal',
  lineHeight: 1.3,
  cursorColor: ACCENT,
  cursorShape: 'BEAM',
  cursorBlink: true,
  foregroundColor: FOREGROUND,
  backgroundColor: BACKGROUND,
  selectionColor: DARK_GREY,
  borderColor: DARK_GREY,
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
