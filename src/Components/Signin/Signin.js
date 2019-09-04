import React from 'react';
import { Link } from 'react-router-dom';

const Signin = ({ changePage }) => {
    return (
        <div>
            <div className="pa4 black-80">
                <h1>Sign In</h1>
                <div className="mt3">
                    <label className="db fw4 lh-copy f6" htmlFor="email-address">Email address</label>
                    <input className="pa2 input-reset ba bg-transparent w-100 measure" type="email" name="email-address" id="email-address" />
                </div>
                <div className="mt3">
                    <label className="db fw4 lh-copy f6" htmlFor="password">Password</label>
                    <input className="b pa2 input-reset ba bg-transparent w-100 measure" type="password" name="password" id="password" />
                </div>
                <div className="mt3">
                    <Link strict to="/">
                        <button className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" onClick={() => { changePage('home') }}>Sign In</button>
                    </Link>

                </div>
            </div>

        </div>
    )
}

export default Signin;