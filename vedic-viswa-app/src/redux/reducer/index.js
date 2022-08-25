const initialState = {
    nearByHospital:[]
  };


  export default (state = initialState, action) => {
    switch (action.type) {
        case "NEAR_BY_HOSPITAL":
          return {
            ...state,
            nearByHospital: action.payload
          } 
        default:
            return state;
        }  
  }
