import { Link } from "react-router-dom";


const Book = ({ book }) => {

    const { bookId,image, bookName, author, tags, category, rating } = book;

    return (
        <Link to={`/books/${bookId}`}>
            <div className="card bg-base-100 w-96 shadow-xl p-6 border">
                <figure className="bg-gray-100 py-8 rounded-2xl">
                    <img
                        src={image}
                        className='h-[166px]'
                        alt={bookName} />
                </figure>
                <div className="card-body">
                    <div className="flex justify-center gap-4">
                        {
                            tags.map(tag => <button className="btn btn-xs">{tag}</button>)
                        }
                    </div>
                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>By: {author}</p>
                    <div className="border-t-2 border-dashed"></div>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline">{category}</div>
                        <div className="rating items-end gap-2">
                            <p className="font-bold">{rating}</p>
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />

                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;