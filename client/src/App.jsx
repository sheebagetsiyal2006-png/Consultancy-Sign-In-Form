import { useState } from "react";


import './App.css';


 function App() {
   const [count, setCount] = 
   useState(0);
   return(
     <>
     <form action="http://localhost:5000/" 
     method="POST" >


        <input type="text" name="username"/>
        <input type="submit" value="Submit "/>

     </form>
     </>
   );
 }
 export default App;
