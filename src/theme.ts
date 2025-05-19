import { createTheme } from '@mantine/core';

import '@mantine/core/styles.css';

export const theme = createTheme({
  fontFamily: 'Inter, sans-serif',
  headings: {
    fontFamily: 'Inter, sans-serif',
    sizes: {
      h1: { fontSize: '2.5rem', fontWeight: '700' },
      h2: { fontSize: '2rem', fontWeight: '700' },
      h3: { fontSize: '1.5rem', fontWeight: '700' },
      h4: { fontSize: '1rem', fontWeight: '700' },
      h5: { fontSize: '0.85rem', fontWeight: '700' },
      h6: { fontSize: '0.75rem', fontWeight: '700' },
    },
  },
});