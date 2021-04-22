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
  let out = document.querySelector('.temp--wrapper');
  let check = document.querySelector('.custom-checkbox__field');
  if (check.checked) {
      out.classList.add('active');
  }
  else  {
    out.classList.remove('active');
  }
}


