// ratings
const ratings = {
  Samsung: 0,
  Xiaomi: 0,
  Oppo: 0,
  Vivo: 0,
  Huawei: 0
};

const max = 5;

// form
const select = document.getElementById('select-item');
const input = document.getElementById('number');
const form = document.getElementById('form');

let item;

select.addEventListener('change', e => {
  item = e.target.value;
  form.reset()
  input.disabled = false;
})

form.addEventListener('submit', e => {
  e.preventDefault();
  const rating = input.value;
  ratings[item] = rating;
  getRatings();
})

// get ratings
const getRatings = () => {
  for (let rating in ratings) {
    // percentage
    const percentage = (ratings[rating] / max) * 100;
    const rounded = `${Math.round(percentage / 10) * 10}%`;

    // output stars
    document.querySelector(`#${rating} #inner`).style.width = rounded;
    document.querySelector(`#${rating} .num`).textContent = ratings[rating];
  }
}

document.addEventListener('DOMContentLoaded', getRatings);