document.body.onpointermove = e => {
    const blob = document.getElementById("blob");
    const {clientX, clientY} = e;
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
    
for(const link of document.getElementsByClassName("link")) {
    link.onmousemove = e => {
        const decimal = e.clientX / link.offsetWidth;

        const   basePercent = 80,
                percentRange = 20,
                adjustablePercent = percentRange * decimal;

        const lightPercent = basePercent + adjustablePercent;

        link.style.setProperty("--light-percent", `${lightPercent}%`)
    }
}