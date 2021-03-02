import React from 'react';
import '../css/LoginPage.css';

function Login() {
    return (
        <div className="container">
            <h2>Form Login</h2>

            <br></br>
            <div className="card">
                <h1>Tugas Pertemuan 
                    Ketiga</h1>   
                <div className="row">
                    <p>Username   :</p>
                    <input type="text" placeholder="Type username" />
                </div>
                <div className="row">
                    <p>Password   :</p>
                    <input type="text" placeholder="Type your password" />
                </div>
                
                <div className="row">
                    <button className='login-button__green'> Login </button>
                </div>

                <div className="row">
                    <input type="checkbox" name="rememberMe"/>
                    <p style={{fontWeight:'normal', marginTop:'25px'}}> Remember Me </p>
                </div>

                <div className="row">
                    <button className="cancel-button__red">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;