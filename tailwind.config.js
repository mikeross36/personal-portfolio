/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#0a0a0a',
                surface: '#121212',
                primary: '#a855f7', // Neon Purple
                secondary: '#3b82f6', // Neon Blue
                accent: '#ec4899', // Neon Pink
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            boxShadow: {
                'neon': '0 0 10px rgba(168, 85, 247, 0.5), 0 0 20px rgba(168, 85, 247, 0.3)',
                'neon-blue': '0 0 10px rgba(59, 130, 246, 0.5), 0 0 20px rgba(59, 130, 246, 0.3)',
            },
            backgroundImage: {
                'gradient-dark': 'linear-gradient(to bottom right, #0a0a0a, #1a1a1a)',
            }
        },
    },
    plugins: [],
}
