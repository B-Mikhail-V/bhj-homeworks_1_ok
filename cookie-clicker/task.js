const img = document.getElementById('cookie')
const clicks = document.getElementById('clicker__counter')

counter1 = 0
    img.onclick = () => {
        counter1 ++
        if(counter1 % 2) {
            img.width *= 1.3
            clicks.textContent = counter1
        } else {
            img.width /= 1.3
            clicks.textContent = counter1
        }
    }   

