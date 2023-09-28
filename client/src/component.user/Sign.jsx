import React, { useState } from "react";

const Sign = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (


    <div class="login-wrap">
	<div class="login-html">
		<input id="tab-1" type="radio" name="tab" class="sign-in" checked/><label for="tab-1" class="tab">Sign Up</label>
		<input id="tab-2" type="radio" name="tab" class="sign-up"/><label for="tab-2" class="tab">Sign In</label>
		<div class="login-form">
			<div class="sign-in-htm">
				<div class="group">
					<label for="user" class="label" onChange={(e)=>setUsername(e.target.value)}>Username</label>
					<input id="user" type="text" class="input"/>
				</div>
				<div class="group">
					<label for="pass" class="label" onChange={(e)=>setPassword(e.target.value)}>Password</label>
					<input id="pass" type="password" class="input" data-type="password"/>
				</div>
				
				<div class="group">
					<input type="submit" class="button" value="Sign In" onClick={()=>props.signIn({username,password})}/>
				</div>
				<div class="hr"></div>
				
			</div>
			<div class="sign-up-htm">
				<div class="group">
					<label for="user" class="label" onChange={(e)=>setUsername(e.target.value)}>Username</label>
					<input id="user" type="text" class="input"/>
				</div>
        <div class="group">
					<label for="pass" class="label" onChange={(e)=>setEmail(e.target.value)}>Email Address</label>
					<input id="pass" type="text" class="input"/>
				</div>
        <div class="group">
					<label for="pass" class="label" onChange={(e)=>setPassword(e.target.value)}>Password</label>
					<input id="pass" type="password" class="input" data-type="password"/>
				</div>
				
				
				<div class="group">
					<input type="submit" onClick={()=>props.signUp({username,email,password})} class="button" value="Sign Up"/>
				</div>
				<div class="hr"></div>
				
			</div>
		</div>
	</div>
</div>
   
  );
};

export default Sign;
