import React, {Component} from 'react';
import './Comp.css';
 
class Info extends React.Component {
    state = {
        page: 'Information Hub',
        body: 'This is the information hub'
    }

    render () {
        console.log(this.props.hubcontent);

        return (
            <div className="Info-Hub">
                <h1> {this.state.page} </h1>
                <p> {this.state.body} </p>
                <div className="Hub">
                    <p>{this.props.activehub}</p>
                </div>
            </div>
        );
    }
}

export default Info;