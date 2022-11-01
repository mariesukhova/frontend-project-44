import readlineSync from 'readline-sync';

const greetings = () => {
  console.log("May I have your name?");
  const name = readlineSync.question('Your answer: ');
  console.log("Hello, " + name + "!");
}

export default greetings;