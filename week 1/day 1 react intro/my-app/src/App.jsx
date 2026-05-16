// import React from 'react';

// function App() {
//   const isLoggedIn = true;
//   return <>{isLoggedIn ? <h1>Welcome Zak</h1> : <h1>Please login!!!</h1>}</>;
// }
// import React from 'react';

function App() {
  const isAdmin = 'aaa';
  return (
    <>
      {isAdmin && <h1>Admin panel | Welcome Zak</h1>}
      <p>this is my website</p>
    </>
  );
}

export default App;

// import React from 'react';

// const App = () => {
//   const isLoggedIn = true;

//   if (isLoggedIn) {
//     return <h1>Welcome zakariya</h1>;
//   } else {
//     return <h1>Please login to access your account🤣</h1>;
//   }
// };

// export default App;

// import Counter from './components/Counter';
// import CounterFn from './components/CounterFn';
// import Form from './components/Form';
// import FunTrigger from './components/FunTrigger';
// import Greets from './components/Greets';

// function App() {
//   return (
//     <>
//       <Form />
//       {/* <CounterFn /> */}
//       {/* <FunTrigger /> */}
//       {/* <Greets /> */}
//     </>
//   );
// }

// export default App;

/* <button onClick={() => this.setState({ show: true })}>
        Remeve component
      </button>
      <Counter /> */

// import './App.css';
// import Greets from './components/Greets';
// import Hello from './components/Hello';
// import Header from './components/Header';
// import './styles/style.css';

// const App = () => {
//   const name = 'John';
//   const topic = 'React';
//   const user = {
//     name: 'Jithin',
//     age: 25,
//     city: 'calicut',
//   };

//   return (
//     <>
//       {/* <Header />
//       <Greets />
//       <Hello /> */}
//       {/* <h1
//         style={{
//           // color: 'red',
//           // padding: '10px',
//           // border: '1px solid blue',
//         }}>
//         Hello, my name is {name}
//       </h1>
//       <h2>Hello React js</h2>
//       <p>{`${name} is learning ${topic}`}</p>
//       <p className='para'>
//         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet dolore ex
//         impedit eligendi, nemo eos aut quis sint vero in nam sapiente distinctio
//         inventore enim, unde tenetur sequi ab ipsa.
//       </p> */}
//     </>
//   );
// };

// export default App;
