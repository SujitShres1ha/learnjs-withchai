
const div = document.getElementById('clock')

setInterval(() => {
    const time = new Date()
    div.innerHTML = time.toLocaleTimeString()
}, 1000);