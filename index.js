const axios = require("axios")
const urls = ["https://azazel-music-ond.glitch.me"]
setInterval(function() {
            urls.forEach(url => {
            axios.get(url).then(console.log("Pong at " + Date.now())).catch(() => {});
        })
    }, 200 * 280000);
