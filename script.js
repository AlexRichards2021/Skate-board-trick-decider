let stance = ['Ollie' , 'Switch ollie' , 'Fakie ollie' , 'Nollie']
let rotation = ['' , '180' , '360']
let flip = ['Ollie','Heel flip', 'Kick flip']
let boardRotation = ['' , '180' , '360']

function ranNumGenerator(arr){
    let num = Math.floor(Math.random() * arr.length);
    return arr[num]
}
console.log(ranNumGenerator(stance))

function messageGenerator(){
     let trick = ranNumGenerator(rotation) + ' ' + ranNumGenerator(stance) + ', ' + ranNumGenerator(boardRotation) + ' ' + ranNumGenerator(flip);
    if(trick === 'nollie'){return 'nollie'}
    else{
     return trick.toString();}
    }


function trickMessage(){
    return document.getElementById('trick').innerHTML = messageGenerator();
}

