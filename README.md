# Rune Magic Javascript client
Client library to start using Rune Magic using Javascript

A simple example exists at [example.html](./example.html).

## Installation

RuneMagic uses socket.io, so include the library or add a script tag:
```html
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.3.0/socket.io.slim.js"></script>
```


By including [rune_magic.js](rune_magic.js) in your project you will gain access to a RuneMagic object:
```javascript
// You can use either RuneMagic or window.RuneMagic
const rm = window.RuneMagic; 
```

You can also include RuneMagic with a script tag:
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
Every rune data object will contain an object as described in [runes data documentation](https://github.com/RimonStudio-RuneMagic/runes-data)


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## License
[MIT](https://choosealicense.com/licenses/mit/)