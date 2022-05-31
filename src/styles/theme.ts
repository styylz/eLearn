export type Colors = keyof typeof colors;

const colors = {
  primary: "#000000",
  secondary: "rgba(0, 0, 0, 0.5)",
  accent: "#E7FAFE",
  white: "#FFFFFF",
  lightGreen: "rgba(27, 186, 84, 0.07)",
  green: "#1bba54",
};

export const theme = {
  colors,
  fontFamily: { primary: "Roboto", secondary: `Lobster` },
  fontSizes: {
    fs14: "0.875rem",
    fs16: "1rem",
    fs18: "1.125rem",
    fs24: "1.5rem",
    fs48: "3rem",
    fs64: "4rem",
  },
  fontWeights: {
    fw400: 400,
    fw500: 500,
    fw600: 600,
    fw700: 700,
  },
  lineHeight: {
    lh16: "1rem",
    lh20: "1.25rem",
    lh24: "1.5rem",
    lh28: "1.75rem",
    lh30: "1.875rem",
    lh32: "2rem",
    lh58: "3.625rem",
    lh78: "4.875rem",
  },
  breakpoints: ["24rem", "47rem", "90rem"] as unknown as Breakpoints,
  space: {
    s0: "0",
    s4: "0.25rem",
    s8: "0.5rem",
    s16: "1rem",
    s24: "1.5rem",
    s32: "2rem",
    s40: "2.5rem",
    s48: "3rem",
    s64: "4rem",
    s80: "5rem",
    s96: "6rem",
    s128: "8rem",
    auto: "auto",
    s2424: "1.5rem 1.5rem",
    s16111: "1rem 7.5rem",
  },
  radii: {
    r16: "1rem",
    r20: "1.25rem",
    r24: "1.5rem",
    r30: "1.875rem",
    r46: "2.875rem",
    r60: "3.75rem",
    r80: "5rem",
  },
  zIndices: {
    base: 0,
    upper: 1,
    modal: 10,
    loader: 11,
  },
  typography: {
    h1: {
      fonstSize: "3rem",
      fontSizeMobile: "1.68rem",
      lineHeight: "4rem",
      lineHeightMobile: "2.25rem",
      fontWeight: 900,
    },
    h2: {
      fonstSize: "2rem",
      fontSizeMobile: "1.5rem",
      lineHeight: "3rem",
      lineHeightMobile: "1.75rem",
      fontWeight: 600,
    },
    h3: {
      fonstSize: "1.5rem",
      fontSizeMobile: "1.7rem",
      lineHeight: "2rem",
      lineHeightMobile: "2rem",
      fontWeight: 600,
      letterSpacing: "-0.04em",
    },
    h4: {
      fonstSize: "1.25rem",
      fontSizeMobile: "1.125rem",
      lineHeight: "1.75rem",
      lineHeightMobile: "1.5rem",
      fontWeight: 600,
    },
    h5: {
      fonstSize: "1rem",
      fontSizeMobile: "1rem",
      lineHeight: "1.5rem",
      lineHeightMobile: "1.3rem",
      fontWeight: 600,
    },
    h6: {
      fonstSize: "2rem",
      fontSizeMobile: "1.5rem",
      lineHeight: "2.625rem",
      lineHeightMobile: "2rem",
      fontWeight: 600,
    },
    body16: {
      fonstSize: "1.1rem",
      lineHeight: "2rem",
      lineHeightMobile: "1.5rem",
      fontWeight: 400,
    },
    caption14: {
      fonstSize: "0.875rem",
      lineHeight: "1.05rem",
      fontWeight: 400,
      letterSpacing: "-0.02em",
    },
    caption12: {
      fonstSize: "0.75rem",
      lineHeight: "1.125rem",
      fontWeight: 400,
    },
    span: {
      fonstSize: "0.875rem",
      lineHeight: "1.05rem",
      fontWeight: 400,
      letterSpacing: "-0.02em",
    },
  },
} as const;

export type Theme = typeof theme;

const Breakpoints = theme.breakpoints as any;
Breakpoints.lmobile = Breakpoints[0];
Breakpoints.ltablet = Breakpoints[1];
Breakpoints.desktop = Breakpoints[2];

type Breakpoints<T = string> = {
  _: T;
  lmobile: T;
  ltablet: T;
  desktop: T;
};
