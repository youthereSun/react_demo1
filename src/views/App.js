import React, {Component} from 'react';
import RouterIndex from "../router";
import '../assets/styles/App.css'

class App extends Component {
    render() {
        return (
            <div className='app'>
                <div>common</div>
                <RouterIndex/>
            </div>
        )
    }
}

export default App;
