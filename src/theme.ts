import { createTheme } from '@mantine/core';

import '@mantine/core/styles.css';

export const theme = createTheme({
  fontFamily: 'Inter, sans-serif',
  headings: {
    fontFamily: 'Inter, sans-serif',
    sizes: {
      h1: { fontSize: '2.5rem', fontWeight: '700' },
      h3: { fontSize: '2rem', fontWeight: '700' }
    },
  },
});