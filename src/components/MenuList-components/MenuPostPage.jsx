import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/Home.css';

const MenuPostPage = ({ postMapped, handleAddProduct }) => {
  return (
    <section className="meal-section">
      <Link to=''>
        <div className="meal-for-display">
          <img
            src={postMapped.image}
            alt={postMapped.name}
            height="200"
            width="200"
          />
          <br />
          <section className="portions">
            <h3>{postMapped.name}</h3>
            <br />
            <div className='button-container'>
              <button className="order-now">Order now</button>
              <button
                className="font"
                onClick={() => handleAddProduct(postMapped)}>
                  {/* adding of marked emoji fontawesome */}
                <i className="fas fa-shopping-basket"></i>
              </button>
            </div>
          </section>
        </div>


      </Link>

    </section>
  )
}

export default MenuPostPage