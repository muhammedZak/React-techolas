import './App.css';
import { Employeeparent } from './components/activity/Employeeparent';
import Button from './components/Button';
import Message from './components/Message';
import MovieCard from './components/MovieCard';
import Product from './components/Product';
// import MultiColor from './components/MultiColor';
import ProfileCard from './components/ProfileCard';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
// import Show from './components/Show';

function App() {
  return (
    <>
      {/* <h1>MY REACT ACTIVITY</h1> */}
      {/* <hr /> */}
      {/* <Show /> */}
      {/* <MultiColor /> */}
      {/* <h3>Activity 1: Student Profile Card</h3>
      <ProfileCard name='Reseem' course='React JS' age='22' />

      <hr />
      <h3>Activity 2: Product Display</h3>
      <Product productName='Nike Air Max' price={120} inStock={true} />
      <Product productName='Nike Air Max' price={120} />

      <hr />
      <h3>Activity 3: Welcome Message</h3>
      <Message userName='Arjun' />
      <Message userName='Kiran' />

      <hr />
      <h3>Activity 4: Employee Details</h3>
      <Employeeparent />

      <hr />
      <h3>Activity 5: Employee Details</h3>
      <MovieCard movieName='Inception' rating={8.8} genre='Sci-Fi' />
      <MovieCard movieName='Inception' rating={7} genre='Sci-Fi' />

      <hr />
      <h3>Activity 6: Dynamic Button</h3>
      <Button text='login' /> */}
      <RegisterPage />
      <hr />
      <LoginPage />
    </>
  );
}

export default App;
