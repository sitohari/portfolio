module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
    darkMode: false, 
    theme: {
        extend: {
            colors: {
                dark: '#0D1117',
                secondary: '#FF4C29',
                gray: '#F1F4F5',
            },
            fontFamily: {
                'poetsen': ['PoetsenOne', 'sans-serif'],
                'roboto': ['Roboto', 'sans-serif'],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],        
}