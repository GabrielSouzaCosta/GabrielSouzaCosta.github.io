/** @type {import('tailwindcss').Config} */
import colors from "./src/styles/colors"
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors,
			height: {
				'remaining-screen': 'calc(100vh - 3.5rem)'
			},
			fontFamily: {
        sans: ["Fjalla One", ...defaultTheme.fontFamily.sans],
				"logo": ["Righteous", defaultTheme.fontFamily.sans]
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
				shimmer: {
					from: {
						"backgroundPosition": "0 0"
					},
					to: {
						"backgroundPosition": "-200% 0"
					}
				}
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
				shimmer: "shimmer 2s linear infinite"
      },
		},     
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				lg: '4rem',
				xl: '6rem',
				'2xl': '8rem',
			},
		},
	},
  plugins: [
		require("tailwindcss-animate"),
		addVariablesForColors
	],
}

function addVariablesForColors({ addBase, theme }) {
  let allColors = colors;
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}