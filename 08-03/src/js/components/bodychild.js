import React from 'react';

export default class BodyChild extends React.Component {

    render() {
        return (
            <div>
                {/* 在子页面往父页面传递参数时，只能通过事件的形式调用父页面传递过来的参数，该参数是一个事件（函数），在父页面定义该函数
                    ，然后在父页面调用该组建的地方传递该参数（函数）*/}
                <p>子页面输入：<input type="text" onChange={this.props.handleChildValueChange}/></p>
            </div>
        )
    };
}
