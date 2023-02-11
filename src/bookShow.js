import { useState } from "react";
import BookEdit from "./bookEdit";
function BookShow({book, deleteBook}){
    const handleDelete= ()=>{
        deleteBook(book.id);
    }
    const [showEdit,setShowEdit] = useState(false);
    const handleEditClick = ()=>{
        setShowEdit(!showEdit);
    }
    let content = <h3> {book.title}</h3>
    if (showEdit) {
        content = <BookEdit book = {book} handleEditClick= {handleEditClick}/> 
    }
    return(
        <div className="book-show">
            <img src={`https://picsum.photos/seed/${book.id}/200/300`} alt="this is an"></img>
            <div>{content}</div>
            <div className="actions">
                <button className="edit" onClick={handleEditClick}>edit</button>
                <button className="delete" onClick={handleDelete}>
                    Delete
                </button>
            </div>
            
        </div>
    )
};

export default BookShow;