import React, {Component} from "react";
import Button from "../../components/button/button";
import Timer from "../../components/timer/timer";
import {Link} from "react-router-dom";
class Search extends Component{
    componentDidMount() {
      let params=  this.props.location.query;
      if(params) alert(JSON.stringify(params))

    }

    render() {
        return (
            <div>
                <div>PAGE_SEARCH</div>
                <Button text="点击我试一下"/>
                <Link to="/" style={{color:'black'}}>
                    <div>点击跳转到home</div>
                </Link>
                <Timer/>
            </div>
        )
    }

}
export default Search

