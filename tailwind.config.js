/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            animation: {
                "bounce-slow": "bounce-slow 2s linear infinite",
            },
            keyframes: {
                "bounce-slow": {
                    "0%, 100%": {
                        transform: "translateY(-200%)",
                        "animation-timing-function": "cubic-bezier(1, 0, 1, 1)",
                    },
                    "50%": {
                        transform: "translateY(200%)",
                        "animation-timing-function": "cubic-bezier(0, 0, 0.1, 1)",
                    },
                },
            },
        },
    },
    plugins: [],
};
