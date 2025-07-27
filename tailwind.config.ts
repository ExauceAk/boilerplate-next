import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const { fontFamily } = require("tailwindcss/defaultTheme");

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          base: {
            white: "hsl(var(--primary-base-white))",
            black: "hsl(var(--primary-base-black))",
          },
          neutral: {
            25: "hsl(var(--primary-neutral-25))",
            50: "hsl(var(--primary-neutral-50))",
            100: "hsl(var(--primary-neutral-100))",
            200: "hsl(var(--primary-neutral-200))",
            300: "hsl(var(--primary-neutral-300))",
            400: "hsl(var(--primary-neutral-400))",
            500: "hsl(var(--primary-neutral-500))",
            600: "hsl(var(--primary-neutral-600))",
            700: "hsl(var(--primary-neutral-700))",
            800: "hsl(var(--primary-neutral-800))",
            900: "hsl(var(--primary-neutral-900))",
            950: "hsl(var(--primary-neutral-950))",
          },
          brand: {
            25: "hsl(var(--primary-brand-25))",
            50: "hsl(var(--primary-brand-50))",
            100: "hsl(var(--primary-brand-100))",
            200: "hsl(var(--primary-brand-200))",
            300: "hsl(var(--primary-brand-300))",
            400: "hsl(var(--primary-brand-400))",
            500: "hsl(var(--primary-brand-500))",
            600: "hsl(var(--primary-brand-600))",
            700: "hsl(var(--primary-brand-700))",
            800: "hsl(var(--primary-brand-800))",
            900: "hsl(var(--primary-brand-900))",
            950: "hsl(var(--primary-brand-950))",
          },
        },
        secondary: {
          blue: {
            25: "hsl(var(--secondary-blue-25))",
            50: "hsl(var(--secondary-blue-50))",
            100: "hsl(var(--secondary-blue-100))",
            200: "hsl(var(--secondary-blue-200))",
            300: "hsl(var(--secondary-blue-300))",
            400: "hsl(var(--secondary-blue-400))",
            500: "hsl(var(--secondary-blue-500))",
            600: "hsl(var(--secondary-blue-600))",
            700: "hsl(var(--secondary-blue-700))",
            800: "hsl(var(--secondary-blue-800))",
            900: "hsl(var(--secondary-blue-900))",
            950: "hsl(var(--secondary-blue-950))",
          },
          purple: {
            25: "hsl(var(--secondary-purple-25))",
            50: "hsl(var(--secondary-purple-50))",
            100: "hsl(var(--secondary-purple-100))",
            200: "hsl(var(--secondary-purple-200))",
            300: "hsl(var(--secondary-purple-300))",
            400: "hsl(var(--secondary-purple-400))",
            500: "hsl(var(--secondary-purple-500))",
            600: "hsl(var(--secondary-purple-600))",
            700: "hsl(var(--secondary-purple-700))",
            800: "hsl(var(--secondary-purple-800))",
            900: "hsl(var(--secondary-purple-900))",
            950: "hsl(var(--secondary-purple-950))",
          },
          orange: {
            25: "hsl(var(--secondary-orange-25))",
            50: "hsl(var(--secondary-orange-50))",
            100: "hsl(var(--secondary-orange-100))",
            200: "hsl(var(--secondary-orange-200))",
            300: "hsl(var(--secondary-orange-300))",
            400: "hsl(var(--secondary-orange-400))",
            500: "hsl(var(--secondary-orange-500))",
            600: "hsl(var(--secondary-orange-600))",
            700: "hsl(var(--secondary-orange-700))",
            800: "hsl(var(--secondary-orange-800))",
            900: "hsl(var(--secondary-orange-900))",
            950: "hsl(var(--secondary-orange-950))",
          },
        },
        feedback: {
          success: {
            25: "hsl(var(--feedback-success-25))",
            50: "hsl(var(--feedback-success-50))",
            100: "hsl(var(--feedback-success-100))",
            200: "hsl(var(--feedback-success-200))",
            300: "hsl(var(--feedback-success-300))",
            400: "hsl(var(--feedback-success-400))",
            500: "hsl(var(--feedback-success-500))",
            600: "hsl(var(--feedback-success-600))",
            700: "hsl(var(--feedback-success-700))",
            800: "hsl(var(--feedback-success-800))",
            900: "hsl(var(--feedback-success-900))",
            950: "hsl(var(--feedback-success-950))",
          },
          warning: {
            25: "hsl(var(--feedback-warning-25))",
            50: "hsl(var(--feedback-warning-50))",
            100: "hsl(var(--feedback-warning-100))",
            200: "hsl(var(--feedback-warning-200))",
            300: "hsl(var(--feedback-warning-300))",
            400: "hsl(var(--feedback-warning-400))",
            500: "hsl(var(--feedback-warning-500))",
            600: "hsl(var(--feedback-warning-600))",
            700: "hsl(var(--feedback-warning-700))",
            800: "hsl(var(--feedback-warning-800))",
            900: "hsl(var(--feedback-warning-900))",
            950: "hsl(var(--feedback-warning-950))",
          },
          error: {
            25: "hsl(var(--feedback-error-25))",
            50: "hsl(var(--feedback-error-50))",
            100: "hsl(var(--feedback-error-100))",
            200: "hsl(var(--feedback-error-200))",
            300: "hsl(var(--feedback-error-300))",
            400: "hsl(var(--feedback-error-400))",
            500: "hsl(var(--feedback-error-500))",
            600: "hsl(var(--feedback-error-600))",
            700: "hsl(var(--feedback-error-700))",
            800: "hsl(var(--feedback-error-800))",
            900: "hsl(var(--feedback-error-900))",
            950: "hsl(var(--feedback-error-950))",
          },
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        tremor: {
          brand: {
            faint: colors.blue[50],
            muted: colors.blue[200],
            subtle: colors.blue[400],
            DEFAULT: colors.blue[500],
            emphasis: colors.blue[700],
            inverted: colors.white,
          },
          background: {
            muted: colors.gray[50],
            subtle: colors.gray[100],
            DEFAULT: colors.white,
            emphasis: colors.gray[700],
          },
          border: {
            DEFAULT: colors.gray[200],
          },
          ring: {
            DEFAULT: colors.gray[200],
          },
          content: {
            subtle: colors.gray[400],
            DEFAULT: colors.gray[500],
            emphasis: colors.gray[700],
            strong: colors.gray[900],
            inverted: colors.white,
          },
        },
        "dark-tremor": {
          brand: {
            faint: "#0B1229",
            muted: colors.blue[950],
            subtle: colors.blue[800],
            DEFAULT: colors.blue[500],
            emphasis: colors.blue[400],
            inverted: colors.blue[950],
          },
          background: {
            muted: "#131A2B",
            subtle: colors.gray[800],
            DEFAULT: colors.gray[900],
            emphasis: colors.gray[300],
          },
          border: {
            DEFAULT: colors.gray[800],
          },
          ring: {
            DEFAULT: colors.gray[800],
          },
          content: {
            subtle: colors.gray[600],
            DEFAULT: colors.gray[500],
            emphasis: colors.gray[200],
            strong: colors.gray[50],
            inverted: colors.gray[950],
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "tremor-small": "0.375rem",
        "tremor-default": "0.5rem",
        "tremor-full": "9999px",
      },
      boxShadow: {
        "tremor-input": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        "tremor-card": "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        "tremor-dropdown": "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        "dark-tremor-input": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        "dark-tremor-card": "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        "dark-tremor-dropdown": "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        "ta-xs": "0 1px 2px 0 rgba(16, 24, 40, 0.05)",
        "ta-sm": "0 1px 3px 0 rgba(16, 24, 40, 0.10), 0 1px 2px 0 rgba(16, 24, 40, 0.06)",
        "ta-md": "0 4px 8px -2px rgba(16, 24, 40, 0.10), 0 2px 4px -2px rgba(16, 24, 40, 0.06)",
        "ta-lg": "0 12px 16px -4px rgba(16, 24, 40, 0.10), 0 4px 6px -2px rgba(16, 24, 40, 0.05)",
        "ta-xl": "0 20px 24px -4px rgba(16, 24, 40, 0.10), 0 8px 8px -4px rgba(16, 24, 40, 0.04)",
        "ta-2xl": "0 24px 48px -12px rgba(16, 24, 40, 0.25)",
        "ta-3xl": "0 32px 64px -12px rgba(16, 24, 40, 0.20)",
      },
      fontSize: {
        "tremor-label": ["0.75rem", { lineHeight: "1rem" }],
        "tremor-default": ["0.875rem", { lineHeight: "1.25rem" }],
        "tremor-title": ["1.125rem", { lineHeight: "1.75rem" }],
        "tremor-metric": ["1.875rem", { lineHeight: "2.25rem" }],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        show: {
          from: {
            opacity: "0",
            scale: "0.95",
          },
          to: { opacity: "1", scale: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        show: "show 0.5s cubic-bezier(0.65,0.05,0.36,1)",
      },
    },
  },
  safelist: [
    {
      pattern:
        /^(bg-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ["hover", "ui-selected"],
    },
    {
      pattern:
        /^(text-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ["hover", "ui-selected"],
    },
    {
      pattern:
        /^(border-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ["hover", "ui-selected"],
    },
    {
      pattern:
        /^(ring-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
    {
      pattern:
        /^(stroke-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
    {
      pattern:
        /^(fill-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
  ],
  plugins: [require("tailwindcss-animate"), require("@headlessui/tailwindcss"), require("@tailwindcss/forms")],
};

export default config;
