/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import Star from "../assets/star.svg";
import Tag from "../assets/tag.svg";
import { BookContext } from "../contexts";
import { getNextUrl } from "../utils/book-utility";
import BookDetailsModal from "./BookDetailsModal";

function BookCard({ book }) {
  const [showModal, setShowModal] = useState(false);
  const { state, dispatch } = useContext(BookContext);

  const handleAddToCart = (e, book) => {
    e.stopPropagation();
    e.preventDefault();
    setShowModal(false);
    const newItem = state.cartData.find((b) => b.id === book.id);
    if (!newItem) {
      dispatch({
        type: "AddToCart",
        payload: book,
      });
      toast.success(
        `The book ${book.title} has been added to cart successfully`,
        {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 3000,
        }
      );
    } else {
      toast.error(`The book ${book.title} is added to cart already`, {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 3000,
      });
    }
  };

  // Generate an array of stars based on the book's rating
  const stars = [];
  for (let i = 0; i < book.rating; i++) {
    stars.push(
      <img key={i} src={Star} width="14" height="14" alt="star image" />
    );
  }

  return (
    <>
      {showModal && (
        <BookDetailsModal
          book={book}
          onClose={(e) => {
            e.preventDefault();
            setShowModal(false);
          }}
          onCartAdd={handleAddToCart}
        />
      )}
      <figure
        onClick={() => setShowModal(true)}
        className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl"
      >
        <img
          className="w-full object-cover"
          src={getNextUrl(book.cover)}
          alt="book image"
        />
        <figcaption className="pt-4">
          <h3 className="text-xl mb-1">{book.title}</h3>
          <p className="text-[#575A6E] text-sm mb-2">{book.ceo}</p>
          <div className="flex items-center space-x-1 mb-5">
            {stars}
            {/* Below commented is the second option to use rating */}
            {/* <Rating rating={book.rating} /> */}
          </div>
          <a
            onClick={(e) => handleAddToCart(e, book)}
            className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
            href="#"
          >
            <img src={Tag} alt="Tag image" />
            <span>${book.price} | Add to Cart</span>
          </a>
        </figcaption>
      </figure>
    </>
  );
}

export default BookCard;
