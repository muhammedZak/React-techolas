import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const getSavedUser = () => {
    try {
      return JSON.parse(localStorage.getItem('user'));
    } catch {
      return null;
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentFormData) => ({
      ...currentFormData,
      [name]: value,
    }));

    setError('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const savedUser = getSavedUser();
    const emailMatches = savedUser?.email === formData.email.trim();
    const passwordMatches = savedUser?.password === formData.password;

    if (!emailMatches || !passwordMatches) {
      setError('Invalid email or password.');
      return;
    }

    onLogin();
    navigate('/', { replace: true });
  };

  return (
    <section className="page-card login-card">
      <h1>Login</h1>
      <p>Enter your account details below.</p>

      <form className="login-form" onSubmit={handleSubmit}>
        <label className="form-field">
          <span>Email</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            aria-invalid={Boolean(error)}
          />
        </label>

        <label className="form-field">
          <span>Password</span>
          <div className="password-input">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              aria-invalid={Boolean(error)}
            />
            <button
              className="password-toggle"
              type="button"
              onClick={() => setShowPassword((currentValue) => !currentValue)}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
        </label>

        {error && <p className="form-error">{error}</p>}

        <button className="primary-button" type="submit">
          Login
        </button>
      </form>
    </section>
  );
};

export default Login;
