import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  presets: [],
  preflight: true,
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],
  jsxFramework: 'react',
  theme: {
    extend: {
      tokens: {
        colors: {
          primary_blue: { value: '#005391' },
          secondary_blue: { value: '#00679D' },
          primary_orange: { value: '#E3AB3D' },
          secondary_orange: { value: '#E58D4F' },
        },
        fonts: {
          body: { value: 'system-ui, sans-serif' }
        }
      }
    }
  },
  outdir: "styled-system",
});
