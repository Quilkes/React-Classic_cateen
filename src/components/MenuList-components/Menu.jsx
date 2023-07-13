import React, { useContext }from 'react'
import DataContext from '../../context/DataContext'
import MenuPostFeeds from './MenuPostFeeds'
import SkeletonDisplayProduct from '../Skeleton-Loading/SkeletonDisplayProduct'
import '../../css/Menu.css'

const Menu = () => {
  const { menuListPosts, isLoading, handleAddProduct } = useContext(DataContext)

  return (
    <section className={`our-menu ${isLoading ? 'menu-p-increase' : ''}`}>
    <h2 className={`menu-heading ${isLoading ? 'increase-padding' : 'reduce-padding'}`} >Simpe and Tasty Reciept</h2>
      {/* <section className="meal-section"> */}
        {isLoading
          ? Array.from({ length: 10 }).map(() => (
            [...Array(1)].map((_, i) => <SkeletonDisplayProduct key={i} />)
          ))
          : <MenuPostFeeds
            menuListPosts={menuListPosts}
            handleAddProduct={handleAddProduct}
          />
        }
      {/* </section> */}
    </section>
  )
}

export default Menu