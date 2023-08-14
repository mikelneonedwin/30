import config from '../js/export.config.js';
config.content = ['./27/index.html'];
config.theme.extend.colors = {
    _dark_violet: "hsl(257, 27%, 26%)",
    _grayish_violet: "hsl(257, 7%, 63%)",
    _very_dark_blue: "hsl(255, 11%, 22%)",
    _very_dark_violet: "hsl(260, 8%, 14%)",
    _cyan: "hsl(180, 66%, 49%)"
}
try{
    tailwind.config = config;
} catch{
    module.exports = config;
}