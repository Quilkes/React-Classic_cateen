import React from 'react'
import MenuPostFeeds from './MenuPostFeeds'
import Loading from './Loading-state/Loading'

const Menu = ({ menuListPosts, isLoading, handleAddProduct }) => {
  return (
    <section>
      {isLoading
        ? <Loading />
        : <MenuPostFeeds
          menuListPosts={menuListPosts}
          handleAddProduct={handleAddProduct}
        />
      }
    </section>
  )
}

export default Menu