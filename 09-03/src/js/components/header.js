import React from 'react';

export default class ComponentHeader extends React.Component{

    constructor() {
        super();
        this.state = {
            minHeader: true // 控制默认加载的样式
        };
    };

    /**
     * 切换默认样式
     */
    switchHeader() {
        this.setState({
            minHeader: !this.state.minHeader
        });
    };

    render() {
        const styleComponentHeader = {
            header: {
                backgroundColor: "#333",
                color: "#fff",
                paddingTop: (this.state.minHeader) ? "3px" : "15px",
                paddingBottom: (this.state.minHeader) ? "3px" : "15px"
            }
        };

        return (
            <header onClick={this.switchHeader.bind(this)} style={styleComponentHeader.header} className="smallFontSize">
                <h1>这里是头部21</h1>
            </header>
        )
    };
}

