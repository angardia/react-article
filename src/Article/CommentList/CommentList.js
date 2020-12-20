import { Component } from "react";
import Comment from "./Comment/Comment";

export default class CommentList extends Component{
    constructor(props){
        super(props);
        this.state = {
            date: Date().toLocaleString()
          };
    }
    render(){
        return(
            <div className="CommentList">
               <Comment author="Anna" date={this.state.date} content="bla bla"/>  
               <Comment author="Max" date={this.state.date} content="bla bla"/>  
               <Comment author="Sanya" date={this.state.date} content="bla bla"/>  
            </div>
        );
    }
}