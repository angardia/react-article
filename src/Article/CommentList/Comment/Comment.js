import { Component } from "react";

export default class Comment extends Component{
render(){
    return(
        <div className="Comment">
            <p>{this.props.author}</p>
            <p>{this.props.date}</p>
            <p>{this.props.content}</p>
        </div>
    );
}
}