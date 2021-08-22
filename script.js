const string1 = document.querySelector(".string1")
const buttonKali  = document.querySelector(".kali")
const buttonTambah = document.querySelector(".tambah")
const string2 = document.querySelector(".string2")
const string3 = document.querySelector(".string3")
const currentNum = document.querySelector(".curr-num")
const targetNum = document.querySelector(".target-num")
const totalScore = document.querySelector(".score")
const startBtn = document.querySelector(".start-btn")
const pauseBtn = document.querySelector(".pause-btn")
const resetBtn = document.querySelector(".reset-btn")

startBtn.addEventListener("click", function(){
        let stream1 = runningNumber("multiple", 1000, string1)
        let stream2 = runningNumber("addition", 1000, string2)
        let stream3 = runningNumber("substract", 1000, string3) 
})
resetBtn.addEventListener("click", function(){
   location.reload()
})
let currNum = 0
let score = 0
function buttonHandler(name, operator){
    let element = document.getElementsByClassName(name)
    if(element[9] != undefined){
        let angka = element[9].textContent
        if(!isNaN(angka)){
        element[9].classList.add("span-green")
        angka =  parseFloat(angka)
        switch(operator){
            case '*' : currNum = currNum * angka 
                        break
            case '+' : currNum = currNum + angka 
                        break
            case '-' : currNum = currNum - angka
                        break
        }
            
        }else{
            element[9].classList.add("span-red")
        }
        
    }
}
function randomNum(number){
    return Math.floor((Math.random() * number) +1)
}
function runningNumber(name, speed, parent){
        let counter = 0
        let target = randomNum(99)
        targetNum.innerHTML = target 
        let run = setInterval(function(){
            counter++
            let random = randomNum(30)
            let span = document.createElement("span")
            span.innerHTML = (random >= 10) ? "-" : random
            span.setAttribute("class", name)
            if(counter == 1){
                parent.appendChild(span)
            }else{
                parent.insertBefore(span, parent.childNodes[0])
            }
            let el = document.getElementsByClassName(name)
            if(el.length >= 10){
                el[9].classList.add("span-yellow")
                if(el[10] != undefined){
                    el[10].remove()
                }
                
            }
            if(target == currNum){
                score++
                target = randomNum(99)
                currNum = 0
                targetNum.innerHTML = target
                currentNum.innerHTML = currNum
                totalScore.innerHTML = score
            }else{
                currentNum.innerHTML = currNum
            }
        }, speed)
        pauseBtn.addEventListener("click", function(e){
            clearInterval(run)
         })
}
