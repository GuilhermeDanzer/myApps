import createDataContext from './createDataContext';
import api from '../api/api'
const animeReducer = (state,action) =>{
  switch(action.type){
    case 'genericRecomendations':
      return {manga:action.payload.manga}
    default:
      return state
  }
}

const getRecomendations = dispatch => async({type,genre}) =>{
  try{const response = await api.get(`/genre/${type}/${genre}`)
  dispatch({type:'genericRecomendations',payload:{manga:response.data.manga}})

}catch(err){
  console.log({type},{genre})
  console.log(err.message)
}


}
/*const getRecomendations = dispatch => async({type,genre}) =>{
  try{const response = await api.get(`/${type}/${genre}`)
  
  dispatch({type:'genericRecomendations',payload:response.data.count_item})
}catch(err){
  console.log({type},{genre})
  console.log(err.message)
}*/

export const {Provider,Context} = createDataContext (
  animeReducer,
  {getRecomendations},
  {manga:[]}
)