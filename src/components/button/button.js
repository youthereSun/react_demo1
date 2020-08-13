import React, {Component} from "react";
import './button.less'

class Button extends Component{
    constructor(props) {
        super(props);
        this.state={
            text:"默认"
        }
    }
/*componentDidMount方法会在组件已经被渲染到 DOM 中后运行*/
    componentDidMount() {
        //react组件接受值并渲染，this.setState
        this.setState({
            text:this.props.text
        })
        //==============错误=================
        //this.setState({
        //   counter: this.state.counter + this.props.increment,
        // });
        //因为 this.props 和 this.state 可能会异步更新，所以你不要依赖他们的值来更新下一个状态
        //要解决这个问题，可以让 setState() 接收一个函数而不是一个对象。这个函数用上一个 state 作为第一个参数，将此次更新被应用时的 props 做为第二个参数：

        this.setState((state, props) => ({
            text: state.text + props.text
        }));

        /*尽管 this.props 和 this.state 是 React 本身设置的，且都拥有特殊的含义，但是其实你可以向 class 中随意添加不参与数据流的额外字段。*/
        this.name="这是数据流state之外的字段，使用this.name在dom中渲染"
    }

    /*组件即将卸载时调用的方法*/
    componentWillUnmount() {
        console.log(this.name)
    }
    updateName=()=>{
        alert("不在数据流的，我不可以被动态更新")
      //  this.name=""
    }
    updateText=()=>{
        //  this.state.text="我可以被动态更新" 此方式报错  Do not mutate state directly. Use setState()
        //状态机里的数据只能通过setState来更新
        this.setState({
            text:"我可以被动态更新，我在state里，用setState更新我"
        })
    }

    render() {
        return(
            <div className='button_container'>

                <div onClick={this.updateName}>{this.name}</div>
                <button onClick={this.updateText} >{this.state.text}</button>
            </div>
        )
    }


}

export default Button
