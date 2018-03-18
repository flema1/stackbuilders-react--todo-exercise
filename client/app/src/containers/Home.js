import React from 'react';
import ToDoForm from '../components/ToDoForm';
import FormErrors from '../components/FormErrors';

export default class Home extends React.Component {
    constructor(props){
        //props to parent class
        super(props);
        //initial state
        this.state = {
            toDos: [],
            todo:'',
            todoIsValid:false,
            formErrors:{ todo:''}
        }
    }

    onInputUpdate(event){
       event.preventDefault();
       const { todo } = this.state;
       //getting vale from event
       const name = event.target.name;
       const value = event.target.value;
       console.log(event.target.value);
        //updates state 
       this.setState({
           [name]: value
        });
    }

    validateField(fieldname,value) {
        let currFormErrors, updatedFormErrors;
        //save current errors
        currFormErrors = this.state.formErrors;

        //check if todo input is valid, not empty 
        if ((value.length===0 || value=='') && fieldname==='todo'){
        //set todo error
                currFormErrors['todo']='is empty!';
        //update errors in state
                updatedFormErrors = currFormErrors;
                this.setState({
                    formErrors:updatedFormErrors
                })
        }
    }

    onKeyPress(e) {
          const { todo } = this.state;
    //listen for user press Enter key
        if (e.key === 'Enter') {
            event.preventDefault();
    //validate todo input
            this.validateField('todo', todo)
            console.log('do validate');
            
            if (this.state.formErrors.todo===''){
                let currToDos=this.state.toDos;
                currToDos.push(todo);
                this.setState({
                    todos:currToDos,
                    todo:''
                })
            }
        }
        
    }

    render() {
        const { todo,formErrors } = this.state;
        return (
        <div className="home-container" >
            <h1>home</h1>
            <ToDoForm 
                onInputUpdate={this.onInputUpdate.bind(this)}
                onKeyPress={this.onKeyPress.bind(this)}
                value={ todo }
            />
            <FormErrors 
                errors={ formErrors } 
            />
        </div>);
    }
}