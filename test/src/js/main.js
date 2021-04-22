const defaultSelect = () => {
  const element = document.querySelector('.default');
  const choices = new Choices(element, {
    searchEnabled: false,
    searchChoices: false,
    placeholder: true,
    placeholderValue: true,
  });
}

defaultSelect();

const multiDefault = () => {
  const elements = document.querySelectorAll('.multi-default');
  elements.forEach(el => {
    const choices = new Choices(el, {
      searchEnabled: false,
      searchChoices: false,
      placeholder: true,
      placeholderValue: true,
    });
  });
}

multiDefault();

document.querySelector('.custom-checkbox__field').onclick = () => {
  let out9 = document.querySelector('.temp--wrapper');
  let r9 = document.querySelector('.custom-checkbox__field');
  if (r9.checked) {
      out9.classList.add('active');
  }
  else  {
    out9.classList.remove('active');
  }
}


