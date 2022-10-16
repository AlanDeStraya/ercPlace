import React from 'react';
import { useState, useEffect } from 'react';

const Chat = ({ socket }) => {
	
	const [msgs, setMsgs] = useState([]);
	const [typing, setTyping] = useState('');
	const [sendMsg, setSendMsg] = useState('');
	
	const chatWindow = document.getElementById('chat-window');
	
	useEffect(() => {
		console.log('chg msg');
	},[msgs]);
	
	
//get username, from commslive before opening chat
	const username = 'User1';
	socket.emit('cNewUser', username);
	let timer;
	let users;
	
	socket.on('sUserConnected', name => {
		renderMessage(`${name} joined`);
	});
	
	socket.on('sNewUserPackage', pack => {
		console.log(pack.users);
		users = pack.users;
		setMsgs(() => {
			return [...pack.messages];
		});
	});

	socket.on('sChatMessage', obj => {
		renderMessage(obj);
	});

	socket.on('sUserDisconnected', obj => {
		renderMessage(obj);
	});

	socket.on('sTyping', name => {
		setTyping(() => name);
		chatWindow.scrollTop = chatWindow.scrollHeight;
	});
	
	socket.on('sNotTyping', name => {
		setTyping(() => '' );
	});
	
	
	function stopTyping() {
		setTyping(() => '');
		socket.emit('notTyping', username);
	};
	
	function handleTyping(event) {
		if(event.code === 'Enter') {
			clearTimeout(timer);
			return;
		}
		if(typing) {
			clearTimeout(timer);
			timer = setTimeout(stopTyping, 7000);
		} else {
			setTyping(() => 'username');
			socket.emit('cTyping', username);
			timer = setTimeout(stopTyping, 7000);
		}
	};
	
	
	function submitChat(event) {
		event.preventDefault();
		if(typing) {
			stopTyping();
		}
		socket.emit('cChatMessage', sendMsg);
		setSendMsg(() => '');
	};
	
	function renderMessage(message) {
		setMsgs(() => {
			return [...msgs, message];
		});
		chatWindow.scrollTop = chatWindow.scrollHeight;
	};
		
		



	return (
		<div id='chat'>
			<div id='chat-window'>
				<div id='chat-window-messages'>
					{[msgs]
					.sort((a, b) => a.timestamp - b.timestamp)
					.map((message) => (
						<div key={message.messageId}>
							<em>{`${message.timestamp}, ${message.sender}`}</em>
							<p>{`${message.message}`}</p>
						</div>
					))}
				</div>
				{typing && <div id='chat-window-typing'>{`${typing} is typing...`}</div>}
			</div>
			<form id='chat-form' autocomplete='off' onSubmit={submitChat}>
				<label id='chat-label' for='chat-input'>&nbsp;Chat:&nbsp;</label>
				<input className='input' id='chat-input' onKeyPress={handleTyping} onChange={e => setSendMsg(e.currentTarget.value)} />
				<input id='submit' type='submit' value=' send ' />
			</form>
		</div>
	);

};

export default Chat;
