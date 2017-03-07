import React from 'react';
import ReactDOM from 'react-dom';
import BodyChild from './bodychild';
import ReactMixin from 'react-mixin';
import MixinLog from './mixins';

/**
 * 定义默认属性
 * 如果不传递则使用默认参数
 */
const defaultProps = {
    username: '这是一个默认的用户名'
};

export default class BodyIndex extends React.Component{
    constructor() {
        super(); // 调用基类的所有的初始化方法
        this.state = {
            username: "name",
            age: 20
        };
    };

    changeUserInfo(userid) {
        this.setState({userid: userid});
        
        /**
         * 获取原生DOM方式 1
         */
        // var mySubmitBottom = document.getElementById("submitButton");
        // console.log(mySubmitBottom);
        // ReactDOM.findDOMNode(mySubmitBottom).style.color = 'red';

        /**
         * 获取原生DOM方式 2  推荐，是访问组建节点DOM唯一可靠的方法
         */
        //  console.log("refs形式:",this.refs.submitButton);
        //  this.refs.submitButton.style.color = 'green';

        MixinLog.log();
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
                <p>接收到父页面的属性：userage：{this.state.age} userid： {this.props.userid} username： {this.props.username}</p>
                <input id="submitButton" ref="submitButton" type="button" value="提交" onClick={this.changeUserInfo.bind(this, 99)}/>
                { /* 使用ES6的结构，进行批量传参 */ }
                <BodyChild {...this.props} handleChildValueChange={this.handleChildValueChange.bind(this)} />
            </div>
        )
    };
}

/**
 * 约束参数类型
 */
BodyIndex.propTypes = {
    userid: React.PropTypes.number.isRequired
};

/**
 * 启用React默认参数
 */
BodyIndex.defaultProps = defaultProps;

/**
 * mixins全局公共方法（事件）
 */
ReactMixin(BodyIndex.prototype, MixinLog);