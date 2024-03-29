/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                display: "Montserrat, sans-serif",
            },
            rotate: {
                15: "15deg",
            },
        },
    },
    plugins: [],
};
