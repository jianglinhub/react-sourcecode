import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import reduceres from './reduceres';

export default class Root extends React.Component {

    inc() {
        return {type: 'inc'};
    }

    dec() {
        return {type: 'dec'};
    }

    componentDidMount() {
        
        // /初始化，传递的参数时reducers
        var store = createStore(reduceres);

        console.log(store.getState());

        store.dispatch(this.inc());
        console.log(store.getState());

        store.dispatch(this.dec());
        console.log(store.getState());

    }

    render() {
        return (
            <div>
                REDUX
            </div>
        )
    }
}

ReactDOM.render(<Root />, document.getElementById('container'));