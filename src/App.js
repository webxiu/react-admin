import React, { Component } from 'react'
import './App.css';
export default class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.children}
      </div>
    )
  }
}

// import React from 'react'
// import './App.css';
// function App() {
//   return (
//     <div className="App">
//       {this.props.children}
//     </div>
//   );
// }
// export default App;