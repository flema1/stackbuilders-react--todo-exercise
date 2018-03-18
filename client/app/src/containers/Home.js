import React from 'react';
import ToDoForm from '../components/ToDoForm';

export default class Home extends React.Component {
    constructor(props){
        //props to parent class
        super(props);
        //initial state
        this.state = {
            toDos: [],
            input:''
        }
    }
    onInputUpdate(event){
       const { input } = this.state;
       console.log(event.target.value);
        this.setState({
            input: event.target.value
        })
    }

    render() {
        const { input } = this.state;
        return (
        <div className="home-container" >
            <h1>home</h1>
            <ToDoForm 
                onInputUpdate={this.onInputUpdate.bind(this)}
                input={ input }
            />
        </div>);
    }
}