import React from 'react';
import BodyChild from './bodychild';

export default class BodyIndex extends React.Component{
    constructor() {
        super(); // 调用基类的所有的初始化方法
        this.state = {
            username: "name",
            age: 20
        };
    };

    changeUserInfo(age) {
        this.setState({
            age: age
        })
    };

    /* 在子页面往父页面传递参数时，只能通过事件的形式调用父页面props传递过来的参数，该参数是一个事件（函数），在父页面定义该函数
    ，然后在父页面调用该组建的地方传递该参数（函数）*/
    handleChildValueChange(event) {
        this.setState({
            age: event.target.value
        })
    };

    render() {
        // setTimeout(()=> {
        //     // 更改state
        //     this.setState({username: "IMOOC"});
        // }, 4000);
        return (
            <div>
                <p>主体部分</p>
                <p>{this.state.age}  {this.props.userid} {this.props.username}</p>
                <input type="button" value="提交" onClick={this.changeUserInfo.bind(this, 99)}/>

                <BodyChild handleChildValueChange={this.handleChildValueChange.bind(this)} />
            </div>
        )
    };
}
