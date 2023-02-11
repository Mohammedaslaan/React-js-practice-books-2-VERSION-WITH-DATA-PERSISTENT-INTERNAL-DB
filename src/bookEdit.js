import axios from "axios";
import { useEffect, useState } from "react";
import BookShow from "./bookShow";

function BookEdit({book,handleEditClick}){
    const [t,setT] =useState(book.title);
    const handleChange = (event) =>{
        setT(event.target.value);
        //book.title = t;
    }
    const editOnServer = async (id,newTitle)=>{
        const response = await axios.put(`http://localhost:3001/books/${id}`,{
            title : newTitle
        });
        console.log(response);
        return response;
        
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
        console.log('new title',t)
        const response = editOnServer(book.id,t);
        //book = response.data;
        book.title = t;
        handleEditClick();
    }
    const handleClick= ()=>{
        handleSubmit();

    }
    
    return(
        
            <form className="book-edit" onSubmit={handleSubmit}>
                <label>Edit Title</label>
                <input className="input" value={t} onChange={handleChange} />
                <button className="button is-primary" >Save</button>
            </form>
        
    )
};
export default BookEdit;