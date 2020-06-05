import createDataContext from './createDataContext';
import api from '../api/api'

const listMangaReducer = (state,action) =>{
  switch(action.type){
    case 'deleteManga':
      return state.filter((manga) => manga !== action.payload) 
    case 'saveManga':
      state.map((manga)=>{
        if (manga ===action.payload){
          action.payload = null
          return alert('Esse item ja se encontra em sua lista')
          
        }
      })
      return [...state,action.payload]
    default:
      return state
  }
}

const saveManga = dispatch =>({manga})=>{
  try{
  
  dispatch({type:'saveManga',payload:manga})
  

  }catch(err){
    console.log(err)
    console.log('Não foi possivel salvar seu manga')
  }
}

const deleteManga = dispatch =>({manga})=>{
  try {
    dispatch({type:'deleteManga',payload:manga})
  } catch (error) {
    
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
  listMangaReducer,
  {saveManga,deleteManga},
  []
)