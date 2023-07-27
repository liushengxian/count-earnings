const registerData = (data) => {    
    const system = new Proxy(data, {
        get: (target, p) => {
            // return document.getElementById(p).innerText;
            return target[p];
        }, 
        set: (target, p,newVal) => {
            target[p] = newVal;
            const item = document.getElementById(p);
            item.innerText = newVal;
        }
    })

    Object.keys(data).forEach(key => {
        document.getElementById(key).oninput = (e) => {
            data[key] = e.target.value;
        }
    })

    return system;
}

const getEarnedSalary = (salary, num) => {
    const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const now = new Date();
    const perDaySalary = salary / monthDays[now.getMonth()];

    const seconds = 24 * 60 * 60;

    const month = `00${(now.getMonth() + 1)}`.slice(-2);
    const today =  `${now.getFullYear()}-${month}-${now.getDate()} 00:00:00`;
    const day = new Date(today);

    const miliseconds = (now.getTime() - day.getTime()) / 1000;

    const earnedMoney = perDaySalary / seconds * miliseconds;

    return earnedMoney.toFixed(num);

}