import React from 'react';
import MenuPostPage from './MenuPostPage';

const MenuPostFeeds = ({ menuListPosts, handleAddProduct }) => {
  return (
    <>
      {menuListPosts.map(postMapped => (
        <MenuPostPage
          key={postMapped.id}
          postMapped={postMapped}
          handleAddProduct={handleAddProduct}
        />
      ))}
    </>
  )
}

export default MenuPostFeeds