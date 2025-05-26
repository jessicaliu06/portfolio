import { createTheme } from '@mantine/core';

import '@mantine/core/styles.css';

export const theme = createTheme({
  colors: {
    'fairy-tale': 
      [
        "#ffecf0",
        "#f4c3cb",
        "#edacb7",
        "#e47e8f",
        "#dc586d",
        "#d84157",
        "#d6344c",
        "#be263e",
        "#aa1f36",
        "#96142d"
      ],
    'celeste':
    [
      "#e5fdfd",
      "#d7f5f5",
      "#a3e3e4",
      "#8adadc",
      "#69cfd0",
      "#54c8ca",
      "#45c5c7",
      "#33aeaf",
      "#239b9d",
      "#008688"
    ],
    'light-coral':
    [
      "#ffe9eb",
      "#fed3d5",
      "#f6a5a8",
      "#ee676c",
      "#ea4b50",
      "#e73137",
      "#e62229",
      "#cd141d",
      "#b70c18",
      "#a10012"
    ],
    'antique-white':
    [
      "#fef5e9",
      "#f5e9d9",
      "#e9d2b3",
      "#ddb989",
      "#d3a365",
      "#cd964e",
      "#ca8f41",
      "#b37b32",
      "#9f6d2a",
      "#8b5d1e"
    ],
    'mantis':
    [
      "#edfce8",
      "#dff4d8",
      "#bfe5b4",
      "#9dd78c",
      "#81ca6a",
      "#6dc253",
      "#64bf48",
      "#53a839",
      "#479530",
      "#388124"
    ],
    'apple':
    [
      "#ffebee",
      "#f9d2d8",
      "#f6a1ac",
      "#f56d7e",
      "#f54457",
      "#f52e3f",
      "#f52433",
      "#db1a26",
      "#c31321",
      "#b0031b"
    ],
    'cocoa':
    [
      "#fdf2ed",
      "#f5e3d9",
      "#eec4ad",
      "#e9a37c",
      "#e48754",
      "#e1753a",
      "#e06c2c",
      "#c75b20",
      "#b2501b",
      "#431d08"
    ]
  },
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