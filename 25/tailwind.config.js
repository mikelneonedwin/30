const config2 = {
    theme: {
        extend: {
            screens: {
                'sm': {'min': '0px', 'max':'1023px'},
                'xl': {'min': '0px'}
            },
            colors: {
                myBlue: "hsl(246, 80%, 60%)",
                myLightRedWork: "hsl(15, 100%, 70%)",
                myLoftBluePlay: "hsl(195, 74%, 62%)",
                myLightRedStudy: "hsl(348, 100%, 68%)",
                myLimeGreenRExercise: "hsl(145, 58%, 55%)",
                myVioletSocial: "hsl(264, 64%, 52%)",
                mySoftOrangeSelfCare: "hsl(43, 84%, 65%)",
                myVeryDarkBlue: "hsl(226, 43%, 10%)",
                myDarkBlue: "hsl(235, 46%, 20%)",
                myDesaturatedBlue: "hsl(235, 45%, 61%)",
                myPaleBlue: "hsl(236, 100%, 87%)"
            }
        }
    }
}
try {
    tailwind.config = config2;
} catch {
    module.exports = config2;
}