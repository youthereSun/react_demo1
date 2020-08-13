import React, {Component} from "react";

/*子组件*/
class ImageShower extends Component{
    render() {
        let dom = this.props.imageArr.map((item, index) => {
            return (
                <div key={item.id}>
                    <div> {item.id}</div>
                    <img alt="" src={item.photo}/>
                </div>
            )
        })

        return (
            <div>
                {dom}
            </div>
        )
    }

}
export default ImageShower
