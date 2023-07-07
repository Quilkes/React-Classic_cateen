import React from 'react'
import '../../css/Home.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'

const HomePostPage = ({ postMapped, handleAddProduct }) => {
  return (
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
          <p className='price'>{postMapped.price}</p>
          <br />
          <div className="button-container">
            <Link className="order-now" to={`/HomeViewProduct/${postMapped.id}`}>
              Order now
            </Link>
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
  )
}

export default HomePostPage
