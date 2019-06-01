import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {

    componentWillMount() {
        fetch('mock.json')
            .then((response) => response.json())
            .then((response) => console.log("response: ", response))
            .catch((error) => console.log('error: ', error));
    }

    render() {
        return (
            <h1>Hello World</h1>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'))