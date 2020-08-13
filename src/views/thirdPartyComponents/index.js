import {Button} from "antd";
import React, {Component} from "react";

class ThirdPartyComponents extends Component{

    render() {
        return(
            <div>
                <div>ANTD COMPONENTS DEMO</div>
                <Button type="primary">Primary Button</Button>
                <Button>Default Button</Button>
                <Button type="dashed">Dashed Button</Button>
                <br />
                <Button type="text">Text Button</Button>
                <Button type="link">Link Button</Button>
            </div>
        )
    }
}

export default ThirdPartyComponents
