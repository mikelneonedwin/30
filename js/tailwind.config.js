const config = {
    darkMode: ['class', 'html[class~=dark]'],
    content: ["./**/*.html"],
    theme: {
        extend: {
            screens: {
                'sm': {'min': '0px', 'max':'1023px'},
                'xl': {'min': '0px'}
            }
        }
    }
}
try{
    tailwind.config = config;
} catch{
    module.exports = config;
}

/*
@tailwind base;
@tailwind components;
@tailwind utilities;
*/