import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, history} from 'react-router';
import Index from './index';
import ComponentDetails from './components/details';

export default class Root extends React.Component {
    render() {
        return (
            // 替换index入口
            <Router history={history}>
                <Route component={Index} path="/">
                    <Route component={ComponentDetails} path="/details" />
                </Route>
            </Router>    
        );
    }
};

ReactDOM.render(<Root/>, document.getElementById('example'));

