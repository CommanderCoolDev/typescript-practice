interface User13 {
  name: string;
  age: number;
  skills: string[];

  log: (id: number) => string;
}
interface Role13 {
  roleId: number;
}

interface UserWithRole13 extends User13, Role13 {
  createdAt: Date;
}

let user13: UserWithRole13 = {
  name: 'asd',
  age: 33,
  skills: ['1', '2'],
  roleId: 1,
  createdAt: new Date(),
  log(id) {
    return '';
  },
};
interface UserDictionary {
  [index: number]: User13;
}
