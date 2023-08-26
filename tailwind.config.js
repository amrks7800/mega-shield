/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    backgroundImage: {
      img1: "url('/car1.jpg')",
      img2: "url('/car2.jpg')",
      img3: "url('/car3.jpg')",
      img4: "url('/car4.jpg')",
      img5: "url('/car5.jpg')",
      img6: "url('/car6.jpg')",
      "img1-s": "url('/car1-s.jpeg')",
      "img2-s": "url('/car2-s.jpg')",
      "img3-s": "url('/car3-s.jpg')",
      "img4-s": "url('/car4-s.jpeg')",
      "img5-s": "url('/car5-s.jpeg')",
      "img6-s": "url('/car6-s.jpeg')",
      wheel: "url('/wheel.jpg')",
      welcome: "url('/welcome.jpg')",
      carbon: "url('/carpon.webp')",
      "opaque-gradient":
        "linear-gradient(to left, rgba(0,67,116,0.6) -26.48%, rgba(0,51,102,0.6) 73.52%)",
    },
    fontFamily: {
      arabic: '"Almarai", sans-serif',
    },
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
        "primary-gray": "#69696F",
        "light-gray": "#E4E4E7",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
