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

const App = () => {
  const [todos, setTodos] = useState(null); // 2 передаем mockTodos в useState чтобы с ним работать
  const [isTodosLoading, setIsTodosLoading] = useState(false)
  const [isTodosLoadingError, setIsTodosLoadingError] = useState(false)


  useEffect(() => {
    setIsTodosLoadingError(false)
    setIsTodosLoading(true)

    getTodos()
    .then(todos => { // Определяем что должно приходить в данном случае todos
      setIsTodosLoading(false)
      setTodos(todos);
    })

    .catch(() => {
      setIsTodosLoadingError(true)
      setIsTodosLoading(false)
    });

    
  }, []);

  return (
    <div>
      <h1>Список задач</h1>

      { isTodosLoadingError && <p>Произошла ошибка</p> }

      { isTodosLoading && <p>Загружаем список задач</p> }

      { todos && todos.map(todo => ( // 3 Делаем отрисовку через map
        <p key={todo.id}>{todo.title}</p>
      ))}
    </div>
  )
}

export default App
