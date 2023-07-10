import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { database, storage } from '../../firebase/firebaseSDK';
import { ref, onValue } from 'firebase/database';
import { ref as storageRef, listAll, getDownloadURL } from 'firebase/storage';
import SkeletonDisplayProduct from '../Skeleton-Loading/SkeletonDisplayProduct';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import '../../css/HomeViewProductt.css';

const HomeViewProduct = ({ handleAddProduct, isLoading }) => {
  const { userId } = useParams();
  const effectRan = useRef(false);
  const [showViewProduct, setShowViewProduct] = useState({});
  const [productImage, setProductImage] = useState([]);

  // Function for fetching clicked data from database
  const fetchProduct = async (endpoint, id, stateSetter) => {
    try {
      const dataRef = ref(database, `${endpoint}/${id}`);
      const snapshot = await new Promise((resolve, reject) => {
        onValue(dataRef, resolve, reject);
      })
      const data = snapshot.val();
      stateSetter(data);
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  // Function for fetching image from storage
  const fetchImage = async (imageRef, productId) => {
    try {
      const response = await listAll(imageRef);
      const promises = response.items.map(async (itemRef) => {
        const url = await getDownloadURL(itemRef);
        if (itemRef.name === `${productId}.png`) {
          return { url, name: itemRef.name };
        } else {
          return null;
        }
      });

      const results = await Promise.all(promises);
      const filteredResults = results.filter((result) => result !== null);
      setProductImage(filteredResults);
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!effectRan.current) {
        await fetchProduct('/menu', userId, setShowViewProduct);
        effectRan.current = true;
      }
    };

    fetchData();
  }, [userId]);

  useEffect(() => {
    const imageRef = storageRef(storage, 'menu');
    if (showViewProduct.id) {
      fetchImage(imageRef, showViewProduct.id);
    }
  }, [showViewProduct]);

  return (
    <section className='ViewProduct'>
      <div className='image-container'>
        {isLoading ? (
          Array.from({ length: 1 }).map(() => (
            [...Array(1)].map((_, i) => <SkeletonDisplayProduct key={i} />)
          ))
        ) : productImage.length > 0 ? (
          <img src={productImage[0].url} alt={showViewProduct.name} />
        ) : null}
      </div>

      <section className='product-information-price'>
        <div className='product-name'>{showViewProduct.name}</div>
        <div className='price'>${showViewProduct.price}</div>
        <p className='information'>{showViewProduct.information}</p>

        <div className='button-container'>
          <button
            className='add-to-cart'
            onClick={() => handleAddProduct(showViewProduct)}
          >
            <FontAwesomeIcon className='login_icon' icon={faBasketShopping} />
            Add to cart
          </button>
          <button className='order'>Buy Now</button>
        </div>
      </section>
    </section>
  );
};

export default HomeViewProduct;
