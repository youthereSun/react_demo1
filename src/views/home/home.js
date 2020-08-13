import Banner from "../../components/banner/banner";
import React, {Component} from "react";
import {Link} from "react-router-dom";

class Home extends Component {
    routerChange=()=>{
        this.props.history.push({pathname:"/search",query:{name:"sun"}})

    }

    render() {
        return (
            /*外标签闭合*/
            <div>
            <div>PAGE_HOME</div>
                <Banner/>
                <Link to="/search" style={{color:'black'}}>
                    <div>点击跳转到search</div>
                </Link>
                <button onClick={this.routerChange}>js点击跳转到search</button>
            </div>
        )
    }
}

export default Home
