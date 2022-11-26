import {useEffect} from 'react';
import {useNavigate} from 'react-router';
export default function Signup() {
  const history = useNavigate();
  
  async function handleSignup(e) {
    e.preventDefualt();
    const form = e.target;
    const user = {
      email: form[0].value,
      password: form[1].value,
    }
    
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringfy(user)
    });
  }
  
  useEffect(() => {
    fetch("/isUserAuth", {
      headers: {
        "x-access-token": localStorage.getItem("token")
      }
    });
  }, []);
  
  return (
    
      <div className="popup" id="signup">
        <h1>Sign Up</h1>
        <form onSubmit={event => handleSignup(event)}>
            
          <label htmlFor="email"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" required/>
          <br/>
          <label htmlFor="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required/>
          <br/>
          <input type="submit" value="Submit" className="submit-btn"/>
              
        </form>
    </div>
  );
}