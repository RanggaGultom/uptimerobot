const axios = require("axios")
const urls = ["https://kayoo.glitch.me","https//mate-mat8ika.glitch.me","https://messa-music.glitch.me","https://pertalite.glitch.me","https://syreg-fe.glitch.me"]
setInterval(function() {
            urls.forEach(url => {
            axios.get(url).then(console.log("Pong at " + Date.now())).catch(() => {});
        })
    }, 60 * 1000);
