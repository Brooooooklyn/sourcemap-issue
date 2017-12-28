import * as React from 'react';
import './App.css';
import service from './service';

const logo = require('./logo.svg');

class App extends React.Component {

  componentDidCatch(e: any) {
    Object.keys(e).forEach(k => {
      console.log(k, ':', e[k]);
    });
    console.log(e.stack);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <ComponentToThrow/>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

class ComponentToThrow extends React.PureComponent {
  renderStack1() {
    return this.renderStack2();
  }

  renderStack2() {
    return this.renderStack3();
  }

  renderStack3() {
    return this.renderStack4();
  }

  renderStack4() {
    return service.throwError();
  }
  render () {
    return (
      <div>
        {this.renderStack1()}
      </div>
    );
  }
}

export default App;
