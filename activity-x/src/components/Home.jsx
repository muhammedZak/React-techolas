const getSavedUser = () => {
  try {
    return JSON.parse(localStorage.getItem('user'));
  } catch {
    return null;
  }
};

const Home = () => {
  const user = getSavedUser();
  const name = user?.name || 'User';

  return (
    <section className="page-card home-card">
      <h1>Welcome, {name}</h1>
      <p>You are on the home page.</p>
    </section>
  );
};

export default Home;
