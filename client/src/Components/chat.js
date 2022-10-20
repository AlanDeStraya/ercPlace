import React from 'react';
import { useState, useEffect, useRef } from 'react';

const Chat = ({ socket }) => {
	
	const [msgs, setMsgs] = useState([{message: 'Hi', messageId: '1', sender: 'Alan', timestamp: Date.now()}]);
	const [typing, setTyping] = useState('');
	const [sendMsg, setSendMsg] = useState('');
	
	const chatWindow = useRef();
	
	useEffect(() => {
		console.log('rndr msg?');
	},[msgs]);
	
	
//get username, from ?commslive? before opening chat
	const username = 'User1';
	socket.emit('cNewUser', username);
	
	socket.on('sUserConnected', name => {
		renderMessage(`${name} joined`);
	});
	
	let users;
	socket.on('sNewUserPackage', pack => {
		users = pack.users;
		setMsgs(() => {
			return [...pack.messages];
		});
	});

	socket.on('sChatMessage', obj => {
		console.log(`chat message received: ${obj}`)
		renderMessage(obj);
	});

	socket.on('sUserDisconnected', obj => {
		renderMessage(obj);
	});

	socket.on('sTyping', name => {
		setTyping(() => name);
		chatWindow.scrollTop = chatWindow.scrollHeight;
	});
	
	socket.on('sNotTyping', () => {
		setTyping(() => '' );
	});
	
	
	function stopTyping() {
		setTyping(() => '');
		socket.emit('notTyping', username);
	};
	
	let timer;
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
		setMsgs((prevState) => {
			let arr = [...prevState, message];
      return arr;
		});
		chatWindow.scrollTop = chatWindow.scrollHeight;
	};
		
		



	return (
		<div id='chat'>
			<div id='chat-window' ref={chatWindow}>
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
			<form id='chat-form' autoComplete='off' onSubmit={submitChat}>
				<label id='chat-label' htmlFor='chat-input'>&nbsp;Chat:&nbsp;</label>
				<input className='input' id='chat-input' onKeyPress={handleTyping} value={sendMsg} onChange={e => setSendMsg(e.currentTarget.value)} />
				<input id='submit' type='submit' value='Send' />
			</form>
		</div>
	);

};

export default Chat;
