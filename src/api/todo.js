const BASE_URL = "https://jsonplaceholder.typicode.com" 

export const getTodos = () => {
    return fetch(`${BASE_URL}/todos`)
      .then(response => {
        if (!response.ok) {
          throw new Error('api respons failed')
        }

        return response.json();
      })
      
}