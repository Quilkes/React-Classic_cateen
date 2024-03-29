import React, { useContext } from 'react'
import DataContext from '../../context/DataContext'
import { Link } from 'react-router-dom'
import HomePostFeed from './HomePostFeed'
import PromotionFeed from '../Promotions/PromotionFeed'
import SkeletonDisplayProduct from '../Skeleton-Loading/SkeletonDisplayProduct'
import '../../css/Home.css'
import pics1 from '../../img/pic-1.png'
import pics2 from '../../img/pics-2.png'
import pics3 from '../../img/pics-3.png'
import pics4 from '../../img/pics-4.png'
import desserts from '../../img/ice-cream.png'
import burger from '../../img/burger.png'
import pizza from '../../img/pizza.png'
import mainCourse from '../../img/spaghetti.png'

const Home = () => {

  const { homeListPosts, handleAddProduct, isLoading, promotionListPosts } = useContext(DataContext);
  
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

      <section className="cuisine-filter">
        <legend>Cuisine Filters</legend>
        <h3>Choose your Preferences</h3>
        <div className="cuisine-placecard"></div>

        <section className="cuisine-section">

          <Link className="main-courses one">
            <img src={mainCourse} alt='' />
            <p>Main Courses</p>
          </Link>


          <Link className="one">
            <img src={pizza} alt='' />
            <p>Pizzas</p>
          </Link>


          <Link className="one">
            <img src={burger} alt='' />
            <p>Burgers</p>
          </Link>


          <Link className="one">
            <img src={desserts} alt='' />
            <p>Desserts</p>
          </Link>

        </section>

      </section>

      <section className="food-section">
        <legend>Features Dishes</legend>
        <h3 className="dishes-headings">Exquisite Flavors Await You!</h3>
        {isLoading
          ? Array.from({ length: 4 }).map(() => (
            [...Array(1)].map((_, i) => <SkeletonDisplayProduct key={i} />)
          ))
          : <HomePostFeed
            homeListPosts={homeListPosts}
            handleAddProduct={handleAddProduct}
          />
        }
      </section>

      <section className="special-offers">
        <legend>Special&nbsp;<b className="offers">Offers</b></legend>
        <h3 className="dishes-headings">Indulge in Irresistible Canteen Delights!</h3>
        {isLoading
          ? Array.from({ length: 4 }).map(() => (
            [...Array(1)].map((_, i) => <SkeletonDisplayProduct key={i} />)
          ))
          : <PromotionFeed
            promotionListPosts={promotionListPosts}
            handleAddProduct={handleAddProduct}
          />
        }
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
