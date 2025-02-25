import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          '100': '#ffe8f0',
          DEFAULT: '#ee2b69',
        },
        secondary: '#fbe843',
        black: {
          '100': '#333333',
          '200': '#141413',
          '300': '#7d8087',
          DEFAULT: '#000000',
        },
        white: {
          '100': '#f7f7f7',
          DEFAULT: '#ffffff',
        },
      },
      fontFamily: {
        'geist-sans': ['var(--font-geist-sans)', 'sans-serif'],
        'geist-mono': ['var(--font-geist-mono)', 'monospace'],
        'work-sans': ['var(--font-work-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
