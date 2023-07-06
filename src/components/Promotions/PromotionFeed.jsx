import React from 'react'
import PromotionPostPage from './PromotionPostPage'

const PromotionFeed = ({ promotionListPosts, handleAddProduct }) => {
  return (
    <>
    {promotionListPosts.map(postMapped => (
        <PromotionPostPage
          key={postMapped.id}
          postMapped={postMapped}
          handleAddProduct={handleAddProduct}
        />
      ))}
    </>
  )
}

export default PromotionFeed