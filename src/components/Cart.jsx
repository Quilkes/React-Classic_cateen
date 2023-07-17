import React, { useContext } from 'react'
import DataContext from '../context/DataContext'
import '../css/Cart.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


const Cart = () => {
  const { cartItem, handleMinuProduct, totalPrice, handleAddProduct, handleCartClearance } = useContext(DataContext);

  const isCartEmpty = cartItem.length === 0;

  return (
    <section className='Cart'>
      <div className="cart-container">
        <section className="heading-container">
          <h2>Your Food cart</h2>
          {!isCartEmpty && (
            <div className="botton-container">
              <button className='button-clear-cart' onClick={handleCartClearance}>
                <FontAwesomeIcon className='faTrash' icon={faTrash} />
              </button>
            </div>
          )}
        </section>

        {isCartEmpty && <div className='no-item'>No items are added. </div>}

        {cartItem.map((item) => (
          <div className='cart-items' key={item.id}>
            <div className="cart-food">
              <div className="button-control">
                <button className='increase' onClick={() => handleAddProduct(item)}>+</button>
                <p>{item.quantity}</p>
                <button className='decrease' onClick={() => handleMinuProduct(item)}>-</button>
              </div>

              <img src={item.image_path} alt={item.name} />

              <div className='information-on-order'>{item.name}{item.price}</div>
            </div>
          </div>
        ))}

        <div className="promo-code-container">
          <div className="promo-code-inner-container">
            <input type="text" name="promocode" id="promocode" placeholder='Promo Code' />
            <button className="promocode">Apply</button>
          </div>
        </div>

        <div className="cart-information">
          <div className="cart-total-container">
            <p className="cart-total-name">
              Cart total
            </p>
            <p className="cart-total-price">
              {totalPrice}
            </p>
          </div>

          <div className="tax-total-container">
            <p className="tax-total-name">
              Tax
            </p>
            <p className="cart-total-price">
              $23.45
            </p>
          </div>

          <div className="delivery-container">
            <p className="delivery-name">
              Delivery
            </p>
            <p className="delivery-total-price">
              $4.5
            </p>
          </div>

          <div className="promo-discount-container">
            <p className="promo-discount-name">
              Promo discount
            </p>
            <p className="promo-discount-total-price">
              -$0.00
            </p>
          </div>

          <hr />

          <div className="subtotal-container">
            <p className="subtotal-name">
              Subtotal
            </p>
            <p className="subtotal-total-price">
              <b>${totalPrice}</b>
            </p>
          </div>

          <section className='cart-item-total-price-name'>
            <div className='checkout-container'>
              {isCartEmpty ? (
                <button disabled id='disable'>Procced to Checkout</button>
              ) : (
                <Link to="/checkoutPage"><button>Procced to Checkout</button></Link>
              )}
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}

export default Cart