import React, { useEffect, useRef } from 'react';
import { Paper, List } from '@mui/material';
import ChatMessage from './ChatMessage';

const ChatWindow = ({ messages }) => {
	const messagesEndRef = useRef(null);

	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
	};

	useEffect(scrollToBottom, [messages]);

	return (
		<Paper
			style={{
				maxHeight: '80vh',
				height: '80vh',
				overflow: 'auto',
				backgroundColor: '#333',
				'&::-webkit-scrollbar': {
					width: '1px',
				},
				'&::-webkit-scrollbar-thumb': {
					backgroundColor: '#888',
					borderRadius: '4px',
				},
				'&::-webkit-scrollbar-thumb:hover': {
					backgroundColor: '#555',
				},
			}}
		>
			<List
				style={{
					'&::-webkit-scrollbar': {
						width: '1px',
					},
					'&::-webkit-scrollbar-thumb': {
						backgroundColor: '#888',
						borderRadius: '4px',
					},
					'&::-webkit-scrollbar-thumb:hover': {
						backgroundColor: '#555',
					},
				}}
			>
				{messages.map((message, index) => (
					<ChatMessage key={index} message={message} />
				))}
				<div ref={messagesEndRef} />
			</List>
		</Paper>
	);
};

export default ChatWindow;
