import React, { useState } from 'react';
import ChatWindow from './ChatWindow';
import ChatInput from './ChatInput';
import axios from 'axios';
import * as use from '@tensorflow-models/universal-sentence-encoder';

const ChatBot = () => {
	const [messages, setMessages] = useState([]);

	const handleSend = async (text) => {
		// Add user's message to the state
		const newMessages = [...messages, { sender: 'user', text }];
		setMessages(newMessages);

		// Load the model.
		const model = await use.load();

		// Embed an array of sentences.
		const sentences = [text];
		const embeddingsTensor = await model.embed(sentences);
		const embeddingsArray = await embeddingsTensor.array();

		console.log('Embeddings to be stored:', embeddingsArray); // store this in Vector DB

		// Create the request payload
		const payload = {
			inputs: text,
		};

		// Set up the headers
		const headers = {
			Authorization: `Bearer ${process.env.REACT_APP_HUGGING_FACE_API_KEY}`,
		};

		// Make the API call
		axios
			.post('https://api-inference.huggingface.co/models/gpt2', payload, {
				headers,
			})
			.then((response) => {
				// Add bot's response to the state
				const botMessage =
					response.data[0]?.generated_text ||
					'Sorry, I did not understand that.';

				const [firstLine] = botMessage.split('\n');

				setMessages([
					...newMessages,
					{ sender: 'bot', text: firstLine },
				]);
			})
			.catch((error) => {
				console.error(error);
				setMessages([
					...newMessages,
					{
						sender: 'bot',
						text: 'An error occurred. Please try again later.',
					},
				]);
			});
	};

	return (
		<div
			style={{
				width: 500,
				height: '80%',
				margin: 'auto',
				background: '#222',
				color: '#FFF',
				borderRadius: '10px',
				boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
			}}
		>
			<h1 style={{ padding: '20px' }}>Jarvis</h1>
			<ChatWindow messages={messages} />
			<ChatInput onSend={handleSend} />
		</div>
	);
};

export default ChatBot;
