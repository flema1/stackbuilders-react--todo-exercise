import React from 'react';

export default class Home extends React.Component {
    constructor(props){
        //props to parent class
        super(props);
        //initial state
        this.state = {
        }
    }

    render() {
        const { input } = this.state;
        return (
        <div className="home-container" >
            <h1>home</h1>
        </div>);
    }
}