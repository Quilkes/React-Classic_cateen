import React from 'react'
import '../css/Cart.css'

const Cart = () => {
  return (
    <section className='Cart'>
      <div className="cart-container">
        <h2>Your Food cart</h2>
        <div className='cart-items'>
          <div className="cart-food">
              <div className="button-control">
                <button className='increase'>+</button>
                <p>1</p>
                <button className='decrease'>-</button>
              </div>

              <img src="" alt="" />

              <div className='information-on-order'>

              </div>
          </div>
        </div>

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
              $3,44353
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
              $-0.00
            </p>
          </div>

          <hr />

          <div className="subtotal-container">
            <p className="subtotal-name">
              Subtotal
            </p>
            <p className="subtotal-total-price">
              <b>$45456.3445</b> 
            </p>
          </div>

          <button>Procced to Checkout</button>
        </div>
      </div>
    </section>
  )
}

export default Cart