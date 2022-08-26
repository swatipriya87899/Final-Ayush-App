import { openDrawer } from "../action";

const initialState = {
    nearByHospital:[],
    openDrawer:false
  };


  export default (state = initialState, action) => {
    switch (action.type) {
        case "NEAR_BY_HOSPITAL":
          return {
            ...state,
            nearByHospital: action.payload
          } 
          case "OPEN_DRAWER":
          return {
            ...state,
            openDrawer: action.payload
          } 
        default:
            return state;
        }  
  }
