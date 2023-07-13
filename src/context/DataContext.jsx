import { createContext, useState, useEffect, lazy, Suspense, useRef } from "react";
import { database, storage, auth } from '../firebase/firebaseSDK';
import { ref, onValue, limitToFirst, query } from 'firebase/database';
import { ref as storageRef, getDownloadURL } from 'firebase/storage';
import toast, { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';

const DataContext = createContext({})

export const Dataprovider = ({ Children }) => {

    return (
        <DataContext.Provider value={{
            
        }}>
            {Children}
        </DataContext.Provider>
    )
}

export default DataContext