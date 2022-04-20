import React from "react";
import './SignUp.css';



const SignUp = () => {

    return(
        
        <div>
        <h2>SignUp</h2>
         <form action="https://formspree.io/f/moqrkrya" method="POST">
             <div className="form-group">
                   <label>Nazwa uzytkownika</label>
                   <input type="text" minLength={4}></input>
                   <label>Podaj twoj adress email</label>
                   <input type="e-mail"></input>
                   <label>Stworz swoje haslo. Haslo musi zawierać co najmniej jeden specjalny znak z następujących: ! # @ $ %)</label>
                   <input type="password"></input>
                   <label>Potwierdz swoje haslo</label>
                   <input type="password"></input>
                   <label>Submit</label>
                   <input type="submit" className="submit"></input>
            </div>

         </form>
       </div> 
    );
    
}




export default SignUp;