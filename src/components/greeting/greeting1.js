import React, {Component} from "react";


class Greeting1 extends Component{

    changeLoginStatus=(flag)=>{
        //触发父组件事件
        this.props.statuChangedCallback(flag)
    }

    render() {
        const isLoggedIn = this.props.isLoggedIn;
        return(
           <div>
               <p>通过花括号包裹代码，你可以在 JSX 中嵌入表达式。这也包括 JavaScript 中的逻辑与 (&&) 运算符。它可以很方便地进行元素的条件渲染：</p>
               {isLoggedIn?  <div  onClick={this.changeLoginStatus.bind(this,false)}>尊敬的用户，欢迎登陆</div> :
                   <div onClick={this.changeLoginStatus.bind(this,true)}>尊敬的用户，请先登陆</div>
               }
                <div>之所以能这样做，是因为在 JavaScript 中，true && expression 总是会返回 expression, 而 false && expression 总是会返回 false。
                    因此，如果条件是 true，&& 右侧的元素就会被渲染，如果是 false，React 会忽略并跳过它。
                </div>
               {isLoggedIn && <div>已登录</div>}

           </div>
        )
    }
}

export default Greeting1
