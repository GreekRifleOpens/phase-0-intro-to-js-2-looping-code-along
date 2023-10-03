// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
    
    return gifts;
}

 const names = (["Charlie", "Samip", "Ali"], "birthday");
 const event = gifts;
function writeCards(names, event) {
    let thankYouCards = []
    for (let i = 0; i < names.length; i++) {
        thankYouCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }

    return thankYouCards;
}

function countDown() {
    let count = 10;
    while (count >= 0) {
        console.log(count--);
    }
}
countDown();