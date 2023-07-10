import React, { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { database, storage } from '../../firebase/firebaseSDK'
import { ref, onValue } from 'firebase/database'
import { ref as storageRef, listAll, getDownloadURL } from 'firebase/storage'
import SkeletonDisplayProduct from '../Skeleton-Loading/SkeletonDisplayProduct'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';

const HomeViewProduct = ({ handleAddProduct, isLoading }) => {
    const [ userId ] = useParams();
    const [effectRan] = useRef(false);
    const [showViewProduct, setShowViewProduct] = useState({});
    const [productImage, setProductImage] = useState([]);

    // Function for fetching clicked data from database
    const fetchProduct = async (endpoint, id, stateSetter) => {
        try {
            const dataRef = ref(database, `${endpoint}/${id}`);
            onValue(dataRef, snapshot => {
                const data = snapshot.val();
                stateSetter(data);
                // isLoading true
            });
        } catch (err) {
            console.log(`Error: ${err.message}`);
            // setIsLoading false
        }
    };

    // function for fetching image from storage
    useEffect(() => {
        const imageRef = storageRef(storage, 'menu')
        listAll(imageRef)
            .then(res => {
                const promises = res.items.map((itemRef) =>
                    getDownloadURL(itemRef).then((url) => {
                        if (itemRef.name === `${showViewProduct.id}.png`) {
                            return { url, name: itemRef.name };
                        } else {
                            return null;
                        }
                    })
                )

                Promise.all(promises)
                    .then((results) => {
                        const filteredResults = results.filter((result) => result !== null);
                        setProductImage(filteredResults);
                    })
                    .catch((err) => {
                        console.log(`Error: ${err.message}`);
                    });
            })

            .catch((err) => {
                console.log(`Error: ${err.message}`);
            });

    }, [showViewProduct.id]);

    useEffect(() => {
        if (effectRan.current === false) {
            fetchProduct('/menu', userId, setShowViewProduct);

            return () => {
                effectRan.current = true
            }
        }

    }, [userId]);

    return (
        <section className='ViewProduct'>
            <div className="image-container">
                {isLoading
                    ? Array.from({ length: 1 }).map(() => (
                        [...Array(1)].map((_, i) => <SkeletonDisplayProduct key={i} />)
                    ))
                    : productImage.length > 0 && (
                        <img
                            src={productImage[0].url}
                            alt={showViewProduct.name}
                        />
                    )}
            </div>

            <section className='product-information-price'>
                <div className="product-name">{showViewProduct.name}</div>
                <div className="price">${showViewProduct.price }</div>
                <p className="information">{showViewProduct.description }</p>

                <div className="button-container">
                    <button className="add-to-cart" onClick={() => handleAddProduct(showViewProduct)}><FontAwesomeIcon className='login_icon' icon={faBasketShopping} />Add to cart</button>
                    <button className="order">Buy Now</button>
                </div>
            </section>
        </section>
    )
}

export default HomeViewProduct