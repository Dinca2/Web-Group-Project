import './AnimalReg.css';

export default function AnimalReg() {
    return (
       <div className="popup" id="pet-register">
          <h1>Register Abandoned Animal</h1>
          <form action="register" className="pet-register-form" method="POST">
                
            <label htmlFor="image"><b>Upload image</b></label>
            <input type="file" placeholder="Upload Image" name="image" id="image"/>
            <br/>
            <label htmlFor="name"><b>Name</b></label>
            <input typr="text" placeholder="Add Your Name" name="name" id="name"/>
            <br/>
            <label htmlFor="description"><b>Description</b></label>
            <input type="text" placeholder="Please describe anything about the animal(ex. breed, place you found, the situation)" name="descritption" id="description"/>
            <br/>
            <button type="submit" className="submit-pet">Add Animal</button>
                
          </form>
        
      </div>);
  }
