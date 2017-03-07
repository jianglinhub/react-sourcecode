var React = require('react');
var ReactDOM = require('react-dom');
import ComponentHeader from './components/header'; 
import ComponentFooter from './components/footer'; 
import BodyIndex from './components/bodyindex'; 

class Index extends React.Component{
    /**
     * 页面将要加载
     */
    componentWillMount() {
        console.log('Index - componentWillMount');
    }
    /**
     * 页面加载完
     */
    componentDidMount() {
        console.log('Index - componentDidMount');
    }
    
    render() {
        return (
            <div>
                <ComponentHeader />
                {/* 父页面往子页面传参数 */}
                <BodyIndex userid={123} username={"Parry"}/>
                <ComponentFooter />
            </div>
        )
    }
}

ReactDOM.render(
    <Index />,
    document.getElementById('example')
);
