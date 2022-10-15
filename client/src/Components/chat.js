import React from 'react';

const Chat = ({ socket }) => {

//get username, from commslive before opening chat
	let typing;
	let timer;
	socket.emit('cNewUser', username);
	
	socket.on('sUserConnected, name => {
		renderMessage(`${name} joined`);
	});
	
	socket.on('sListOfUsers', users => {
		console.log(users);
	});



	return (
		<div id='chat'>
			<div id='chat-window'>
				<div id='chat-window-messages'></div>
				<div id='chat-window-typing'></div>
			</div>
			<form id='chat-form' autocomplete='off'>
				<label id='chat-label' for='chat-input'>&nbsp;Chat:&nbsp;</label>
				<input className='input' id='chat-input' />
				<input id='submit' type='submit' value=' send ' />
			</form>
		</div>
	);

};

export default Chat;
