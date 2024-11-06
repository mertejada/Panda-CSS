import { defineConfig, defineGlobalStyles } from "@pandacss/dev";

const globalCss = defineGlobalStyles({
  'html, body': {
    color: 'black',
    backgroundColor: 'smoked',
    lineHeight: '1.5',
    '--global-font-body': 'Roboto, sans-serif',
    fontWeight: 'light'
  }
})

export default defineConfig({
  globalCss,
  presets: [],
  preflight: true,
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],
  jsxFramework: 'react',
  theme: {
    extend: {
      tokens: {
        colors: {
          blue: { value: '#005391' },
          secondaryBlue: { value: '#00679D' },
          orange: { value: '#E3AB3D' },
          secondaryOrange: { value: '#E58D4F' },
          black:{value: '#1F1F1F'},
          grey:{value: '#8A8A8A'},
          lightGrey:{value: '#C0C0C0'},
          smoked: { value: '#F0F0F0'},
          white: { value: '#FEFEFE'},
        },
      }
    }
  },
  outdir: "styled-system",
});
