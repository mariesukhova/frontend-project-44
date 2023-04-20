export default function getMathSign() {
  const randomNum = Math.round(Math.random() * 2);

  switch (randomNum) {
    case 0:
      return '+';
    case 1:
      return '-';
    case 2:
      return '*';

    default:
      return '+';
  }
}
