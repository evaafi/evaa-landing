/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    screens: {
      xs: '320px',
      sm: '400px',
      md: '768px',
      lg: '964px',
      xl: '1280px',
      '2xl': '1440px'
    },
    fontSize: {
      xs: ['0.8125rem', '1rem'], // 13px
      sm: ['0.875rem', '1.125rem'], // 14px
      base: ['1rem', '1.25rem'], // 16px
      lg: ['1.125rem', '1.35rem'], // 18px
      xl: ['1.375rem', '1.6rem'], // 22px
      '2xl': ['1.5rem', '1.87500rem'], // 24px
      '3xl': ['1.75rem', '2.1rem'], // 28px, 33.6px
      '4xl': ['2rem', '2.25rem'], // 32px
      '5xl': ['2.5rem', '2.625rem'], // 40px, 42px
      '6xl': ['3rem', '3rem'], // 48px
      '7xl': ['4rem', '4.5rem'], // 64px
      '8xl': ['5rem', '5.37500rem'] // 80px
    },
    fontFamily: {
      sans: [
        '"Gilroy"',
        'ui-sans-serif',
        'system-ui',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"'
      ],
      display: [
        '"Hanson"',
        'ui-sans-serif',
        'system-ui',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"'
      ]
    },
    fontWeight: {
      normal: '500',
      medium: '600',
      bold: '700',
      black: '800'
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '0.25rem',
        lg: '2rem'
      },
      screens: {
        '2xl': '68rem',
      }
    },
    extend: {
      colors: {
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        hero: {
          foreground: 'var(--hero-foreground)'
        },
        tabs: {
          DEFAULT: 'var(--tabs)'
        },
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)'
        },
        tertiary: {
          DEFAULT: 'var(--tertiary)'
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)'
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)'
        },
        success: {
          DEFAULT: 'var(--success)',
          foreground: 'var(--success-foreground)'
        },
        link: {
          DEFAULT: 'var(--link)',
          foreground: 'var(--link-foreground)'
        },
        warning: {
          DEFAULT: 'var(--warning)',
          foreground: 'var(--warning-foreground)'
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)'
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)'
        },
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)'
        },
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
          shadow: 'var(--card-shadow)'
        },
        progress: {
          DEFAULT: 'var(--progress)',
          warning: 'var(--progress-warning)',
          danger: 'var(--progress-danger)'
        }
      },
      background: {
        'hero-green': 'var(--hero-green-background)'
      },
      backgroundImage: {
        hero: 'var(--hero-background)',
        master: 'var(--master-background)'
      },
      borderRadius: {
        lg: 'var(--radius-lg)',
        md: 'var(--radius)',
        sm: '20px',
        xs: '10px'
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
};
