import React from 'react'
import '../../css/Home.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast('here is your toast.');

const HomePostPage = ({ postMapped, handleAddProduct }) => {
  return (
    <Link to={`/viewproduct/${postMapped.id}`}>
      <section className="meal-section">
        <div className="meal-for-display">
          <img
            src={postMapped.image_path}
            alt={postMapped.name}
            height="200"
            width="200"
          />
          <br />
          <section className="portions">
            <h3>{postMapped.name}</h3>
            <br />
            <div className="button-container">
              <button className="order-now" onClick={notify}>
                Order now
              </button>
              <button
                className="font"
                onClick={() => handleAddProduct(postMapped)}
              >
                <FontAwesomeIcon icon={faShoppingBasket} />
              </button>
            </div>
          </section>
        </div>
      </section>
    </Link>
  );
}

export default HomePostPage
