import { Component } from "react";
import CommentList from "./CommentList/CommentList";
import "./Article.css";

export default class Article extends Component{
    render(){
        return(
            <div className="Article">
                <h1>{this.props.title}</h1>
                <p>{this.props.content}</p>
                <img src={this.props.img} alt="cute cat" className="image"/>
               <CommentList/>
            </div>
        );
    }
}