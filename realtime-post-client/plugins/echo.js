//More: https://laravel.com/docs/8.x/broadcasting#client-ably
import Echo from 'laravel-echo';

window.Pusher = require('pusher-js');

export default (_, inject) => {
	const echo = new Echo({
	    broadcaster: 'pusher',
	    key: 'local', //from .env
	    wsHost: window.location.hostname,
	    wsPort: 6001,
	    forceTLS: false,
	    disableStats: true,
	});

	inject('echo', echo);
}