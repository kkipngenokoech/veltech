import fetch from 'node-fetch';


// fetching users from the JSON placeholder API
export async function fetchWanderers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();
  return users;
}