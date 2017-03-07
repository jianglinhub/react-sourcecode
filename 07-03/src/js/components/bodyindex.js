import React from 'react';

export default class BodyIndex extends React.Component{
    render() {
        
        var userName = 'parry';

        return (
            <div>
                <h2>页面的主题内容</h2>
                <p>{userName == '' ? '用户还没有登录' : '用户名: ' + userName}</p>
            </div>
        )
    }
}
