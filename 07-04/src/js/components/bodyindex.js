import React from 'react';

export default class BodyIndex extends React.Component{
    render() {
         var userName = '';
         var bollInput = false;

         /**
          * 解析html
          * 1、使用unicode码
          * 2、使用 dangerouslySetInnerHTML进行解析，覆盖react的全局的__html，注意有可能存在XSS攻击
          */
         var html = "IMOOC&nbsp;LESSON";

        return (
            <div>
                <h2>页面的主题内容</h2>
                <p>{userName == '' ? '用户还没有登录' : '用户名: ' + userName}</p>
                <p><input type='button' value='默认按钮' disabled={bollInput}/></p>
                {/*注释*/}
                <p>{html}</p>
                <p dangerouslySetInnerHTML={{__html : html}}></p>
            </div>
        )
    }
}
