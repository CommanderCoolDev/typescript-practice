interface User15 {
  login: string;
  password?: string;
}

const user15: User15 = {
  login: 'asf@asd',
  password: '1',
};

function multi(first: number, second?: number): number {
  if (!second) {
    return first * first;
  }
  return first * second;
}

interface User15Pro {
  login: string;
  password?: {
    type: 'prymary' | 'secondary';
  };
}

function testPas(user: User15Pro) {
  const t = user.password?.type;
}

function test(param?: string) {
  const t = param ?? multi(5);
}
