/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          50: '#e0f7f9',
          100: '#b3eef0',
          200: '#80e4e6',
          300: '#4ddadc',
          400: '#26d1d3',
          500: '#00c7c9',
          600: '#00adb0',
          700: '#008f91',
          800: '#006f71',
          900: '#004e51',
        },
        secondary: {
          50: '#ffe9e5',
          100: '#ffcdc4',
          200: '#ffaca0',
          300: '#ff8b7c',
          400: '#ff7164',
          500: '#ff574c',
          600: '#e64e44',
          700: '#cc453c',
          800: '#b33c34',
          900: '#99332b',
        },
        text: {
          default: '#333333', // Primary text
          secondary: '#555555', // Secondary text
          muted: '#777777', // Muted/inactive text
        },        
                
      },
      fontFamily: {
        Poppins: ["Poppins"],
        "poppins-medium": ["Poppins-Medium"],
        "poppins-semibold": ['Poppins-SemiBold'],
        "poppins-bold": ['Poppins-Bold']
      }
    },
  },
  plugins: [],
};
