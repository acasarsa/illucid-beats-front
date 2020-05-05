// function makeCanvas() {
//     let canvas = document.getElementsByTagName("canvas")[0]
//     let ctx = canvas.getContext('2d')
//     console.log(canvas)
// }

function addBackground(){
    let bg=document.querySelector(".background-animation")
    let img= document.createElement("div")
    
    img.innerHTML=`
        <div class="container" >

        <div class="campfire-wrapper">
        <div class="tree-container-back">
            <div class="tree-8"></div>
            <div class="tree-9"></div>
            <div class="tree-10"></div>
        </div>
        <div class="rock-container">
            <div class="rock-big"></div>
            <div class="rock-small">
                <div class="rock-1"></div>
                <div class="rock-2"></div>
                <div class="rock-3"></div>
                <div class="rock-4"></div>
            </div>
        </div>
        <div class="smoke-container">
            <svg>
            <path d="M 150 0 Q 200 100 100 250 C 0 450 120 400 50 600  " />
        </svg>
            <div class="fire-container">

                <div class="flame-1"></div>
                <div class="flame-2"></div>
                <div class="flame-3"></div>
            </div>
        </div>
        <div class="tree-container-front">
            <div class="tree-1"></div>
            <div class="tree-2"></div>
            <div class="tree-3"></div>
            <div class="tree-4"></div>
            <div class="tree-5"></div>
            <div class="tree-6"></div>
            <div class="tree-7"></div>
        </div>
    </div> 
        `
    bg.appendChild(img)

}
// requestAnimationFrame(addBackground);


// function togglButton () {
    // let buttonBar= document.querySelector(".button-bar")
    // const toggle = document.createElement("button")
    // toggle.textContent = "Night Mode On"
    //   console.log( buttonBar)
    // toggle.addEventListener('click', (e) => {
  
      
  
    //   if (toggle.id === "background-toggle-day") {
    //     body.className = "body-night"
    //     canvas.id = "my-canvas-night"
    //     toggle.textContent = "Night Mode On"
    //     toggle.id = 'background-toggle-night'
        
    //   } else if (toggle.id === "background-toggle-night") {
        
    //     body.className = "body-day" // why is this super slow? 
    //     canvas.id = "my-canvas-day"
    //     toggle.textContent = "Day Mode On"
    //     toggle.id = 'background-toggle-day'
    //   } 
    // })
//   }