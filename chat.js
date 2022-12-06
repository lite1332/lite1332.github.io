
const client = new tmi.Client({
	channels: [ 'sergamerup' ]
});

client.connect();

client.on('message', (channel, tags, message, self) => {
	// "Alca: Hello, World!"
	document.write(`${tags['display-name']}: ${message} <br />`);
});