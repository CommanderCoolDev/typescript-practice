// type httpMethod = 'post' | 'get';

// function fetchWithAuth(url: string, method: httpMethod) {}

type User = { name: string; age: number; skills: string[] };

type Role = {
  id: number;
};

type UserWithRole = User & Role;
// type UserWithRole = {
//   user: User;
//   role: Role;
// };
let user12: UserWithRole = {
  name: 'asd',
  age: 33,
  skills: ['1', '2'],
  id: 1,
};
// let user12: { name: string; age: number; skills: string[] } = {
//   name: 'asd',
//   age: 33,
//   skills: ['1', '2'],
// };
