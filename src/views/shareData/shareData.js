import BoilingVerdict from "../../components/boilingVerdict/boilingVerdict";
import Calculator from "../../components/calculator/calculator";
import ImageShower from "../../components/imageShower/imageShower";
import React, {Component} from "react";
import {getSwiperArr,getAllConfiguration} from "../../api/api";

class ShareData extends Component{
    /*状态提升，将共享一份数据子组件的state抽取出来放在父组件，父组件state变化通过props传到子组件，子组件修改值，通过回调把数据传给父组件，父组件再统一更新*/
    constructor(props) {
        super(props);
        this.state={
            temperature:0,
            imageArr:[]
        }
    }
    changeWaterStatus=(val)=>{
        console.log(val)
        this.setState({
            temperature:val
        })
    }

    getMockData=()=>{
        getSwiperArr((res)=>{
            this.setState({
                imageArr:res.data.result.swiperArr
            })

        })
    }

    getCrossOriginMockData=()=>{
        getAllConfiguration((res)=>{
           console.log(res)

        })
    }

    render() {
        return(
            <div>
                <div><button onClick={this.getMockData.bind(this)}>点击发送请求</button></div>
                <div><button onClick={this.getCrossOriginMockData.bind(this)}>点击测试跨域请求</button></div>
                <Calculator temperature={this.state.temperature} handleTemperatureChanged={this.changeWaterStatus.bind(this)}/>
                <BoilingVerdict celsius={this.state.temperature}/>
                <div>===================================================</div>
                <ImageShower imageArr={this.state.imageArr} />
            </div>
        )
    }

}

export default ShareData
