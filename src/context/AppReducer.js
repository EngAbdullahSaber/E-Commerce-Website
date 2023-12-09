import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const getBasketTotal = (basket) =>
  basket.reduce((amount, item) => {
    return amount + item.price;
  }, 0);

export const initialState = {
  basket: [],
  favourite: [],
  compare: [],
  user: null,
};
const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "ADD_TO_FAVOURITE":
      return {
        ...state,
        favourite: [...state.favourite, action.item],
      };
    case "ADD_TO_COMPARE":
      return {
        ...state,
        compare: [...state.compare, action.item],
      };
    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };
    case "REMOVE_FROM_FAVOURITE":
      const index = state.favourite?.findIndex(
        (favouriteItem) => favouriteItem.id == action.id
      );
      let newFavourite = [...state.favourite];

      if (index >= 0) {
        newFavourite.splice(index, 1);
      } else {
        console.warn(
          `can't remove product {id ${action} as it's not in basket!`
        );
      }
      return {
        ...state,
        favourite: newFavourite,
      };

    case "REMOVE_FROM_COMPARE":
      const index2 = state.compare?.findIndex(
        (compareItem) => compareItem.id == action.id
      );
      let newCompare = [...state.compare];

      if (index2 >= 0) {
        newCompare.splice(index2, 1);
      } else {
        console.warn(
          `can't remove product {id ${action} as it's not in basket!`
        );
      }
      return {
        ...state,
        compare: newCompare,
      };

    case "REMOVE_FROM_BASKET":
      const index3 = state.basket?.findIndex(
        (basketItem) => basketItem.id == action.id
      );
      let newBasket = [...state.basket];

      if (index3 >= 0) {
        newBasket.splice(index3, 1);
      } else {
        console.warn(
          `can't remove product {id ${action} as it's not in basket!`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };

    default:
      return state;
  }
};

export default AppReducer;
