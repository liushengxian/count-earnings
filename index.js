
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
    const cancelButton = document.getElementById('cancelButton');
    console.log("salary: ", salary);
    if(!salary){
        title.style.display = 'none';
        form.style.display = 'block';
        cancelButton.style.display = 'none';
    } else {
        title.style.display = 'block';
        form.style.display = 'none';
        cancelButton.style.display = 'block';
        system.title = `You have earned RMB ${getEarnedSalary(salary, 2)} today.`;
    }

}, 100)

const item = document.getElementById('confirmButton');
item.onclick = () => {
    if(system.salaryinput){
        localStorage.setItem('salary', system.salaryinput);
        salary = +system.salaryinput;
    }
}

