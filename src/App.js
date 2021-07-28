import React from "react";
import ReactTV from "react-tv";
import { withNavigation, withFocusable } from "react-tv-navigation";

import Main from "./views/template/Main.jsx"
// import Logo from "./views//template/Logo.jsx"
// import Nav  from "./views/template/Nav.jsx"

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Main/>      
      </div>
    );
  }
}

const AppWithNavigation = withNavigation(App)

ReactTV.render(<AppWithNavigation/>, document.querySelector('#root'));
