import React , {useEffect} from 'react'
import List from './List'
import TodoForm from './TodoForm';
import { UseSelector, useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setArray } from '../utils/todoSlice';

const ToDo = () => {

  const id = useSelector((store)=>store.auth.id);
  const isLoggedIn = useSelector((store)=>store.auth.isLoggedIn);
  const listUpdated = useSelector((store)=>store.todo.listUpdated);

  const dispatch = useDispatch()

  useEffect(()=>{
    const fetch = async()=>{
      await axios.get(`${window.location.origin}/api/v2/getTasks/${id}`)
      .then((res)=>{
         dispatch(setArray(res.data.list))
      })
    }
    if(id!=='')
    {
      fetch();}
      else{
        dispatch(setArray([]))
      }
 } , [ id, isLoggedIn , listUpdated])


  return (

    <>
        <TodoForm/>
        <List/>
    </> 
   ) 
}

export default ToDo