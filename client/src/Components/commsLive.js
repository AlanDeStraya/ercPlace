import React from 'react';

import Chat from './chat.js';

const CommsLive = ({ socket }) => {

	return (

		<Chat
			socket={socket} />
	);

};

export default CommsLive;
