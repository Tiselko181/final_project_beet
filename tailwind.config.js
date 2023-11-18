/** @type {import('tailwindcss').Config} */

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/tw-elements-react/dist/js/"
    ],
    theme: {
        extend: {
            keyframes: {
                blurKeyframe: {
                    '0%, 100%': {
                        opsopacity: '.3',
                        filter: 'blur(4px)'
                    },
                    '50%': {
                        opsopacity: '.3',
                        filter: 'blur(4px)'
                    },
                }
            }
        },
        screens: {
            'xl': '1536px',
            // => @media (min-width: 1536px) { ... }
            'lg': '1280px',
            // => @media (min-width: 1200px) { ... }
            'lmd': '1024px',
            // => @media (min-width: 1200px) { ... }
            'md': '992px',
            // => @media (min-width: 992px) { ... }
            'sm': '768px',
            // => @media (min-width: 768px) { ... }
            's': '576px',
            // => @media (min-width: 576px) { ... }
            'xs': '480px',
            // => @media (min-width: 480px) { ... }
            '2xs': '320px',
            // => @media (min-width: 320px) { ... }
        },
        container: {
            padding: '1rem',
        },
    },
    darkMode: "class",
    plugins: [
    ]
};
