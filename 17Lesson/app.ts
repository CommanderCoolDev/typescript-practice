function logIdd(id: string | number): void {
  console.log(id);
}

const a = logIdd(1);
function multiply(f: number, s?: number): number | void {
  if (!s) {
    return f * f;
  }
  return f * s;
}

type voidFunc = () => void;

const f1: voidFunc = () => {};
const f2: voidFunc = () => {
  return true;
};
const b1 = f2();

const skillArr = ['devicePixelRatio', 'devops'];

const user17 = {
  s: ['s'],
};

skillArr.forEach(skill => user17.s.push(skill));
