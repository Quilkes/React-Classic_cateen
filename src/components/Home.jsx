import React from 'react'
import '../css/Home.css'
import pics1 from '../img/pic-1.png'
import pics2 from '../img/pics-2.png'
import pics3 from '../img/pics-3.png'
import pics4 from '../img/pics-4.png'

const Home = () => {
  return (
    <main className='Home'>
      <div className="menu">
        <section className="table">
          <img
            className="pic pic1"
            src={pics1}
            alt=""
            height="180"
            width="180"
          />
          <img
            className="pic pic2"
            src={pics2}
            alt=""
            height="200"
            width="200"
          />
          <img
            className="pic pic3"
            src={pics3}
            alt=""
            height="200"
            width="200"
          />
          <img
            className="pic pic4"
            src={pics4}
            alt=""
            height="200"
            width="200"
          />
        </section>
      </div>

      <section className="food-section">
        <legend>DISHES</legend>
        <h3 className="dishes-headings">Best dishes for you</h3>
        <section className="meal-section">
          <div className="meal-1 meal-for-display">
            <img src={pics2} alt="" height="200" width="200" />
            <br />
            <section className="portions">
              <h3>Chicken chickpea</h3>
              <br />
              <button>
                <p className="order-now">Order now</p>
                <p className="font"><i className="fas fa-shopping-basket"></i></p>
              </button>
            </section>
          </div>
          <div className="meal-2 meal-for-display">
            <img src={pics3} alt="" height="200" width="200" />
            <br />
            <section className="portions">
              <h3>Dupling with Steak</h3>
              <br />
              <button>
                <p className="order-now">Order now</p>
                <p className="font"><i className="fas fa-shopping-basket"></i></p>
              </button>
            </section>
          </div>
          <div className="meal-3 meal-for-display">
            <img src={pics1} alt="" height="200" width="200" />
            <br />
            <section className="portions">
              <h3>Cranberries and seeds</h3>
              <br />
              <button>
                <p className="order-now">Order now</p>
                <p className="font"><i className="fas fa-shopping-basket"></i></p>
              </button>
            </section>
          </div>
        </section>
      </section>

      <section className="opening-hours">
        <div className="opening-container">
          <h2 className="opening-h2">OPENING HOURS</h2>
          <h3>WE ARE CLOSED ON SUNDAY</h3>
          <div className="border-h2"></div>
          <h3 className="date">MONDAY - FRIDAY</h3>
          <h2 className="time">7:30 AM - 9:30 PM</h2>
          <div className="border-bottom"></div>
          <h3 className="date">SATURDAY</h3>
          <h2 className="time">8:30 AM - 9:00 PM</h2>
        </div>
      </section>
    </main>
  )
}

export default Home
