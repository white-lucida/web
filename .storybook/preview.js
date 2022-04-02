import theme from '../src/mui_config/theme';

import { ThemeProvider } from '@mui/material/styles';
import '../src/styles/globals.css';
import CssBaseline from '@mui/material/CssBaseline';

export const decorators = [
  (Story) => {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    );
  },
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
