import { ChatEngine } from 'react-chat-engine';

import LoginForm from './components/LoginForm';

import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {
  if(!localStorage.getItem('username')) return <LoginForm/>
  return(
    <ChatEngine
      height="100vh"
      projectID="ff0d7516-4f4d-406c-ac76-4c4e243e72b7"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
    />
  )
}

export default App;