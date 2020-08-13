import React, {Component} from "react";

class Calculator  extends Component{

    emitValue=(e)=>{
       // this.setState({temperature: e.target.value});
        //this.setState是异步的，这样传值会导致传出去的值还没来得及更新，为了可以进行批量更新，提升性能
       // this.props.handleTemperatureChanged(this.state.temperature)

        //正确1
        this.props.handleTemperatureChanged( e.target.value)

    }

    render() {
        const temperature= this.props.temperature
        return(
            <div>
                <input  type="number" value={temperature} onChange={this.emitValue.bind(this)}/>
            </div>
        )
    }

}

export default Calculator
