import React from 'react';

export default class BodyIndex extends React.Component{
    constructor() {
        super(); // 调用基类的所有的初始化方法
        this.state = {username: "name"};
    }

    render() {
        setTimeout(()=> {
            // 更改state
            this.setState({username: "IMOOC"});
        }, 4000);
        return (
            <div>
                <p>主体部分</p>
                <p>{this.state.username}</p>
            </div>
        )
    }
}
