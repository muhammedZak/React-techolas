import React from 'react';

class Counter extends React.Component {
  // Initialising state
  constructor() {
    super();
    this.state = { count: 0 };
    console.log('Contructor');
  }

  increment = () => this.setState({ count: this.state.count + 1 });
  decrement = () => this.setState({ count: this.state.count - 1 });
  reset = () => this.setState({ count: (this.state.count = 0) });

  //   componentDidMount() {
  //     this.timer = setInterval(() => {
  //       console.log('Component Mounted/created');
  //     }, 1000);
  //   }

  componentDidUpdate() {
    console.log('Componet Updated');
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log('Timer stops');
  }

  render() {
    return (
      <>
        <h1>Counter {this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={this.reset}>Reset</button>
      </>
    );
  }
}

export default Counter;
