function getFullName3(userEntity: {
  firstName: string;
  surname: string;
}): string {
  return `${userEntity.firstName} ${userEntity.surname}`;
}

const user = {
  firstName: 'Dima',
  surname: 'Glebov',
  city: 'Kyiv',
  age: 33,
  skills: {
    dev: true,
    devops: true,
  },
};
console.log(getFullName3(user));
