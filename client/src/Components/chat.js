import React from 'react';

const Chat = ({ socket }) => {

	return (
		<div id='chat'>
			<div id='chat-window'>
				<div id='chat-window-messages'></div>
				<div id='chat-window-typing'></div>
			</div>
			<form id='chat-form' autocomplete='off'>
				<label id='chat-label' for='chat-input'>&nbsp;Message:&nbsp;</label>
				<input class='input' id='chat-input' />
				<input class='submit' type='submit' value=' send ' />
			</form>
		</div>
	);

};

export default Chat;
