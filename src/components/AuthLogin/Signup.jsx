import { useState, useRef, useEffect } from 'react';
import { auth } from '../../firebase/firebaseSDK';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Login.css';

const Signup = () => {

    const userRef = useRef();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [registerEmail, setRegisterEmail] = useState('');
    const [RegisterPassword, setRegisterPassword] = useState('');

    const signUp = async (e) => {
        e.preventDefault();
        try {
            createUserWithEmailAndPassword(auth, email, password)
            await userCredential;
            navigate(from, { replace: true });
        } catch (error) {

        }
    }

    return (
        <section>
            <form onSubmit={signUp} className='login-form'>
                <h2>Sign Up</h2>
                <section className="username-container">
                    <label htmlFor="email">User Email</label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        ref={userRef}
                        placeholder='Your Email'
                        value={registerEmail}
                        required
                        onChange={e => setRegisterEmail(e.target.value)}
                    />
                </section>

                <section className="password-container">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder='Password'
                        value={RegisterPassword}
                        required
                        onChange={e => setRegisterPassword(e.target.value)}
                    />
                </section>

                <button type="submit">Create account</button>
            </form>

            <section>
                <p>
                    Already registered?
                    <Link className='signup-terms' >Login in</Link>
                </p>
                <p>
                    By registering, i accept your <Link className='signup-terms' to="/terms_condition">Terms and conditions.</Link>
                </p>
            </section>
        </section>
    )
}

export default Signup