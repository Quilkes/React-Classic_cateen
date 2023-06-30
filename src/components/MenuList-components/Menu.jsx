import React from 'react'
import MenuPostFeeds from './MenuPostFeeds'
import SkeletonDisplayProduct from '../Skeleton-Loading/SkeletonDisplayProduct'

const Menu = ({ menuListPosts, isLoading, handleAddProduct }) => {
  return (
    <section>
      {isLoading
        ? Array.from({ length: 3 }).map(() => (
          [...Array(1)].map((_, i) => <SkeletonDisplayProduct key={i} />)
        ))
        : <MenuPostFeeds
          menuListPosts={menuListPosts}
          handleAddProduct={handleAddProduct}
        />
      }
    </section>
  )
}

export default Menu