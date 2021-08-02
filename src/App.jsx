import React from "react";
import ReactTV from "react-tv";
import { withNavigation, withFocusable } from "react-tv-navigation";

class App extends React.Component {
  render() {
    return (
     <div className="app">
       <div className="sidebar">
         Sidebar
       </div>
       <div className="container">
         <div className="header">
           Header
         </div>
         <div className="slider">
           Slide
         </div>
       </div>
     </div>
    );
  }
}

const AppWithNavigation = withNavigation(App)

ReactTV.render(<AppWithNavigation />, document.querySelector('#root'));
