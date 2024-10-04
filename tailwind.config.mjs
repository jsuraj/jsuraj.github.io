/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      textColor: {
        main: "rgb(var(--color-text-main) / <alpha-value>)",
      },
      backgroundColor: {
        main: "rgb(var(--color-bg-main) / <alpha-value>)",
        muted: "rgb(var(--color-bg-muted) / <alpha-value>)",
      },
      borderColor: {
        main: "rgb(var(--color-border-main) / <alpha-value>)",
      },
      typography: (theme) => ({
        dante: {
          css: {
            "--tw-prose-body": theme("textColor.main / 100%"),
            "--tw-prose-headings": theme("textColor.main / 100%"),
            "--tw-prose-lead": theme("textColor.main / 100%"),
            "--tw-prose-links": theme("textColor.main / 100%"),
            "--tw-prose-bold": theme("textColor.main / 100%"),
            "--tw-prose-counters": theme("textColor.main / 100%"),
            "--tw-prose-bullets": theme("textColor.main / 100%"),
            "--tw-prose-hr": theme("borderColor.main / 100%"),
            "--tw-prose-quotes": theme("textColor.main / 100%"),
            "--tw-prose-quote-borders": theme("borderColor.main / 100%"),
            "--tw-prose-captions": theme("textColor.main / 100%"),
            "--tw-prose-code": theme("textColor.main / 100%"),
            "--tw-prose-pre-code": theme("colors.zinc.100"),
            "--tw-prose-pre-bg": theme("colors.zinc.800"),
            "--tw-prose-th-borders": theme("borderColor.main / 100%"),
            "--tw-prose-td-borders": theme("borderColor.main / 100%"),
          },
        },
        DEFAULT: {
          css: {
            a: {
              fontWeight: "normal",
              textDecoration: "underline",
              textDecorationStyle: "dashed",
              textDecorationThickness: "1px",
              textUnderlineOffset: "2px",
              "&:hover": {
                textDecorationStyle: "solid",
              },
            },
            "h1,h2,h3,h4,h5,h6": {
              fontWeight: 500,
            },
            blockquote: {
              border: 0,
              fontSize: "1.3125em",
              fontStyle: "italic",
              fontWeight: "normal",
              lineHeight: 1.4,
              paddingLeft: 0,
              '@media (min-width: theme("screens.sm"))': {
                fontSize: "1.66667em",
                lineHeight: 1.3,
              },
            },
            // Updated styles for inline code
            "code::before": {
              content: "none",
            },
            "code::after": {
              content: "none",
            },
            code: {
              color: "#844ee7",
              backgroundColor: "rgb(235 234 231)", // Slightly darker than bg-muted
              borderRadius: theme("borderRadius.md"),
              padding: `${theme("spacing.1")} ${theme("spacing.1")}`,
              fontSize: "0.875em",
              fontWeight: "600",
            },
            // Dark mode styles for inline code
            ".dark code": {
              color: "#B392F0",
              backgroundColor: "#24292E", // Slightly lighter than bg-muted
            },
            // Preserve styles for code blocks
            "pre code": {
              color: "inherit",
              backgroundColor: "transparent",
              borderRadius: 0,
              padding: 0,
              fontSize: "inherit",
              fontWeight: "normal",
            },
          },
        },
        lg: {
          css: {
            blockquote: {
              paddingLeft: 0,
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
