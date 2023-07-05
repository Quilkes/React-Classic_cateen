import React, { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { database, storage } from '../../firebase/firebaseSDK'
import { ref, onValue } from 'firebase/database'
import { ref as storageRef, listAll, getDownloadURL } from 'firebase/storage'

const HomeViewProduct = () => {
    const [userId] = useParams();
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
        const imageRef = storageRef(storage, 'home_favourites')
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

    return (
        <div>HomeViewProduct</div>
    )
}

export default HomeViewProduct