import  { useState } from "react";
import './login.css'
import logo from "./image/SB Long@3x.png"
function Login(){
    const [corporateId , setCorporateId]=useState("");
    const [userId , setUserId]=useState("");
    const [password , setPassword]=useState("");

    const handleSignIn=async()=>{
        const payload={
            corporate_id: corporateId,
            userid: userId,
            password: password
        };
        try{
            const response= await fetch("https://api.vauras.cloud/api/employee_signin",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });
            const result = await response.json();
            console.log("API response:", result);
            if (response.ok) {
                alert("Login successful!");
              } else {
                alert(result.message || "Login failed");
              }
        }catch(error)
        {
            console.error("Error during API call:", error);
            alert("An error occurred. Please try again.");
        }
    };
    return(
        <div className="login-container">
      <div className="left-panel">
        <div className="illustration">
          <img
            src="https://cdn-icons-png.flaticon.com/512/6073/6073873.png"
            alt="Illustration"
          />
        </div>
        <div className="loginp">
        <h2>Why Payroll?</h2>
        <p>
          SalaryBooks stands out among payroll software options for its
          user-friendly interface, cost-effectiveness, and strong focus on local
          compliance, making it ideal for small to medium-sized businesses. It
          simplifies payroll processing with automated salary calculations, tax
          deductions, and payslip generation, while ensuring accuracy and data
          security. With seamless integration options, real-time customer
          support, and tailored features for regional tax laws like EPF, ESI,
          and TDS, SalaryBooks offers a reliable and efficient alternative to
          more complex or expensive payroll systems.
        </p>
        </div>
    </div>
    <div className="right-panel">
    <img
          className="logo"
          src={logo}
          alt="SalaryBooks Logo"
        />
        <h3>Sign In</h3>
        <p>Welcome Book! Please Sign in.</p>
        <input type="text" placeholder="Enter Corporate ID" value={corporateId} onChange={(e)=>setCorporateId(e.target.value)}/>
        <input type="text" placeholder="Enter User ID" value={userId} onChange={(e)=>setUserId(e.target.value)}/>
        <input type="password" placeholder="Enter Your Password" value={password}onChange={(e)=>setPassword(e.target.value)}/>
        <div className="checkbox-row">
            <input type="checkbox" id="remember"/>
            <label htmlFor="remember"><strong>Remember Me</strong></label>
        </div>
        <button className="sign-in-btn" onClick={handleSignIn}>Sign In➝</button>
    </div>
    </div>
    )
}
export default Login;