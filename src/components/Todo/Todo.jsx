
const Todo = ({
    todo,
    onDeleteBtnClick
}) => {
    return (
      <div>
        <p>{todo.title}</p>
        <button onClick={onDeleteBtnClick}>Удалить задачу</button>
      </div>
    )
  }
  
  export default Todo
  