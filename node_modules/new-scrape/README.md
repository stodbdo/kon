# Note
ID</br>
Jika Ada Bug, Silahkan Buat [Issues](https://github.com/KilerBotz/new-scrape/issues/new)

EN</br>
If there are bugs, please create [Issues](https://github.com/KilerBotz/new-scrape/issues/new)


# Installation

## Latest
`npm i github:KilerBotz/new-scrape`

## Npm 
`npm i new-scrape`


# Require
```js
const kiler = require("new-scrape")
```

# Docs

## Example
```js
const kiler = require('new-scrape');
const judul = 'bot'

kiler.pinterest(judul)
    .then(result => {
     console.log(result)
});
```
# OR
```js
const kiler = require('new-scrape');
const judul = 'bot'

kiler.linkwa(judul)
    .then(result => {
     console.log(result)
});
```
