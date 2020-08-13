import React, {Component} from "react";

class  BoilingVerdict extends Component{
    render() {
        return(
            <div>
                <div>目前水温：{this.props.celsius}</div>
                {
                    this.props.celsius>=100?<div>水沸腾了</div>:<div>水还没沸腾了</div>
                }

            </div>
        )
    }
}

export default BoilingVerdict
