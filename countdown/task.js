const count = document.getElementById('timer')
const count2 = document.getElementById('timer2')
secondsAll2 = Number(count.textContent);
nIntervalID = setInterval(() => {
    // secondsAll = Number(count.textContent);
    // secondsAll2 = secondsAll
    secondsAll2 -= 1
    hours = Math.floor(secondsAll2 / 3600);
    minutes = Math.floor((secondsAll2 - hours * 3600) / 60);
    seconds = secondsAll2 - hours * 3600 - minutes * 60;
    count.textContent = secondsAll2
    
    hoursPrint = ('0' + hours + ':').slice(-3)
    minutesPrint = ('0' + minutes + ':').slice(-3)
    secondsPrint = ('0' + seconds).slice(-2)
    count2.textContent = hoursPrint + minutesPrint + secondsPrint

    console.log(hoursPrint + minutesPrint + secondsPrint);


    // console.log(('0' + hours + ':').slice(-2));
    // console.log(('0' + minutes + ':').slice(-2));
    // console.log(('0' + seconds).slice(-2));

    if (secondsAll2 <= 0) {  
        alert("Вы победили в конкурсе!");
        clearInterval(nIntervalID);
    }
}, 1000)

