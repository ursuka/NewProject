const find = (selector) => {
  return document.querySelector(selector);
}

const newButton = find('#btn');


newButton.addEventListener('click', ()=>{
    const patrat = find('.patrat');
    patrat.style.backgroundColor = 'red';
})