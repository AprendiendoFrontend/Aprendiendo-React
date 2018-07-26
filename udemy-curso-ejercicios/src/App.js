import React, { Component } from "react";
import {Link, Route, Switch} from 'react-router-dom'

import {Ex01} from "./01-props/";

class App extends Component {
  render() {
    return (
      <div className="App">
        <aside>
          <h3>Ejercicios</h3>
          <Link to='/ex-01'>Props</Link>
        </aside>
        <main>
          <Switch>
            <Route path='/ex-01' component={Ex01} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
