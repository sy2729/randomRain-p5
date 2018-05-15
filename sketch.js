var x, y;
var initialHeight = 80;
var randomScale = 10;
var dx, dy, dc;
var collection = [];
var max = 20;
var rainLength = 40;

function setup() {
    createCanvas(windowWidth, windowHeight);
    // createCanvas(displayWidth, displayHeight);
    background(0)
    y = initialHeight;
    dx = Math.random() * windowWidth;
    dy = 10;
    dc = 10;

    // var max = 20;
    // for(let i = 0; i < max; i++) {
    //     var width = Math.random() * 40;
    //     var newSquare = new square(Math.random() * windowWidth, 0, width, width, Math.random() * 3);
    //     collection.push(newSquare);
    // }
    // console.log(collection)
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

// let colors = [color('#0f0'), color(255, 204, 0), color('rgb(0,0,255)'), color('hsl(160, 100%, 50%)')]

// function draw() {
//     background(0);
//     var num = Math.floor(windowWidth / 55)
//     var currentPos = Math.floor(mouseX / 55)
//     var currentBarHeight = windowHeight - mouseY;
//     rect(currentPos * 55, windowHeight - currentBarHeight, 55, currentBarHeight, 3);
//     for (let i = 0; i < currentPos; i++) {
//         rect(i * 55, windowHeight - (currentBarHeight - 20 * (currentPos - i)), 55, currentBarHeight - 2 * (currentPos - i), 3);
//     }
//     for (let i = currentPos + 1; i < num; i++) {
//         rect(i * 55, windowHeight - (currentBarHeight - 20 * (i - currentPos)), 55, currentBarHeight - 2 * (i - currentPos), 3);
//     }
// }

function draw() {
    background(0);
    ellipse(dx, dy + dc, 3, rainLength, 5);
    if (dy + dc - rainLength/2 < windowHeight) {
        dc = dc + 3;
    }else {
        dc = 0;
        dx = Math.random() * windowWidth;
        }
    
    
    // var max = 20;
    // for (let i = 0; i < max; i++) {
    //     var width = Math.random() * 40;
        // var newSquare = new square(100, 0, 20, 20, 3);
        // collection.push(newSquare);
    // }
        // collection.forEach((i)=> i.move());

}



//  function square (x, y, width, height, speed) {
//     this.x = x;
//     this.y = y;
//     this.width = width;
//     this.height = height;
//     this.speed = speed;
//     this.currentShape = rect(this.x, this.y + dc, this.width, this.height, 3)
//     this.move = function() {
//         if (this.y + dc - 10 < windowHeight) {
//             dc = dc + 0.1;
//         } else {
//             dc = 0;
//             x = Math.random() * windowWidth;
//         }
//         // console.log(this.y + dc)
//     }
// }