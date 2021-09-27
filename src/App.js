import React from "react";
import Router from "./components/Router";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
    render() {
        return (
            <div>
                <Router/>
            </div>
        );
    }
}

export default App;