import { useState } from 'react';
import { Link, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

const getSavedTheme = () => {
  const savedTheme = localStorage.getItem('theme');

  return savedTheme === 'dark' ? 'dark' : 'light';
};

const getSavedLoginStatus = () => localStorage.getItem('loginStatus') === 'true';

const App = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(getSavedLoginStatus);
  const [theme, setTheme] = useState(getSavedTheme);

  const handleLogin = () => {
    localStorage.setItem('loginStatus', 'true');
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    const confirmedLogout = window.confirm('Are you sure you want to logout?');

    if (!confirmedLogout) {
      return;
    }

    localStorage.removeItem('loginStatus');
    setIsAuthenticated(false);
    navigate('/login', { replace: true });
  };

  const toggleTheme = () => {
    setTheme((currentTheme) => {
      const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', nextTheme);
      return nextTheme;
    });
  };

  return (
    <div className={`app-shell theme-${theme}`}>
      <nav className="nav">
        {isAuthenticated ? (
          <>
            <Link to="/">Home</Link>
            <button className="nav-action" type="button" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
        <button className="nav-action" type="button" onClick={toggleTheme}>
          {theme === 'light' ? 'Dark' : 'Light'} Theme
        </button>
      </nav>

      <main className="page-wrap">
        <Routes>
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <Home />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/login"
            element={isAuthenticated ? <Navigate to="/" replace /> : <Login onLogin={handleLogin} />}
          />
          <Route path="/register" element={isAuthenticated ? <Navigate to="/" replace /> : <Register />} />
          <Route path="*" element={<Navigate to={isAuthenticated ? '/' : '/login'} replace />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
