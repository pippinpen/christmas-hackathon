import React, { createContext, useState } from "react";
import { useToasts } from "react-toast-notifications";
// import cloneDeep from 'lodash.cloneDeep' <-- use if your objects get complex

export const MoodboardsContext = createContext({
  fetchMoodboards: () => [],
  addMoodboard: () => {},
  updateMoodboard: () => {},
  deleteMoodboard: () => {},
  loaded: false,
  loading: false,
  error: null,
  moodboards: [],
});

// const CARS_ENDPOINT = "https://carsapp2050.herokuapp.com/api/v1/cars/";

export const MoodboardsProvider = (props) => {
  const [moodboards, setMoodboards] = useState(() => {
    return JSON.parse(localStorage.getItem('moodboards')) || [];
  });
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);
  // const [search, setSearch] = useState("");
  // const { addToast } = useToasts();

  const fetchMoodboards = async () => {
    // console.log('loading', loading);
    // console.log('error', error);
    if (loading || loaded || error) {
      return;
    }
    setLoading(true);
    
    try {
      const response = await fetch("/api/v1/moodboards");
      if (response.status !== 200) {
        throw response;
      }
      const data = await response.json();
      localStorage.setItem('cars', JSON.stringify(data));
      setCars(data);

      // setLoading(false);
      // console.log('cars from context', cars);
    } catch (err) {
      setError(err.message || err.statusText);
    } finally {
      setLoading(false);
      setLoaded(true);
    }
  };

  const addMoodboard = async (formData) => {
    console.log('about to add', formData);
    try {
      const response = await fetch("/api/v1/moodboards", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(formData),
      });
      if (response.status !== 201) {
        throw response;
      }
      const savedMoodboard = await response.json();
      console.log("got data", savedCar);
      const newMoodboards = [...moodboards, savedMoodboard];
      localStorage.setItem('moodboards', JSON.stringify(newMoodboards));
      setCars(newMoodboards);
      // addToast(`Saved ${savedCar.name}`, {
      //   appearance: "success",
      // });
    } catch (err) {
      console.log(err);
      // addToast(`Error ${err.message || err.statusText}`, {
      //   appearance: "error",
      // });
    }
  };

  const updateMoodboard = async (id, updates) => {
    console.log('updating', id, updates);
    let updatedMoodboard = null;
    try {
      const response = await fetch(`${CARS_ENDPOINT}${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(updates),
      });
      if (response.status !== 200) {
        throw response;
      }
      // Get index
      const index = Moodboards.findIndex((moodboard) => moodboard._id === id);
      console.log(index)

      // Get actual car
      const oldMoodboard = moodboards[index];
      console.log('oldMoodboard', oldMoodboard);

      // Merge with updates
      updatedMoodboard = {
        // legit use of 'var', so can be seen in catch block
        ...oldMoodboard,
        ...updates, // order here is important for the override!!
      };
      console.log('updatedMoodboard', updatedMoodboard);
      // recreate the cars array
      const updatedMoodboards = [
        ...moodboards.slice(0, index),
        updatedMoodboard,
        ...moodboards.slice(index + 1),
      ];
      localStorage.setItem('moodboards', JSON.stringify(updatedMoodboards));
      // addToast(`Updated ${updatedCar.name}`, {
      //   appearance: "success",
      // });
      setMoodboards(updatedMoodboards);
    } catch (err) {
      console.log(err);
      // addToast(
      //   `Error: Failed to update ${updatedCar.name}`,
      //   {
      //     appearance: "error",
      //   }
      // );
    }
  };

  const deleteMoodboard = async (id) => {
    let deletedMoodboard = null;
    try {
      const response = await fetch(`${/api/v1/moodboards}${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      if (response.status !== 204) {
        throw response;
      }
      // Get index
      const index = moodboards.findIndex((moodboard) => moodboard._id === id);
      deletedMoodboard = moodboards[index];
      // recreate the cars array without that car
      const updatedMoodboards = [...moodboards.slice(0, index), ...moodboards.slice(index + 1)];
      localStorage.setItem('moodboards', JSON.stringify(updatedMoodboards));
      setMoodboards(updatedMoodboards);
      console.log(`Deleted ${deletedMoodboard.name}`);
      // addToast(`Deleted ${deletedCar.name}`, {
      //   appearance: "success",
      // });
    } catch (err) {
      console.log(err);
      // addToast(
      //   `Error: Failed to update ${deletedCar.name}`,
      //   {
      //     appearance: "error",
      //   }
      // );
    }
  };


// ADD MOVIE
const addMovie = async (formData) => {
  console.log('about to add', formData);
  try {
    const response = await fetch("/api/v1/moodboards/:boardid/add-movie/:movie-id", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(formData),
    });
    if (response.status !== 201) {
      throw response;
    }
    const savedMoodboard = await response.json();
    console.log("got data", savedMovie);
    const newMovies = [...movies, savedMovies];
    localStorage.setItem('movies', JSON.stringify(newMovies));
    setCars(newMovies);
    // addToast(`Saved ${savedCar.name}`, {
    //   appearance: "success",
    // });
  } catch (err) {
    console.log(err);
    // addToast(`Error ${err.message || err.statusText}`, {
    //   appearance: "error",
    // });
  }
};


  return (
    <MoodboardsContext.Provider
      value={{
        moodboards,
        loading,
        error,
        fetchMoodboards,
        addMoodboard,
        updateMoodboard,
        deleteMoodboard,
      }}
    >
      {props.children}
    </MoodboardsContext.Provider>
  );
};