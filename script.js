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
    case 4:
        return 'pop-shuv'
    break
    case 5:
        return 'front-shuv';
    break;
    case 6:
        return '360 flip';
    break;
    case 7:
        return 'laser flip';
        break;
    case 8:
        return 'frontside 180 ollie';
    break;
    case 9: 
        return 'backside 180 ollie';
        break;
    case 10:
        return 'nollie';
        break;
    }
};

console.log(messageGenerator())
