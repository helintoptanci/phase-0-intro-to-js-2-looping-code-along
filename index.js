// Code your solutions in this file
/* for (let age= 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
}
const gifts= ["teddy bear", "drone", "doll"];
function wrapGifts(gifts) {
    for (let i= 0; i< gifts.lenght; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }
    return gifts;
}
wrapGifts(gifts); */


  function writeCards(names, event) {
    let messages = []
    for (let i = 0; i < names.length; i++) {
      messages.push("Thank you, " + names[i] + " for the wonderful " + event + " gift!")
    }
    return messages;
  }
  console.log(writeCards(["Charlie", "Samip"], "birthday"));

  let countdown = 10;
while (countdown > 0){
    countdown--;
    console.log(countdown);
}
  