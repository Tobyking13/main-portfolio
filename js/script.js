document.body.onpointermove = e => {
    const blob = document.getElementById("blob");
    const {clientX, clientY} = e;

    console.log(e)

    blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    }, {duration: 2000, fill: "forwards"});
    
}

document.getElementById("title").onmouseover = e => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let interations = 0;
    const interval = setInterval(() => {
    e.target.innerText = e.target.innerText.split('')
    .map((letter, index) => {
        if (index < interations) {
           return e.target.dataset.value[index];
        }
        return letters[Math.floor(Math.random() * 26)]
    })
    .join('');
    if (interations >= title.length) {
        clearInterval(interval)
    }
    console.log(interations)
    interations += 1/3;
}, 30)
}
    