import React from "react";
import './blog.css';
import {Article} from '../../components';
import {blog01,blog02,blog03,blog04,blog05} from './imports';


function Blog(){
    return(
        <div className="gpt3__blogs section__padding" id="blog">
            <div className="gpt3__blogs-heading">
                <h1 className="gradiant__text">A lot is happening, <br /> We are blogging about it.</h1>
            </div>
            <div className="gpt3__blog-container">
                <div className="gpt3__blog-container__groupA">
                    <Article imageurl={blog01} date="Jan 31 2023" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
                </div>
                <div className="gpt3__blog-container__groupB">
                    <Article imageurl={blog02} date="Jan 31 2023" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
                    <Article imageurl={blog03} date="Jan 31 2023" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
                    <Article imageurl={blog04} date="Jan 31 2023" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
                    <Article imageurl={blog05} date="Jan 31 2023" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
                </div>
            </div>
        </div>
    );
}

export default Blog;