import React, {Component} from "react";
import Greeting from "../../components/greeting/greeting";
import Greeting1 from "../../components/greeting/greeting1";



const titleStyle = {
    color: 'yellow',
    WebkitTransition: 'all', // note the capital 'W' here
    msTransition: 'all' // 'ms' is the only lowercase vendor prefix
};

class Login extends Component{
    constructor(props) {
        super(props);
        this.state={
            isLoggedIn:false
        }
    }
    changeIsLoggedIn=(val)=>{
        this.setState({
            isLoggedIn:val
        })
    }

    render() {
        return(
            <div>
                <p style={titleStyle} >子父组件传值</p>
                <p  style={{fontWeight:'bold'}}>样式写法</p>
            <Greeting statuChangedCallback={this.changeIsLoggedIn.bind(this)} isLoggedIn={this.state.isLoggedIn}/>
            <div>==================分割线======================</div>
                <Greeting1 statuChangedCallback={this.changeIsLoggedIn.bind(this)} isLoggedIn={this.state.isLoggedIn}/>
            </div>
        )
    }
}

export default Login
