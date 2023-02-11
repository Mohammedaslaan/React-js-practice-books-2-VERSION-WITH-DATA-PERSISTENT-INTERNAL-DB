import { useState } from "react";

function CreateBook({propUpdateBooks}){
    const [title,setTitle] = useState('');
    const handleChange = (event)=>{
        setTitle(event.target.value);
        console.log('inside createbook.js handlechange title putted ',title)
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
        propUpdateBooks(title);
    }
    return<div>
        <form onSubmit={handleSubmit}>
        <label>ADD BOOK</label>
        <input value={title}  onChange={handleChange}/>
        <button>Submit </button>
        </form>
        
    </div>
};
export default CreateBook;