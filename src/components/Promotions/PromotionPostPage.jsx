import React from 'react'
import '../../css/Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import toast from 'react-hot-toast';

const notify = () => toast('here is your toast.');

const PromotionPostPage = () => {
    return (
        <Link className="meal-section" to={`/HomeViewProduct/${postMapped.id}`}>
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
        </Link>
    )
}

export default PromotionPostPage