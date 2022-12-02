let stance = ['Ollie' , 'Switch ollie' , 'Fakie ollie' , 'Nollie']
let rotation = ['' , '180' , '360']
let flip = ['Heel flip', 'Kick flip']
let boardRotation = ['' , '180' , '360']

function ranNumGenerator(arr){
    let num = Math.floor(Math.random() * arr.length);
    return arr[num]
}

function messageGenerator(){
     let trick = ranNumGenerator(rotation) + ' ' + ranNumGenerator(stance) + ', ' + ranNumGenerator(boardRotation) + ' ' + ranNumGenerator(flip);
     return trick.toString();
    }


function trickMessage(){
    return document.getElementById('trick').innerHTML = messageGenerator();
}

