import React from 'react'
import {Link} from "react-router-dom"

function Register() {
  return (
    <div style={{"backgroundColor":"aliceblue"}}>
        <fieldset>
            <legend>Form to Signup</legend>
            <form action="">
                <label htmlFor="naam">Enter Your Username:</label>
                <input type="text" id='naam'/>
                <br /><br />
                <label htmlFor="umar">Enter Your Age : </label>
                <input type="number" id='umar' /><br /><br />
                <label htmlFor="puranam">Enter Your FullName : </label>
                <input type="text" id='puranam' /><br /><br />
                <label htmlFor="pass">Enter Your Password : </label>
                <input type="password" id='pass'/>
            </form>
            <Link style={{"textDecoration":"none","marginLeft":"900px","color":"red"}} to="/login">if already Register then Click here </Link>
        </fieldset>
    </div>
  )
}

export default Register