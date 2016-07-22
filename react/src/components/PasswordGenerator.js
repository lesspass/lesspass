import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'hint.css/hint.css';
import './PasswordGenerator.css';
// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }
//
// export default App;

class App extends Component {
    render() {
        return (
            <div className="PasswordGenerator">
                <form id="generatedPasswordForm">
                    <fieldset className="form-group">
                        <label className="sr-only" htmlFor="login">Login</label>
                        <input type="text" autoCapitalize="none" autoCorrect="off" autoComplete="off" autofocus placeholder="Login" className="form-control" name="login" id="login"/>
                        <input type="hidden" id="password"/>
                    </fieldset>
                    <fieldset className="form-group">
                        <label className="sr-only" htmlFor="masterPassword">Password</label>
                        <div className="input-group">
                            <input type="password" autoCapitalize="none" autoCorrect="off" autoComplete="off" placeholder="Master password" className="form-control" name="masterPassword" id="masterPassword"/>
                            <span className="input-group-btn">
                                <button tabIndex={-1} type="button" className="btn btn-secondary" id="displayMasterPasswordButton">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792">
                                        <path d="M1664 960q-152-236-381-353 61 104 61 225 0 185-131.5 316.5t-316.5 131.5-316.5-131.5-131.5-316.5q0-121 61-225-229 117-381 353 133 205 333.5 326.5t434.5 121.5 434.5-121.5 333.5-326.5zm-720-384q0-20-14-34t-34-14q-125 0-214.5 89.5t-89.5 214.5q0 20 14 34t34 14 34-14 14-34q0-86 61-147t147-61q20 0 34-14t14-34zm848 384q0 34-20 69-140 230-376.5 368.5t-499.5 138.5-499.5-139-376.5-368q-20-35-20-69t20-69q140-229 376.5-368t499.5-139 499.5 139 376.5 368q20 35 20 69z"/>
                                    </svg>
                                    <small aria-label="fingerprint" id="fingerprint" className="hint--top"/>
                                </button>
                            </span>
                        </div>
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default App;
