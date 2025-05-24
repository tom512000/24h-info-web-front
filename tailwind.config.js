/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                nowaltlight : ['NowAlt-Light', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
