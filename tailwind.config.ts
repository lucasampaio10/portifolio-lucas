import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        error: '#ffb4ab',
        'error-container': '#93000a',
        'on-error': '#690005',
        'on-error-container': '#ffdad6',

        background: '#11131a',
        'on-background': '#e1e2eb',

        surface: '#11131a',
        'surface-dim': '#11131a',
        'surface-bright': '#373940',
        'surface-container-lowest': '#0c0e14',
        'surface-container-low': '#191b22',
        'surface-container': '#1d1f26',
        'surface-container-high': '#282a31',
        'surface-container-highest': '#33353c',
        'surface-variant': '#33353c',
        'on-surface': '#e1e2eb',
        'on-surface-variant': '#c3c6d5',
        'inverse-surface': '#e1e2eb',
        'inverse-on-surface': '#2e3037',

        primary: '#b0c6ff',
        'primary-fixed': '#d9e2ff',
        'primary-fixed-dim': '#b0c6ff',
        'primary-container': '#0f52ba',
        'on-primary': '#002c6f',
        'on-primary-container': '#bcceff',
        'on-primary-fixed': '#001945',
        'on-primary-fixed-variant': '#00419c',
        'inverse-primary': '#1d59c1',
        'surface-tint': '#b0c6ff',

        secondary: '#b0c6ff',
        'secondary-fixed': '#d9e2ff',
        'secondary-fixed-dim': '#b0c6ff',
        'secondary-container': '#0f52ba',
        'on-secondary': '#002c6f',
        'on-secondary-container': '#bcceff',
        'on-secondary-fixed': '#001945',
        'on-secondary-fixed-variant': '#00419c',

        tertiary: '#b0c6ff',
        'tertiary-fixed': '#d9e2ff',
        'tertiary-fixed-dim': '#b0c6ff',
        'tertiary-container': '#0f52ba',
        'on-tertiary': '#002c6f',
        'on-tertiary-container': '#bcceff',
        'on-tertiary-fixed': '#001945',
        'on-tertiary-fixed-variant': '#00419c',

        outline: '#8d909e',
        'outline-variant': '#434653',
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '40px',
        gutter: '24px',
        'container-max': '1200px',
      },
      fontSize: {
        'body-md': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'body-lg': ['18px', { lineHeight: '28px', fontWeight: '400' }],
        'label-sm': ['12px', { lineHeight: '16px', letterSpacing: '0.02em', fontWeight: '600' }],
        'label-md': ['14px', { lineHeight: '20px', letterSpacing: '0.01em', fontWeight: '500' }],
        'headline-md': ['24px', { lineHeight: '32px', fontWeight: '600' }],
        'headline-lg': ['30px', { lineHeight: '38px', letterSpacing: '-0.01em', fontWeight: '600' }],
        'headline-xl-mobile': ['32px', { lineHeight: '40px', letterSpacing: '-0.02em', fontWeight: '700' }],
        'headline-xl': ['40px', { lineHeight: '48px', letterSpacing: '-0.02em', fontWeight: '700' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config
