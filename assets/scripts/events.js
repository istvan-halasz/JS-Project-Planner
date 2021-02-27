const buttons = document.querySelectorAll('button');

const buttonCliclHandler = (event) => {
  event.target.disabled = true;
  console.log(event);
};

const anotherButtonClickHandler = () => {
  console.log('This was clicked!');
};

const boundFn = buttonCliclHandler.bind(this);

buttons.forEach((btn) => {
  btn.addEventListener('click', buttonCliclHandler);
});
