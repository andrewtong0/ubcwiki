import React from 'react';

const Register = ({ changePage }) => {
    return (
        <div>
            <div className="pa4 black-80">
            <h1>Register</h1>
                <div className="mt3">
                    <label className="db fw4 lh-copy f6" htmlFor="email-address">Email address</label>
                    <input className="pa2 input-reset ba bg-transparent w-100 measure" type="email" name="email-address" id="email-address" />
                </div>
                <div className="mt3">
                    <label className="db fw4 lh-copy f6" htmlFor="password">Password</label>
                    <input className="b pa2 input-reset ba bg-transparent w-100 measure" type="password" name="password" id="password" />
                </div>
                <div className="mt3">
                <button className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" onClick={() => { changePage('home') }}>Register</button>
                </div>
            </div>
            
        </div>
    )
}

export default Register;