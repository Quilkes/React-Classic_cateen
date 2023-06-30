import React from 'react'
import HomePostPage from './HomePostPage'

const HomePostFeed = ({ homeListPosts, handleAddProduct }) => {
  return (
    <>
      {homeListPosts.map(postMapped => (
        <HomePostPage
          key={postMapped.id}
          postMapped={postMapped}
          handleAddProduct={handleAddProduct}
        />
      ))}
    </>
  )
}

export default HomePostFeed