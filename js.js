let count = 0
const p1b1 = document.getElementById('p1b1')
const p2b1 = document.getElementById('p2b1')
const pg1 = document.getElementById('page1')
const pg3 = document.getElementById('page3')
p1b1.addEventListener('click', function () {
    count = count + 1
    console.log(count)
    var t1 = document.getElementById('p1t1')
    t1.innerHTML = "Fool!"
    p1b1.remove()
    document.querySelector("#page1").style.animationPlayState = 'paused'
})


let rickRollCount = 0
const p2t1 = document.getElementById('p2t1')
p2b1.addEventListener('click', function () {
    rickRollCount += 1
    if (rickRollCount == 1) {
        const para1 = document.createElement("p")
        const para2 = document.createElement("p")
        const txt1 = document.createTextNode("Good Job! I indeed did not tell you to not press this one!")
        const txt2 = document.createTextNode("Press  It Again")
        para1.appendChild(txt1)
        para2.appendChild(txt2)
        p2t1.appendChild(para1)
        page2.appendChild(para2)

    } else {
        document.querySelector("#page2").style.animationPlayState = 'running'
    }
})

let c = 0
const p3t1 = document.getElementById("p3t1")
const p3b1 = document.getElementById("p3b1")
p3b1.addEventListener('click', function () {

    p3t1.innerHTML = ""
    p3b1.addEventListener('click', function () {
        c++
        document.querySelector("#p3b1").style.position = 'fixed'
        if (c % 2 != 0) {
            p3t1.innerHTML = p3t1.innerHTML + "<span>click-</span>"
        } else {
            p3t1.innerHTML = p3t1.innerHTML + "<span>clack-</span>"
        }
    })

})