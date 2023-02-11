import BookShow from "./bookShow";

function BookList({ArrayOfBooks,deleteBook}){
    const RenderBooks = ArrayOfBooks.map((book)=>{
        return <BookShow key={book.id} book={book}  deleteBook = {deleteBook}/>
    }

    )
    
    return(
        <div className="book-list">
            {RenderBooks}
        </div>
    )
}
export default BookList;