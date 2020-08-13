import React, {Component} from "react";
import { connect } from 'react-redux'
import {add,reduce} from '../../store'

/*redux简单使用*/

class Redux_ extends Component {
    render() {
        return (
            <div style={{border:"1px solid red"}}>
                <div>{this.props.count}</div>
                <button onClick={this.props.count_add}>+1</button>
                <button  onClick={this.props.count_reduce}>-1</button>
            </div>
        )
    }
}


//把数据从reducer拿出来到该组件的props中
const mapStateToProps=(state)=>{
    return{
        count:state.count
    }
}
const mapDispatchToProps=(dispatch)=>{
    const number=1;
    return{
        count_add:()=>{

            dispatch(add(number))
        },
        count_reduce:()=>{
            dispatch(reduce(number))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Redux_);
