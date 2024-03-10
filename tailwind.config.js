/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                brand: "#0095f6",
                facebook: "#385185",
                link: "#00376b",
            },
            backgroundImage: {
                "logo-pattern":
                    "url(https://static.cdninstagram.com/images/instagram/xig/homepage/phones/home-phones.png?__makehaste_cache_breaker=HOgRclNOosk)",
                "phone-pic":
                    "url(https://www.instagram.com/images/instagram/xig/homepage/screenshots/screenshot3.png?__d=www)",
            },
        },
    },
    plugins: [],
};
