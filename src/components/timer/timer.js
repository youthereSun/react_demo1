import React, {Component} from "react";

class Timer extends Component{
    constructor(props) {
        super(props);
        this.state={
            now:new Date()
        }
    }
    //如需通过网络请求获取数据，此处是实例化请求的好地方。
    componentDidMount() {
        console.log(this)
     this.timer= setInterval(()=>{this.updateTime() },1000)

    }
    //nextState 表示组件即将更新的状态值。
    //这个函数的返回值决定是否需要更新组件，如果 true 表示需要更新，继续走后面的更新流程。否者，则不更新，直接进入等待状态。
    //默认return true
    //如果 shouldComponentUpdate() 返回 false，则不会调用 render()。
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        //console.log(nextContext,nextProps,nextState)
        return true
    }
    // 会在更新后会被立即调用。首次渲染不会执行此方法。
    componentDidUpdate(){
        console.log("组件更新完成");
    }
    // 会在组件卸载及销毁之前直接调用。在此方法中执行必要的清理操作，例如，清除 timer，取消网络请求或清除在 componentDidMount() 中创建的订阅等。
    componentWillUnmount() {
        clearInterval(this.timer)
    }

    updateTime=()=>{
        this.setState({
            now:new Date()
        })
    }
    alertClock=()=>{
        console.log(this)
        alert(this.state.now.toLocaleString())
    }

    render() {
        return(
            <div onClick={this.alertClock}>
                <div className='title'>clock</div>
                <div>{this.state.now.toLocaleString()}</div>

            </div>
        )
    }

}
export default Timer
