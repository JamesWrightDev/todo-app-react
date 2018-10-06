import React from 'react';

const NewTodoForm = (props) =>{
	return(
 		<form onSubmit={props.fromSubmitted}>  
{/*          <label  htmlFor="newTodo">New Todo</label>*/} 
          <input onChange={props.newTodoChanged} id="newTodo" name="newTodo" value={props.newTodo} required/>
          <button type="submit">+</button>
        </form>
	)
}
export default NewTodoForm;