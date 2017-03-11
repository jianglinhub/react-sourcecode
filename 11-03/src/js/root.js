import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import PCIndex from './components/pc_index';
import MobileIndex from './components/mobile_index';
import {Button} from 'antd';
import 'antd/dist/antd.css';
import MediaQuery from 'react-responsive';
import PCNewsDetails from './components/pc_news_details';
import MobileNewsDetails from './components/mobile_news_details';
import PCUserCenter from './components/pc_usercenter';
import MobileUserCenter from './components/mobile_usercenter';

export default class Root extends React.Component {
    render() {
        return (
            <div>
                <MediaQuery query='(min-device-width: 1224px)'>
                    <Router history={hashHistory}>
                        <Route path="/" component={PCIndex} />
                        <Route path="/details/:uniquekey" component={PCNewsDetails} />
                        <Route path="/usercenter" component={PCUserCenter} />
                    </Router>
                </MediaQuery>
                <MediaQuery query='(max-device-width: 1224px)'>
                     <Router history={hashHistory}>
                        <Route path="/" component={MobileIndex} />
                        <Route path="/details/:uniquekey" component={MobileNewsDetails} />
                        <Route path="/mobileusercenter" component={MobileUserCenter} />
                    </Router>
                </MediaQuery>
            </div> 
        );
    }
};

ReactDOM.render(<Root/>, document.getElementById('mainContainer'));

