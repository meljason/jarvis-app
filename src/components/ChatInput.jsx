import React, { useState } from 'react';
import { Input, IconButton, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const ChatInput = ({ onSend }) => {
	const [message, setMessage] = useState('');

	const handleKeyPress = (e) => {
		if (e.key === 'Enter' && !e.shiftKey) {
			e.preventDefault();
			handleSend();
		}
	};

	const handleSend = () => {
		if (message.trim()) {
			onSend(message.trim());
			setMessage('');
		}
	};

	return (
		<div
			style={{
				padding: '10px',
				display: 'flex',
				backgroundColor: '#444',
				borderTop: '1px solid #555',
			}}
		>
			<Input
				placeholder='Type a message...'
				style={{ flexGrow: 1, color: '#FFF' }}
				value={message}
				onKeyPress={handleKeyPress}
				onChange={(e) => setMessage(e.target.value)}
			/>
			<IconButton
				onClick={handleSend}
				disabled={!message}
				style={{ color: '#FFF' }}
			>
				<SendIcon />
			</IconButton>
		</div>
	);
};

export default ChatInput;
