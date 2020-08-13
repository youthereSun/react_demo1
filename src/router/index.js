import {BrowserRouter as Router, Route,Link} from 'react-router-dom';
import Home from "../views/home/home";
import Search from "../views/search/search";
import Login from "../views/login/login";
import ShareData from "../views/shareData/shareData";
import ThirdPartyComponents from "../views/thirdPartyComponents";
import Redux_ from "../views/redux/redux";
import React, {Component} from "react";

class RouterIndex extends Component{
    render() {
        return(
            <Router>
                <ul>
                    <li>
                        <Link to='/'>to home</Link>
                    </li>
                    <li>
                        <Link to='/search'>to search</Link>
                    </li>
                    <li>
                        <Link to='/login'>to login</Link>
                    </li>
                    <li>
                        <Link to='/shareData'>to shareData</Link>
                    </li>
                    <li>
                        <Link to='/antd'>to third</Link>
                    </li>
                    <li>
                        <Link to='/redux_'>to redux_</Link>
                    </li>
                </ul>

                <div>
                    <Route exact  path='/' component={Home}/>
                    <Route path='/search' component={Search}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/shareData' component={ShareData}/>
                    <Route path='/antd' component={ThirdPartyComponents}/>
                    <Route path='/redux_' component={Redux_}/>
                </div>
            </Router>
        )
    }

}


export default RouterIndex
