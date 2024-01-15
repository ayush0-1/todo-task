import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState : {
        inputs : {title : "" , body : ""},
        array : [ ],
        updateBtn : false,
        updateIndex : -1,
        upId : '',
        delId : '',
        listUpdated : false
    },
    reducers:{
        setInputs : (state , action)=>{
           state.inputs = action.payload
        },
        addTodo : (state , action)=>{
          
          state.array = [...state.array , action.payload]
        },
        deleteTodo : (state , action)=>{
            state.array.splice(action.payload , 1);
        },
        updateBtn : (state , action)=>{
            state.updateBtn=!state.updateBtn;
            state.updateIndex = action.payload;
        },
        updateTodo : (state , action)=>{
            state.array.splice(state.updateIndex ,1 ,action.payload)
            state.updateBtn = false
            state.updateIndex = -1
        },
        setArray : (state , action)=>{
            state.array = action.payload;
        },
        setListUpdated: (state)=>{
            state.listUpdated = !state.listUpdated
        },
        setUpId : (state , action)=>{
            state.upId = action.payload;
        }
    }
})

export const { addTodo , deleteTodo , updateBtn , updateTodo , setArray , setListUpdated , setUpId , setInputs} = todoSlice.actions;
export default todoSlice.reducer;