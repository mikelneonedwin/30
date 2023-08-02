export default async function(){
    const txt = await (await fetch('../js/babel.min.js')).text();
    const script = document.createElement("script");
    script.textContent = txt;
    document.head.appendChild(script);
    const scr = Array.from(document.querySelectorAll('[type="text/babel"]')).map(a => a.textContent).map(a => Babel.transform(a, {presets: ['es2015'], plugins: ['transform-react-jsx']}).code).map(a => {
        const elem = document.createElement("script");
        elem.textContent = a;
        return elem;
    });
    document.head.append(...scr);
}