import { useState, useRef } from 'react';
import { auth } from '../../firebase/firebaseSDK';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Signup.css'

const Signup = () => {
  const userRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [error, setError] = useState(null); // State for storing the error message

  const signUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      setRegisterEmail('');
      setRegisterPassword('');
      navigate(from, { replace: true });
    } catch (error) {
      setError('Error creating an account. Please try again.'); // Set the error message
    }
  }

  return (
    <section className='Signup'>
      <form onSubmit={signUp} className='signup-form'>
        <h2>Sign Up</h2>
        {error && <p className="error-message">{error}</p>} {/* Display error message if it exists */}
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
            value={registerPassword}
            required
            onChange={e => setRegisterPassword(e.target.value)}
          />
        </section>

        <button type="submit" disabled >Create account</button>

        <section className='questions'>
          <p>
            Already registered?
            <Link className='signup-terms' to='/login'>  Login in</Link>
          </p>
          <p>
            By registering, I accept your <Link className='signup-terms' to="/terms_condition">Terms and conditions.</Link>
          </p>
        </section>
      </form>
    </section>
  )
}

export default Signup;
