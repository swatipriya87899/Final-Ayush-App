const increment = (num) => {
    return {
      type: "INCREMENT",
      payload: num
    }
  }

  export const getNearbyHospitals = (hospitals) => {
  return{
    type: "NEAR_BY_HOSPITAL",
    payload: hospitals,
  }
}