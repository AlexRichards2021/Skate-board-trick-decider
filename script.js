function messageGenerator(){
    let num =  Math.floor(Math.random() *10);
    switch(num){
        case 0:
            return 'ollie';
            break;
    case 1: 
        return 'heelflip';
        break;
    case 2:
        return 'kickflip';
    break;
    case 3:
        return 'pop-shuv'
    break
    case 4:
        return 'front-shuv';
    break;
    case 5:
        return '360 flip';
    break;
    case 6:
        return 'laser flip';
        break;
    case 7:
        return 'frontside 180 ollie';
    break;
    case 8: 
        return 'backside 180 ollie';
        break;
    case 9:
        return 'nollie';
        break;
    }
};

function trickMessage(){
    return document.getElementById('trick').innerHTML = messageGenerator();
}
console.log(messageGenerator())
console.log(messageGenerator())
console.log(messageGenerator())
console.log(messageGenerator())
