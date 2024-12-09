const monthNameE1 = document.querySelector("#month-name");
const dayNameE1 = document.querySelector("#day-name");
const dayNumberE1 = document.querySelector("#day-number");
const yearE1 = document.querySelector("#year");

const date = new Date();
console.log(date);
// const month = date.getMonth();
monthNameE1.innerText = date.toLocaleDateString("en" , {
    month:"long"
})

dayNameE1.innerText = date.toLocaleString("en" ,{
    weekday:"long"
})
dayNumberE1.innerText = date.getDate();
yearE1.innerText = date.getFullYear();
