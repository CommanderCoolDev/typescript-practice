let input: unknown;
input = 3;
input = ["e", "erf"];
// let resp18: string = input; // trebuet opredelenie tipa

function run(i: unknown) {
  if (typeof i === "number") {
    i++;
  } else {
    i;
  }
}
run(input);
async function getData() {
  try {
    await fetch("");
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.message);
    }
  }
}
type U1 = unknown | number;
type I1 = unknown & string;
