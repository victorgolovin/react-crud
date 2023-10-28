
const Todo = ({
    todo,
    onDelete,
    onToggle
}) => {
    return (
      <div>
        <p>{todo.title}</p>
        {/* Ниже чекбок todo, в нем onChange по которому мы запускаем onToggle, все это процесс редактирования*/}
        <input
        type="checkbox"
        checked={todo.completed}
        onChange={onToggle}/>

        <button onClick={onDelete}>Удалить задачу</button>
      </div>
    )
  }
  
  export default Todo
  