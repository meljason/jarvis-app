import './App.css';
import ChatBot from './components/ChatBot';

const App = () => {
	console.log(
		'HUGGINGFACE_API_KEY',
		process.env.REACT_APP_HUGGING_FACE_API_KEY
	);
	return <ChatBot />;
};

export default App;
