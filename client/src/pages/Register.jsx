import React ,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();
    console.log(username)
    console.log(password)

      const res = await fetch('http://localhost:4000/register', {method: 'POST',body: JSON.stringify({username, password}), headers: {'Content-Type':'application/json'},})

      if(res.status===200){
        alert('Register Success')
        navigate('/login')
      }
      else{
        alert('Register Failed')
      }
    
    
      
    
  }

  return (
    <>
    <form className= 'register'onSubmit={register}>
        <h1>Register Here!</h1>
      <input type="text" value = {username} placeholder='username' onChange= {(e)=> setUsername(e.target.value)} />
      <input type="password" value={password} placeholder='password' onChange= {(e)=>{ setPassword (e.target.value)}} />
      <button>Register</button>
    </form>
    </>
  )
}

export default Register