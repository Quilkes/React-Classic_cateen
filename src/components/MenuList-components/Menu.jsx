import React from 'react'
import MenuPostFeeds from './MenuPostFeeds'
import SkeletonDisplayProduct from '../Skeleton-Loading/SkeletonDisplayProduct'
import Loading from '../Loading-state/Loading'

const Menu = ({ menuListPosts, isLoading, handleAddProduct }) => {
  return (
    <section>
      {isLoading
        ? <SkeletonDisplayProduct />
        : <MenuPostFeeds
          menuListPosts={menuListPosts}
          handleAddProduct={handleAddProduct}
        />
      }
    </section>
  )
}

export default Menu