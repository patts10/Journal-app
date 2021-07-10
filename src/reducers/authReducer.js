import { types } from "../components/types/types";

export const authReducer = ( state = {}, action ) => {

  // {
  //   uid: 'kjnkfuf3fh3fhhi',
  //   name: 'Patts'

  // }

  switch (action.type) {
    case types.login:
      
    return {
      uid: action.payload.uid,
      name: action.payload.displayName
    }
    
    case types.logout:
      
    return { }
  
    default:
      return state;
  }
}