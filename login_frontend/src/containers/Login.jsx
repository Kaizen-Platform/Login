import React, {useState} from "react";
import "./Login.css";

import NewLogin from "../NewLogin";
import zohologo from "./zohosignin.jpeg";
import Microsoftsignin  from "../Microsoftsignin";
import Multiuser_Login_Page from "../Multiuser_Login_Page";



const Login = () => {
    const [employee_id, setEmployeeid] = useState("");
    const [password, setPassword] = useState("");
    const [allEntry, setAllEntry] = useState([]);
    const submitForm = (e) => {
        e.preventDefault();
        const newEntry = {employee_id:employee_id, password:password}
        setAllEntry([...allEntry, newEntry]);    
    }

return ( 
    
    <div className ="xyz" id = "wwe" >
        <div className="g-signin"> <NewLogin/>    </div>
        <div> < Microsoftsignin/> </div>
        <div>  <Multiuser_Login_Page/></div>
       
       
       <a href= "https://accounts.zoho.in/signin?servicename=ZohoHome&signupurl=https://www.zoho.com/signup.html"> 
       <img src ={zohologo} id ="zohologo"/> </a>
       
    <form action="" onSubmit={submitForm}>
    <div id ="ss">   
    <ul> 
    <li> <h2> <strong> Sign In  </strong></h2> 
            <ul>
            <li> <strong> <h3> User Login </h3></strong>
                   <ul> 
                   <li> <label> <h3> Employee Id </h3> <br/>
                    <input type="numbers" id="employee_id" name="employee_id" autoComplete="off" 
                    value={employee_id} onChange={(e) => setEmployeeid(e.target.value)} required placeholder ="123456789" required/>
                    </label>
                    <div>
                    <label> <h3> Password </h3> <br/>
                    <input type="password" id="password" name="password" autoComplete="off" 
                    value={password} onChange={(e) => setPassword(e.target.value)} required placeholder ="*****" required /> 
                    </label>
                    </div>
                    <br/>
                    <button type = "Login"> Login </button>
                    </li></ul> 
                     </li>

                    <li> <strong> <h3> Admin Login </h3></strong>
                    <ul>
                    <li>   <label> <h3> Employee Id </h3> <br/>
                    <input type="numbers" id="employee_id" name="employee_id" autoComplete="off" 
                    value={employee_id} onChange={(e) => setEmployeeid(e.target.value)} required placeholder ="123456789" required/>
                    </label> 
                    <div>
                    <label> <h3> Password </h3> <br/>
                    <input type="password" id="password" name="password" autoComplete="off" 
                    value={password} onChange={(e) => setPassword(e.target.value)} required placeholder ="*****" required /> 
                    </label>
                    </div>
                    <br/>
                    <button type = "Login"> Login </button> </li> </ul> </li> 

                    <li> <strong> <h3> Super Admin Login </h3></strong>
                    <ul> 
                    <li>  <label> <h3> Employee Id </h3> <br/>
                    <input type="numbers" id="employee_id" name="employee_id" autoComplete="off" 
                    value={employee_id} onChange={(e) => setEmployeeid(e.target.value)} required placeholder ="123456789" required/>
                    </label> 
                    <div>
                    <label> <h3> Password </h3> <br/>
                    <input type="password" id="password" name="password" autoComplete="off" 
                    value={password} onChange={(e) => setPassword(e.target.value)} required placeholder ="*****" required /> 
                    </label>
                    </div>
                    <br/>
                    <button type = "Login"> Login </button> </li> </ul> </li> 

                    <li> <strong> <h3> Commettee Member Login</h3></strong>
                    <ul>
                    <li> <label> <h3> Employee Id </h3> <br/>
                    <input type="numbers" id="employee_id" name="employee_id" autoComplete="off" 
                    value={employee_id} onChange={(e) => setEmployeeid(e.target.value)} required placeholder ="123456789" required/>
                    </label>                     
                    <div>
                    <label> <h3> Password </h3> <br/>
                    <input type="password" id="password" name="password" autoComplete="off" 
                    value={password} onChange={(e) => setPassword(e.target.value)} required placeholder ="*****" required /> 
                    </label>
                    </div>
                    <br/>
                    <button type = "Login"> Login </button> </li> </ul> </li>

                    
                </ul>
        </li>
    <li> <h2> <strong> Sign Up  </strong></h2> 
    <ul>
    <li> *Enter Your Credentals*
    <div>
    <label> <h3> Employee Id </h3> <br/>
    <input type="numbers" id="employee_id" name="employee_id" autoComplete="off" 
     value={employee_id} onChange={(e) => setEmployeeid(e.target.value)} required placeholder ="123456789" required/>
    </label>
    </div>
    <div>
    <label> <h3> Password </h3> <br/>
    <input type="password" id="password" name="password" autoComplete="off" 
    value={password} onChange={(e) => setPassword(e.target.value)} required placeholder ="*****" required /> 
    </label>
    </div>
    <br/>
    <button type = "Submit"> Submit </button> </li>
    </ul> 
    </li> 
    </ul>
    </div>
    </form>
    </div>     
    );
    
}
export default Login;
