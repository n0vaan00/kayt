import React, {useState} from 'react'
import axios from 'axios';

export default function Kirjaudu() {

    const[firstname, setFirstname] = useState("");
    const[lastname, setLastname] = useState("");
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const[email, setEmail] = useState("");
    const[phone, setPhone] = useState("");

    const createUser = e =>{
        e.preventDefault();
        axios.post("http://localhost/reimanproju/add.php", {
            firstname: firstname,
            lastname:lastname,
            email:email,
            phone:phone,
            username:username,
            password:password
        })
        .catch(e=> console.log(e))
    }

    return (
        <div>
        <h2>Kirjaudu sisään</h2>
        <form>
        <label>Etunimi</label>
  		<input value={firstname} onChange={e => setFirstname(e.target.value)}></input>
  		<label>Sukunimi</label>
  		<input value={lastname} onChange={e => setLastname(e.target.value)}></input>
          <label>Sähköposti</label>
  		<input value={email} onChange={e => setEmail(e.target.value)}></input>
          <label>Puhelin</label>
  		<input value={phone} onChange={e => setPhone(e.target.value)}></input>
  		<label>Käyttäjänimi</label>
  		<input value={username} onChange={e => setUsername(e.target.value)}></input>
  		<label>Salasana</label>
  		<input value={password}  onChange={e => setPassword(e.target.value)}></input>
  		<button onClick={createUser}>Lisää asiakas</button>
        </form>
        </div>
    )
}
