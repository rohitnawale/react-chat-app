import axios from "axios";
import { useState } from "react"

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = { 'project-ID': 'ff0d7516-4f4d-406c-ac76-4c4e243e72b7', 'User-Name': username, 'User-Secret': password}
        try {
            await axios.get('https://api.chatengine.io/chats', {headers: authObject});
             localStorage.setItem('username', username);
             localStorage.setItem('password', password);
             window.location.reload(); 
             setError('');  
        } catch (error) {
            setError('Oops, incorrect credentials');
        }

    }
    return(
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat App</h1>
                <h3 style={{color: 'white', marginLeft: '19px'}}>Enter an unique Username for first time and use that for login since next time.</h3> <br></br>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required/>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required/>
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;