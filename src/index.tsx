import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createRoot } from 'react-dom/client';

import { App } from './App';
import { theme } from './theme';

const rootElement = document.getElementById("root")!;
const root = createRoot(rootElement);
root.render(
  <ThemeProvider theme={createTheme(theme)}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);