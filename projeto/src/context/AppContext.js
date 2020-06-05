import createDataContext from './createDataContext';
import api from '../api/api'
const mangaReducer = (state,action) =>{
  switch(action.type){
    case 'genericSearch':
      return {mangaSearch:action.payload.manga}
    case 'clearState':
      return {mangaSearch:action.payload.manga}
    default:
      return state
  }
}
                                  
const getManga = dispatch => async({manga}) =>{ //manga é a mesma coisa que manga:manga, caso o nome da variavel passada seja diferente tera que ser manga:nome
  try{  
    dispatch({type:'clearState',payload:{manga:null}})
    const response = await api.get(`/search/manga?q=${manga}&limit=13`)
    //console.log(response.data.results)
  dispatch({type:'genericSearch',payload:{manga:response.data.results}})

}catch(err){
  console.log({name})
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
  mangaReducer,
  {getManga},
  {mangaSearch:[]}
)