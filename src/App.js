import { useEffect, useState } from "react";
import CreateBook from "./createBook"; 
import BookList from "./bookList";
import axios from "axios";
function App(){
    const [books,setbooks] = useState([]);
    
    const fetchBooks = async () =>{
        const response = await axios.get('http://localhost:3001/books');
        setbooks(response.data);
    };

    useEffect(()=>{
        fetchBooks()
    },[]
    );
    //DO NOT DO BELOW CODE. APP WILL MAKE 
    //INFINITE NETWORK REQUEST
    //First call will invoke set book which will force rerendering.
    //after a rerender again same fetchBook will be called.
    //fetchBooks();
    const updateBooks = async (title)=>{
        const response = await axios.post('http://localhost:3001/books',{
            title
        });
        const updatedArray = [...books,response.data];
        console.log(updatedArray);
        setbooks(updatedArray);

    }
    const deleteBookByid = async(id)=>{
        const respone = await axios.delete(`http://localhost:3001/books/${id}`,)
        const updatedbook = books.filter((book)=>{
            return book.id !==id;
        }
        );
        setbooks(updatedbook);

    }
    
    return(
        <div className="app">
        
        <BookList ArrayOfBooks = {books} deleteBook = {deleteBookByid}/>
        <CreateBook propUpdateBooks = {updateBooks}/>
        
        
        </div>
        
    )
};

export default App;