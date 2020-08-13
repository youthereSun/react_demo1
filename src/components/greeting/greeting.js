import React, {Component} from "react";
/*子父组件传值*/
class Greeting extends Component {

    changeLoginStatus=(flag)=>{
        this.props.statuChangedCallback(flag)
    }
    render() {
        const isLoggedIn = this.props.isLoggedIn;
        if (isLoggedIn) {
            return (
                <div  onClick={this.changeLoginStatus.bind(this,false)}>尊敬的用户，欢迎登陆</div>
            )
        } else {
            return (
                <div onClick={this.changeLoginStatus.bind(this,true)}>尊敬的用户，请先登陆</div>
            )
        }
    }
}

export default Greeting
