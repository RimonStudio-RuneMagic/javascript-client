# Rune Magic Javascript client
Client library to start using Rune Magic using Javascript

A simple example exists at [example.html](./example.html).

## Installation
By including [rune_magic.js](rune_magic.js) in your project you will gain access to a RuneMagic object:
```javascript
// You can use either RuneMagic or window.RuneMagic
const rm = window.RuneMagic; 
```

You can also use a CDN:
```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/RimonStudio-RuneMagic/javascript-client/rune_magic.js"></script>
```

## Usage
You need to acquire a token for any of the calls:
```javascript
const TOKEN = 'put_your_token_here';
```

For the time being tokens are not used, so you can skip this step.

define your callback for receiving data from runes:
```javascript
function callback(data) {
  document.body.innerHTML += '<div>' + JSON.stringify(data) + '</div>';
}
```

Connect to Rune Magic server and start getting updates:
```javascript
RuneMagic.connect(TOKEN, callback);
```

## Runes data
Every rune data object will contain the rune id, its up time and a list of sensors.
For a detailed description of the data please look at [TODO: create a detailed data page]

Example:
```javascript
const rd = {
  "id": "00000001-645923A4AE30",
  "uptime": 4765,
  "sensors": [{
    "id": 252,
    "data": ["1b:a3:c0:05:79:e4", "2a:ba:60:49:d9:c0", "36:a8:c9:1d:83:05", "68:d9:3c:8e:8d:12", "LG SJ9(EB:F0)"]
  }]
}
```


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## License
[MIT](https://choosealicense.com/licenses/mit/)