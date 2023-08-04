import React from 'react';
import { ListItem, Typography } from '@mui/material';

const ChatMessage = ({ message }) => {
	return (
		<ListItem
			style={{
				justifyContent:
					message.sender === 'user' ? 'flex-end' : 'flex-start',
			}}
		>
			<Typography
				variant='body1'
				style={{
					background:
						message.sender === 'user' ? '#4caf50' : '#2196f3',
					padding: '8px',
					borderRadius: '8px',
					color: '#FFF',
				}}
			>
				{message.text}
			</Typography>
		</ListItem>
	);
};

export default ChatMessage;
