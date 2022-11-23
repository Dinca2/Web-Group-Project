import React from 'react';
import ReactDOM from 'react-dom';

  function Buttons() {
    return (<div>
            <button className="add-pet-button">add pet</button>
           </div>);
  }
  
  function Login() {
    return (<div className="login-popup" id="signin">
            
            <form action="/login" className="login" method="GET">
              <h1>Login</h1>
          
              <label htmlFor="email"><b>Email</b></label>
              <input type="text" placeholder="Enter Email" name="email" required/>
              <br/>
              <label htmlFor="psw"><b>Password</b></label>
              <input type="password" placeholder="Enter Password" name="psw" required/>
              <br/>
              <button type="button" className="submit-btn">Login</button>
              <button type="button" className="login-cancel">Close</button>
              
              <button type="button" className="sign-up-button">Sign up</button>
            </form>
          </div>);
  }
  
  function Signup() {
    return (<div className="sign-up-popup" id="signup">
            
            <form action="/register" className="sign-up" method="POST">
              <h1>Sign Up</h1>
          
              <label htmlFor="email"><b>Email</b></label>
              <input type="text" placeholder="Enter Email" name="email" required/>
              <br/>
              <label htmlFor="psw"><b>Password</b></label>
              <input type="password" placeholder="Enter Password" name="psw" required/>
              <br/>
              <button type="button" className="submit-btn">Sign up</button>
              <button type="button" className="sign-up-cancel">Close</button>
              
            </form>
        </div>);
  }
  
  function Addpet() {
    return (<div className="add-pet" id="pet-add">
            
            <h1>Add Pet</h1>
            <form action="add-pet" className="pet-adder-form" method="POST">
              
              <label htmlFor="image"><b>Upload image</b></label>
              <input type="file" placeholder="Upload Image" name="image" id="image"/>
              <br/>
              <lable htmlFor="name"><b>Name</b></lable>
              <input typr="text" placeholder="Add Name" name="name" id="name"/>
              <br/>
              <lable htmlFor="description"><b>Description</b></lable>
              <input type="text" placeholder="Add Description" name="descritption" id="description"/>
              <br/>
              <button type="button" className="submit-pet">Add Pet</button>
              <button type="button" className="add-pet-cancel">Cancel</button>
              
            </form>
          </div>);
  }
  
  function Pets() {
    return (<div className="pets"></div>);
  }
  
  function Register() {
  return  (<div id = "register">
             <React.Fragment>
              <Login/>
              <Signup/>
              <Addpet/>
              <Buttons/>
            </React.Fragment>
          </div>);
  }
  
  function App() {
    return (<React.Fragment>
              <Register/>
              <Pets/>
           </React.Fragment>);
  }
  
ReactDOM.render(<App/>, document.getElemenetById("root"));
