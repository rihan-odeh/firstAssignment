import React, {useState} from "react";
import {toast} from 'react-toastify';

toast.configure()
function Function(){
    const [info, setInfo] =
    useState({ firstName: '', lastName: '', email: '', password: '', confirmPassword: '' });
    const notify = ()=>{
      toast.error('Incorrect Input')
  }

    return (
        
    <form onSubmit={e=> {if(!(info.password===info.confirmPassword)){
        alert("Password and confirmation password do not match. ")
   }}}>

    <div className="div" >

      <label htmlFor="firstName">First name </label>
      <div >
        <input  required type="text" onChange={e => {
             if((/[!@#$%^&*(),.?":{}|<>]/g.test(e.target.value) || /\d+/g.test(e.target.value))){
            notify();}
                else{
        setInfo({
          ...info, firstName: e.target.value
        })}
        
       } } />
       

      </div>

    </div >



    <div >

      <label htmlFor="LastName">Last name </label>

      <div >

        <input required type="text" onChange={e => 
         {
            if((/[!@#$%^&*(),.?":{}|<>]/g.test(e.target.value) || /\d+/g.test(e.target.value))){
           alert("Not a valid name, please insert a valid name.")}
               else{
                   setInfo({
          ...info, lastName: e.target.value
        })} }} />

      </div>

    </div>



    <div >

      <label htmlFor="Email">Email </label>

      <div >


        <input required type="email" onChange={e => 
         {
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(e.target.value)) {
           alert("Not a valid email, please insert a valid email.")}
               else{setInfo({
          ...info, email: e.target.value
        })} }}/>

      </div>

    </div>

    <div >

      <label htmlFor="Password">Password </label>

      <div>

        <input required minLength={7}  type="password" onChange={e => 
        setInfo({
          ...info, password: e.target.value
        })} />

      </div>

    </div>

    <div >
      <label htmlFor="confirmPassword">Confirm Password </label>
      <div >
        <input required minLength={7}   type="password" onChange={e =>
        setInfo({
            ...info, confirmPassword: e.target.value
          })}
    
       />

      </div>
      <button style={{margin:20, color:"white", backgroundColor:"#2d053a"}}>Submit</button>
    </div>





    <h1>Your form data is :</h1>

    <br />

    <br />

    <p ><b>First name is :</b> {info.firstName}</p>

    <br />

    <p ><b>Last name is :</b> {info.lastName}</p>

    <br />

    <p ><b>Email is :</b> {info.email}</p>



  </form>





    );
}
export default Function