// CRUD - Create Read Update Delete

// 1. Добовление новой задачи (Create)
// 2. Получение списка задач (Read)
// 3. Редактирование задачи (Update)
// 4. Удаление задачи (Delete)

import { 
  useState,
  useEffect 
} from 'react'
import { getTodos } from './api/todo';
import { getNormalizedTodos } from './utils/get-normalized-todos';
import Todo from './components/Todo/Todo';
import { deleteTodo } from './api/todo';

// const mockTodos = [ // 1 Создаем изначальную структуру из которой будем отталкиваться
//   {
//     id: 1,
//     title: 'delectus aut autem',
//     completed: false
//   },
//   {
//     id: 2,
//     title: 'delectus aut autem',
//     completed: false
//   }
// ];

// todosIds = [1, 2] // Если мы перебираем список удобнее его сделать через ID чтобы было удобнее обращаться к массиву, а не перебать весь его
// todosById = {
//   1: {
//     id: 1,
//     title: 'delectus aut autem',
//     completed: false
//   },
//   2: {
//     id: 2,
//     title: 'delectus aut autem',
//     completed: false
//   }
// }

const App = () => {
  const [todosIds, setTodosIds] = useState(null); // 2 передаем mockTodos в useState чтобы с ним работать
  const [todosById, setTodosById] = useState({});
  const [isTodosLoading, setIsTodosLoading] = useState(false)
  const [isTodosLoadingError, setIsTodosLoadingError] = useState(false)


  useEffect(() => {
    setIsTodosLoadingError(false)
    setIsTodosLoading(true)

    getTodos()
    .then(todos => { // Определяем что должно приходить в данном случае todos
      const [ids, byIds] = getNormalizedTodos(todos) // Данная логика функции импортирована из get-normalize-todos 

      setIsTodosLoading(false);
      setTodosIds(ids);
      setTodosById(byIds);
    })

    .catch(() => {
      setIsTodosLoadingError(true)
      setIsTodosLoading(false)
    });

    
  }, []);

  const handleDeleteTodoBtnClick = (id) => { // В функцию будем передавать id todo
    console.log(id)
    setTodosIds(todosIds.filter(todoId => todoId !== id)) // Удаляем id по нажатию
    deleteTodo(id); // Процесс удаления на бэкенде
  }

  return (
    <div>
      <h1>Список задач</h1>

      { isTodosLoadingError && <p>Произошла ошибка</p> }

      { isTodosLoading && <p>Загружаем список задач</p> }

      { todosIds && todosIds.map(id => ( // 3 Делаем отрисовку через map
        <Todo
          key={id}
          todo={todosById[id]}
          onDeleteBtnClick={() => handleDeleteTodoBtnClick(id)} />

      ))}
    </div>
  )
}

export default App
