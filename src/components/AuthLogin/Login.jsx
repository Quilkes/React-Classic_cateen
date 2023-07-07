import { useState, useRef } from 'react';
import { auth } from '../../firebase/firebaseSDK';
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const userRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // State for storing the error message

  const navigate = useNavigate();
  const location = useLocation();

  // browser history or homepage
  const from = location.state?.from?.pathname || "/";

  const signIn = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setEmail('');
      setPassword('');
      navigate(from); // Redirect the user to the specified location after successful sign-in
    } catch (error) {
      setError('Invalid email or password'); // Set the error message
    }
  }

  return (
    <section>
      <form onSubmit={signIn} className='login-form'>
        <h2>Sign In</h2>
        {error && <p className="error-message">{error}</p>} {/* Display error message if it exists */}
        <section className="username-container">
          <label htmlFor="email">User Email</label>
          <input
            type="text"
            name="email"
            id="email"
            ref={userRef}
            placeholder='Your Email'
            value={email}
            required
            onChange={e => setEmail(e.target.value)}
          />
        </section>

        <section className="password-container">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder='Password'
            value={password}
            required
            onChange={e => setPassword(e.target.value)}
          />
        </section>

        <button type="submit">Sign In</button>
      </form>
      <section>
        <p>
          Need an Account?
          <Link className='signup-terms' to='/sign-up'>Sign Up</Link>
        </p>
        <p className='signin-first'>
          By registering, I accept your <Link className='signup-terms' to="/terms_condition">Terms and conditions.</Link>
        </p>
      </section>
    </section>
  )
}

export default Login;
