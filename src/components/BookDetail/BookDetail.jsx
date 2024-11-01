import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList } from "../../uitilty/addToDb";
import { addToStoredWishList } from "../../uitilty/addToWl";


const BookDetail = () => {

    const {bookId} = useParams();
    const data = useLoaderData();

    const id = parseInt(bookId);

    const book = data.find(book => book.bookId === id);
    // console.log(book)

    const {bookId: currentBookId, image} = book;

    const handleMarkasRead = (id) => {
        /**
         * 1. understand what to store or save: => bookId
         * 2. Where to store: database
         * 3. array, list, collection:
         * 4. check: if the book is already in the readList.
         * 5. if not, then add the book to the list 
         * 6. if yes, do not add the book
         */
         
       addToStoredReadList(id)
    }

    const handleWishList = (id) => {


        addToStoredWishList(id)
    } 


    return (
        <div className="py-12">
            <h2>Book details: {bookId}</h2>
            <img className="w-36" src={image} alt="" />
            <br />
           <button onClick={() => handleMarkasRead(bookId)} className="btn btn-outline btn-accent mr-4">Mark as Read</button>
           <button onClick={() => handleWishList(bookId)} className="btn btn-accent">Add to Wish List</button>
        </div>
    );
};

export default BookDetail;