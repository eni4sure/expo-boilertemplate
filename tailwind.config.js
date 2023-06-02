/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        // break line
        "./src/screens/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Add color schemes
            },
        },
    },
    plugins: [],
};
