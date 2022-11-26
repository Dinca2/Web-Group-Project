import {useEffect} from 'react';
import {useNavigate} from 'react-router';

export default function Login() {

  return (
      <div className="popup" id="login">
        <h1>Login</h1>
        <form action="/login" method="POST">
              
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
  
