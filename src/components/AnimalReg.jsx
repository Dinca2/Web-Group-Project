export default function AnimalReg() {
    return (
       <div className="popup" id="pet-register">
          <h1>Register Pet</h1>
          <form action="register" className="pet-register-form" method="POST">
                
            <label htmlFor="image"><b>Upload image</b></label>
            <input type="file" placeholder="Upload Image" name="image" id="image"/>
            <br/>
            <label htmlFor="name"><b>Name</b></label>
            <input typr="text" placeholder="Add Name" name="name" id="name"/>
            <br/>
            <label htmlFor="description"><b>Description</b></label>
            <input type="text" placeholder="Add Description" name="descritption" id="description"/>
            <br/>
            <button type="submit" className="submit-pet">Add Pet</button>
                
          </form>
        
      </div>);
  }
