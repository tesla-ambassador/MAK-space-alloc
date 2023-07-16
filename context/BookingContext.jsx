import React, { createContext, useReducer, useState } from "react";
import BookingReducer from "./BookingReducer";
import { signInWithGoogle, signOutOfapp } from "@/firebase";

// Initial state
const initialState = {
  transactions: [],
};

// Create context
export const BookingContext = createContext(initialState);

// Provider component
export const BookingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(BookingReducer, initialState);
  const [viewerData, setViewerData] = useState({});
  const [isViewerOpen, setViewerToggle] = useState(false);
  const [isSignedIn, setSignedIn] = useState(false);
  const [profileName, setProfileName] = useState("");
  const [profilePhoto, setProfilePhoto] = useState("");

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  // Hall Viewer
  function handleViewer(obj) {
    setViewerData(obj);
  }

  function openViewer() {
    setViewerToggle(true);
  }

  function closeViewer() {
    setViewerToggle(false);
  }

  // Auth
  function toggleSignIn() {
    setSignedIn(!isSignedIn);
  }

  function signInToApp() {
    signInWithGoogle()
      .then((result) => {
        setProfileName(result.user.displayName);
        setProfilePhoto(result.user.photoURL);
        toggleSignIn();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function signOutOfApp() {
    signOutOfapp()
      .then(() => {
        alert("Successfuly logged out!");
        toggleSignIn();
      })
      .catch((err) => {
        alert("Whoops sorry we cannot log you out");
        console.log(err);
      });
  }

  return (
    <BookingContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
        handleViewer,
        openViewer,
        closeViewer,
        toggleSignIn,
        signInToApp,
        signOutOfApp,
        viewerData,
        isViewerOpen,
        isSignedIn,
        profileName,
        profilePhoto,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};
