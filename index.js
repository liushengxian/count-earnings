
let data = {
    title: '',
    salaryinput: '',
};


let salary = 0;
const salaryStorage = localStorage.getItem('salary');
if (!salaryStorage) {

} else {
    salary = +salaryStorage;
}

const system = registerData(data);

setInterval(() => {
    // toggle change
    const form = document.getElementById('form');
    const title = document.getElementById('title');
    if(!salary){
        title.style.display = 'none';
        form.style.display = 'block';
    } else {
        title.style.display = 'block';
        form.style.display = 'none';
        system.title = `You have earned RMB ${getEarnedSalary(salary, 2)} today.`;
    }

}, 100)

const item = document.getElementById('confirmbutton');
item.onclick = () => {
    if(system.salaryinput){
        localStorage.setItem('salary', system.salaryinput);
        salary = +system.salaryinput;
    }
}

