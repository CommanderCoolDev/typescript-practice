const arr10 = ['sdf', 1];
function logId(id: string | number | boolean) {
  if (typeof id === 'string') {
    console.log(id);
  } else if (typeof id === 'number') {
    console.log(id);
  }
}
function logErr(err: string | string[]) {
  if (Array.isArray(err)) {
    console.log(err);
  } else {
    console.log(err);
  }
}
function logErrObj(obj: { a: number } | { b: number }) {
  if ('a' in obj) {
    console.log(obj.a);
  } else {
    console.log(obj.b);
  }
}

function logMulti(a: string | number, b: string | boolean) {
  if (a === b) {
    console.log('its a string');
  } else {
    console.log('type = string | number');
  }
}
// const arr10 = ['sdf', 1];
// function logId(id: string | number| boolean) {
//   console.log(id);
// }
// logId(1);
// logId('sdf');
// logId(true);
