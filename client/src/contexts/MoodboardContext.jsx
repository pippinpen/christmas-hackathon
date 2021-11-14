// import React, { createContext, useState } from "react";
// import { useToasts } from "react-toast-notifications";
// // import cloneDeep from 'lodash.cloneDeep' <-- use if your objects get complex

// export const MoodboardContext = createContext({
//   fetchMoodboard: () => [],
//   addMoodboard: () => {},
//   updateMoodboard: () => {},
//   deleteMoodboard: () => {},
//   loaded: false,
//   loading: false,
//   error: null,
//   moodboards: [],
// });

// const MOODBOARD_ENDPOINT = "https://carsapp2050.herokuapp.com/api/v1/cars/";

// export const MoodboardsProvider = (props) => {
//   const [moodboards, setMoodboards] = useState(() => {
//     return JSON.parse(localStorage.getItem('moodboards')) || [];
//   });
//   const [loading, setLoading] = useState(false);
//   const [loaded, setLoaded] = useState(false);
//   const [error, setError] = useState(null);
//   // const [search, setSearch] = useState("");
//   // const { addToast } = useToasts();

//   const fetchMoodboards = async () => {
//     // console.log('loading', loading);
//     // console.log('error', error);
//     if (loading || loaded || error) {
//       return;
//     }
//     setLoading(true);
    
//     try {
//       const response = await fetch(MOODBOARDS_ENDPOINT);
//       if (response.status !== 200) {
//         throw response;
//       }
//       const data = await response.json();
//       localStorage.setItem('cars', JSON.stringify(data));
//       setCars(data);

//       // setLoading(false);
//       // console.log('cars from context', cars);
//     } catch (err) {
//       setError(err.message || err.statusText);
//     } finally {
//       setLoading(false);
//       setLoaded(true);
//     }
//   };

//   const addCar = async (formData) => {
//     console.log('about to add', formData);
//     try {
//       const response = await fetch("/api/v1/moodboards", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           // 'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         body: JSON.stringify(formData),
//       });
//       if (response.status !== 201) {
//         throw response;
//       }
//       const savedMoodboard = await response.json();
//       console.log("got data", savedCar);
//       const newMoodboards = [...moodboards, savedMoodboard];
//       localStorage.setItem('moodboards', JSON.stringify(newMoodboards));
//       setCars(newMoodboards);
//       // addToast(`Saved ${savedCar.name}`, {
//       //   appearance: "success",
//       // });
//     } catch (err) {
//       console.log(err);
//       // addToast(`Error ${err.message || err.statusText}`, {
//       //   appearance: "error",
//       // });
//     }
//   };

//   const updateMoodboard = async (id, updates) => {
//     console.log('updating', id, updates);
//     let updatedMoodboard = null;
//     try {
//       const response = await fetch(`${CARS_ENDPOINT}${id}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//           // 'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         body: JSON.stringify(updates),
//       });
//       if (response.status !== 200) {
//         throw response;
//       }
//       // Get index
//       const index = Moodboards.findIndex((moodboard) => moodboard._id === id);
//       console.log(index)

//       // Get actual car
//       const oldMoodboard = moodboards[index];
//       console.log('oldMoodboard', oldMoodboard);

//       // Merge with updates
//       updatedMoodboard = {
//         // legit use of 'var', so can be seen in catch block
//         ...oldCar,
//         ...updates, // order here is important for the override!!
//       };
//       console.log('updatedCar', updatedCar);
//       // recreate the cars array
//       const updatedCars = [
//         ...cars.slice(0, index),
//         updatedCar,
//         ...cars.slice(index + 1),
//       ];
//       localStorage.setItem('cars', JSON.stringify(updatedCars));
//       // addToast(`Updated ${updatedCar.name}`, {
//       //   appearance: "success",
//       // });
//       setCars(updatedCars);
//     } catch (err) {
//       console.log(err);
//       // addToast(
//       //   `Error: Failed to update ${updatedCar.name}`,
//       //   {
//       //     appearance: "error",
//       //   }
//       // );
//     }
//   };

//   const deleteCar = async (id) => {
//     let deletedCar = null;
//     try {
//       const response = await fetch(`${CARS_ENDPOINT}${id}`, {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//           // 'Content-Type': 'application/x-www-form-urlencoded',
//         },
//       });
//       if (response.status !== 204) {
//         throw response;
//       }
//       // Get index
//       const index = cars.findIndex((car) => car._id === id);
//       deletedCar = cars[index];
//       // recreate the cars array without that car
//       const updatedCars = [...cars.slice(0, index), ...cars.slice(index + 1)];
//       localStorage.setItem('cars', JSON.stringify(updatedCars));
//       setCars(updatedCars);
//       console.log(`Deleted ${deletedCar.name}`);
//       // addToast(`Deleted ${deletedCar.name}`, {
//       //   appearance: "success",
//       // });
//     } catch (err) {
//       console.log(err);
//       // addToast(
//       //   `Error: Failed to update ${deletedCar.name}`,
//       //   {
//       //     appearance: "error",
//       //   }
//       // );
//     }
//   };

//   return (
//     <CarsContext.Provider
//       value={{
//         cars,
//         loading,
//         error,
//         fetchCars,
//         addCar,
//         updateCar,
//         deleteCar,
//       }}
//     >
//       {props.children}
//     </CarsContext.Provider>
//   );
// };