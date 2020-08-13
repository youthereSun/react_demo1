import React, {Component} from "react";
import './banner.less'

class Banner extends Component{
    constructor(props) {
        super(props);
        /*组件状态机*/
        this.state = {
            date: new Date(),
            list:[{id:1,name:"sun"},{id:2,name:"rain"},{id:3,name:"flower"}]
        };
    }
    componentDidMount() {
       this.printStart();
    }
    printStart=()=>{
        console.warn("start!!")
    }
    getCurrent=(item)=>{
        alert(JSON.stringify(item))

    }
    consoleEnd=()=>{
        alert("END!!")
    }
    render() {
        /*map会返回一个新的数组*/
        let dom =this.state.list.map((item,index) =>{
            return(
                /*方法传参*/
                /*key 帮助 React 识别哪些元素改变了，比如被添加或删除。因此你应当给数组中的每一个元素赋予一个确定的标识。*/
                /*当元素没有确定 id 的时候，万不得已你可以使用元素索引 index 作为 key：*/
                <div onClick={this.getCurrent.bind(this,item)} className='banner_item' key={item.id} >
                   <span>{index}:</span> <span>{item.name}</span>
                </div>
            )
        })

        let dom1= <div onClick={this.consoleEnd.bind(this)} >dom结束</div>

        return(
        <div className='banner_container'>
            <div>开始</div>
            {dom}
            {dom1}
            <div>结束</div>
        </div>
        )
    }
}

export default Banner
