export default {
  font: {
    family: {
      primary: 'lato-regular',
      secondary: 'crete-round-regular',
    },
    size: {
      large: 32,
      medium: 24,
      small: 16,
    },
  },
  palette: {
    primary: {
      background: '#2d9cdb',
      text: '#ffffff',
    },
    dark: {
      background: '#363636',
      text: '#ffffff',
    },
    light: {
      background: '#ffffff',
      text: '#363636',
    },
    success: {
      background: '#6fcf97',
      text: '#ffffff',
    },
    danger: {
      background: '#eb5757',
      text: '#ffffff',
    },
    grey: {
      shade1: '#e0e0e0',
      shade2: '#9e9e9e',
      shade3: '#616161',
    },
  },
  spacing: {
    xlarge: 50,
    large: 40,
    medium: 20,
    small: 14,
    xsmall: 10,
    none: 0,
  },
  shape: {
    borderRadius: 18,
    boxShadow: `
      shadow-color: #000;
      shadow-offset: 0 3px;
      shadow-opacity: .2;
      shadow-radius: 5px;
      elevation: 1;
    `,
  },
};
