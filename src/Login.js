import React from "react";


const Login = () => {

    return(
        <div>
        <h2>Log in</h2>
         <form>
             <div className="form-group">
                   <label>Podaj nazwe uzytkownika</label>
                   <input type="text" minLength={4}></input>
                   <label>Wprowadz haslo</label>
                   <input type="password"></input>
                   <label>Zaloguj sie</label>
                   <input type="submit" className="submit"></input>

             </div>

         </form>
       </div> 
    );
}




export default Login;