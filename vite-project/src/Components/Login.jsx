import React from 'react'
import {Link} from "react-router-dom"

function Login() {
  return (
    <div style={{"backgroundColor":"aliceblue"}}>
        <fieldset style={{"margin":"50px"}}>
            <legend>Form To Login</legend>
            <form action="">
                <label htmlFor="naam">Name:</label>
                <input type="text" placeholder='Enter Your Name' id='naam' />
                <br /><br />
                <label htmlFor="paas">Password : </label>
                <input type="password" placeholder='Enter Your Password' id='naam'/>
            </form>
            <Link style={{"textDecoration":"none","marginLeft":"900px","color":"red"}} to="/signup">if you are New click here , </Link>
        </fieldset>
    </div>
  )
}

export default Login