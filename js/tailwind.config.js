try{
    tailwind.config = {
        darkMode: ['class', 'html[class~=dark]'],
        theme: {
            extend: {
                screens: {
                    'sm': {'min': '0px', 'max':'1023px'},
                    'xl': {'min': '0px'}
                }
            }
        }
    }
}catch{}