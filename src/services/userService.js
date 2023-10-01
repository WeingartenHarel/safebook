export const userService = {
    query,
}

async function query() {
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/users');
          const result = await response.json();
          return result
        } catch (error) {
          console.error('Error fetching data:', error);
        }
}
