const $input = document.body.querySelector('input');
const $button = document.body.querySelector('button');
const $factorialView = document.body.querySelector('#factorial-view');

function generateFactorial() {
  const memoObj = {
    0: 1,
  };

  function memoFactorial(n) {
    if (memoObj[n] != null) return memoObj[n];
    let num = n;
    for (let i = n - 1; i > 0; i--) {
      num = num *= i;
    }
    memoObj[n] = num;
    return num;
  }
  return memoFactorial;
}

const factorial = generateFactorial();

$button.addEventListener('click', (e) => {
  e.preventDefault();
  const { value } = $input;
  // performance.mark('Start'); // measure start
  console.time('factorial');

  const answer = factorial(+value);

  console.timeEnd('factorial');

  // performance.mark('End'); // measure end
  // performance.measure('Factorial memo speed', 'Start', 'End');
  // performance.getEntriesByType('measure');

  $factorialView.innerHTML = `<div>Factorial of ${value} is : ${answer}</div>`;
});
