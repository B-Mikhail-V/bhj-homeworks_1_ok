let counterDead = 0;
let counterLost = 0;

for (let index = 1; index < 10; index++ ) {
    const clickUser = document.getElementById(`hole${index}`)
    
    clickUser.onclick = () => {
        console.log(counterDead);
        console.log(counterLost);

        let deadCount = document.getElementById('dead');
        let lostCount = document.getElementById('lost');

        if(counterLost < 4 && counterDead < 9) {
                if(clickUser.className == 'hole') {
                console.log(clickUser.className);
                counterLost += 1;
                lostCount.textContent = counterLost;
                } else if(clickUser.className == 'hole hole_has-mole') {
                console.log(clickUser.className);
                counterDead += 1;
                clickUser.className = 'hole_clicked_killed'
                console.log(clickUser.className);
                deadCount.textContent = counterDead;
                }  
        } else if (counterLost == 4) {
            alert('Вы проиграли!');
            counterLost = 0
            counterDead = 0
            lostCount.textContent = counterLost;
            deadCount.textContent = counterDead;
        } else if (counterDead == 9) {
            alert('Ура, победа!');
            counterLost = 0
            counterDead = 0
            lostCount.textContent = counterLost;
            deadCount.textContent = counterDead
        }

        }

    }

