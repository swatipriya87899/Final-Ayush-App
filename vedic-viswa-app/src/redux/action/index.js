
export const getNearbyHospitals = (hospitals) => {
  return {
    type: "NEAR_BY_HOSPITAL",
    payload: hospitals,
  }
}

export const openDrawer = (condition) => {
  return {
    type: "OPEN_DRAWER",
    payload: condition
  }
}
