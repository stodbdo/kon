const kiler = require('new-scrape');
const judul = 'bot'

kiler.pinterest(judul)
    .then(result => {
     console.log(result)
});

/*const judul = 'bot'

kiler.linkwa(judul)
    .then(result => {
     console.log(result)
});*/
