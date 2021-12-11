import React, {useState} from 'react'
import axios from 'axios';

export default function Kirjaudu() {
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");

    const checkUser = e =>{
        e.preventDefault();
        axios.post("http://localhost/reimanproju/login.php", {
            username:username,
            password:password
        })
        .catch(e=> console.log(e))
    }

    return (
        <div>
        <h2>Kirjaudu sisään</h2>
        <form>
  		<label>Käyttäjänimi</label>
  		<input value={username} onChange={e => setUsername(e.target.value)}></input>
  		<label>Salasana</label>
  		<input value={password} onChange={e => setPassword(e.target.value)}></input>
  		<button onClick={checkUser}>Kirjauvvu sissää</button>
        </form>
        </div>
    )
}
