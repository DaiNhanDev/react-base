const lightTheme = {
  primary: 'rgba(215,113,88,1)',

  text: 'rgba(58,52,51,1)',
  textSecondary: 'rgba(58,52,51,0.7)',
  textSuccess: '#28a745',
  textDanger: '#dc3545',
  textWarning: '#ffc107',
  textInfo: '#17a2b8',
  textDisable: '#6c757d',

  background: 'rgba(255,255,255,1)',
  backgroundVariant: 'rgba(251,249,249,1)',

  btnPrimary: 'linear-gradient(to left top, #0E1F40, #FF3E9D)',
  border: 'rgba(58,52,51,0.12)',
  borderLight: 'rgba(58,52,51,0.05)',
  FF3E9D: '#FF3E9D',
  white: '#ffffff',
  danger: '#ff4d4f',
};

export type Theme = typeof lightTheme;

const darkTheme: Theme = {
  primary: 'rgba(220,120,95,1)',

  text: 'rgba(58,52,51,1)',
  textSecondary: 'rgba(58,52,51,0.7)',
  textSuccess: '#28a745',
  textDanger: '#dc3545',
  textWarning: '#ffc107',
  textInfo: '#17a2b8',
  textDisable: '#6c757d',

  background: 'rgba(0,0,0,1)',
  backgroundVariant: 'rgba(28,26,26,1)',

  btnPrimary:
    'linear-gradient(to left top, #845EC2, #9a9ae1, #46eefa, #DD83E0)',

  border: 'rgba(241,233,231,0.15)',
  borderLight: 'rgba(241,233,231,0.05)',
  FF3E9D: '#FF3E9D',
  white: '#ffffff',
  danger: '#ff4d4f',
};

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};
