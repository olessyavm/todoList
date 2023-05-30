import { Component } from "react";
import icon from './check.png';

export class ToDoList extends Component{
    state ={
        userInput:" ",
        todoList:[]

    }
    onChangeEvent(e){
        this.setState({userInput: e})
    }
    addItem(input){
        if (input === " "){
            alert("Please enter an item")
        }
        else{
            
        let listArray= this.state.todoList;
        listArray.push(input);
        this.setState({todoList: listArray, userInput: " "})
        }
    }
    crossedWord(event){
        const li =event.target;
        li.classList.toggle('crossed');
    }
    removeItem(){
         let listArray = this.state.todoList;
         listArray = [] ;
         this.setState({todoList: listArray})
    }
    onFormSubmit(e){
        e.preventDefault();
    }
    render(){
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                <div className="container">
                    <input type="text"
                    placeholder="Add things to do.."
                    onChange={(e)=>{this.onChangeEvent(e.target.value)}} 
                    value = {this.state.userInput}/>
                </div>
                <div className="container">
                    <button className="btn add" onClick={()=>this.addItem(this.state.userInput)}>ADD</button>
                </div>
                <div className="container">
                    <ul>
                        {this.state.todoList.map((item, index)=>(
                        <li onClick={this.crossedWord} key = {index}>
                            <img src={icon} alt="checked" width='40px' />{item}</li>))}
                    </ul>
                </div>
                <div className="container">
                    <button className=" btn delete" onClick={()=>this.removeItem(this.state.userInput)}>DELETE</button>
                </div>
                </form>
            </div>
        )
    }
}