import React from 'react';

const Chat = ({ socket }) => {
	
	const [msgs, setMsgs] = useState([]);
	const [typing, setTyping] = useState('');
	
	const chatWindow = document.getElementById('chat-window');
	
	useEffect(() => {
		
	},[msgs]}
		
	
//get username, from commslive before opening chat
	socket.emit('cNewUser', username);
	let timer;
	let users;
	
	socket.on('sUserConnected, name => {
		renderMessage(`${name} joined`);
	});
	
	socket.on('sNewUserPackage', package => {
		console.log(package.sUsers);
		users = package.sUsers;
		setMsgs(() => {
			return [...messages];
		});
	});

	socket.on('sChatMessage', obj => {
		renderMessate(obj);
	});

	socket.on('sUserDisconnected', obj => {
		renderMessage(obj);
	});

	socket.on('sTyping', name => {
		setTyping(() => name});
		chatWindow.scrollTop = chatWindow.scrollHeight;
	});
	
	socket.on('sNotTyping', name => {
		setTyping(() => '' );
	});
	
	
	function stopTyping() {
		setTyping(() => '');
		socket.emit('notTyping', username);
	});
	
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
		socket.emit('cChatMessage', message);
		chatInput.value = '';
	};
	
	function renderMessage(message) {
		setMsgs(() => {
			return [...messages, obj];
		});
		chatWindow.scrollTop = chatWindow.scrollHeight;
	};
		
		



	return (
		<div id='chat'>
			<div id='chat-window'>
				<div id='chat-window-messages'></div>
				{typing && <div id='chat-window-typing'>{`${typing} is typing...`}</div>}
			</div>
			<form id='chat-form' autocomplete='off'>
				<label id='chat-label' for='chat-input'>&nbsp;Chat:&nbsp;</label>
				<input className='input' id='chat-input' onKeyPress={handleTyping} />
				<input id='submit' type='submit' value=' send ' />
			</form>
		</div>
	);

};

export default Chat;
