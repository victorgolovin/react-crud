const BASE_URL = "https://jsonplaceholder.typicode.com";

export const getTodos = () => {
  return fetch(`${BASE_URL}/todos`).then((response) => {
    if (!response.ok) {
      throw new Error("api respons failed");
    }

    return response.json();
  });
};

export const addTodo = (todo) => { // В функцию добовления todo передаем (todo)
  return fetch(`${BASE_URL}/todos`, {
    method: "POST",
    body: JSON.stringify(todo),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    }
  });
};

export const deleteTodo = (id) => {
  // Удаляем id в бекенде
  fetch(`${BASE_URL}/todos/${id}`, {
    method: "DELETE",
  });
};

export const updateTodo = (todo) => {
  fetch(`${BASE_URL}/todos/${todo.id}`, {
    method: "PUT",
    body: JSON.stringify(todo),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
};
