import React from 'react';
import SubApp from './SubApp.js';

class App extends React.Component {
    render() {
        return (
            <div>
                Hello {this.props.name}~<br />
                Click <a href={this.props.link}>here</a> to learn more.
                <br />
                <SubApp locale2="en_IN"/>
            </div>
        );
    }
}

export default App;