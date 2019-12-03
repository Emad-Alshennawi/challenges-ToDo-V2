//challenge 1
var myName = "emad",

    myIntrest = "football",

    myHobby = "read",

    awesomeMessage = "hi, my name is: " + myName + ". I love: " + myIntrest + ". In my spare time,  I like to: " + myHobby + ".";

console.log(awesomeMessage);

//challenge 2
var celsius = 12,

    fahrenheit = celsius*1.8+32+" Fe";

console.log(fahrenheit);

//challenge 3

function animals(animalEating) {
  if (animalEating == "eatPlants") {

         console.log("herbivore");
       } else if (animalEating == "eatAnimals") {

        console.log("carnivore");
      } else if (animalEating == "eatPlantsAndAnimals") {

        console.log("omnivore");
      } else {
        console.log("undefined");
  }
};
animals("eatAnimals");

//challenge 4
var x = 1;
for (i = 12; i>= 1; i-- ) {
      x = i*x
}
console.log("the solution of !12 is : "+ x);

//challenge 5
function laugh(num) {
    notSmile = ""
    smile = "ha";
    for (i = 1; i <num; i++) {
      notSmile = notSmile + smile
    }
    return notSmile;
}
console.log(laugh(5));

//challenge 6
function buildTriangle(width) {
  var triangle = [ ];
  for (var i = 1; i < width; i++) {
    triangle.push("*");
    triangle.toString();
    console.log(triangle.join(""));
  }
};
buildTriangle(11);

//challenge 7
var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4, 19, 300, 3775, 299, 36, 209, 148, 169, 299, 6, 109, 20, 58, 139, 59, 3, 1, 139];
for (var i = 0; i < test.length; i++) {
      if (test[i]%3==0) {
        test[i] = test[i] + 100
      }
}
console.log(test);

//challenge 8
var facebookProfile = {
  myName:"emad",
  numOfFriends: 25,
  messages:["how are you", "are you here", "thank you"],
  postMessage(message){
    this.messages.push(message)
  },
  deleteMessage(index){
    this.messages.splice(index,2,)
  },
  addFriend(){
    this.numOfFriends++;
  },
  removeFriend(){
    this.numOfFriends--;
  }
}

facebookProfile.postMessage("where are you now");
facebookProfile.deleteMessage(1);
facebookProfile.addFriend();
facebookProfile.removeFriend();

console.log(facebookProfile);

//challenge 9
function convertToRoman(num) {
  var result = "",
      decimal = [1 , 5 , 10 , 50 , 100],
      roman = ["I", "V", "X", "L", "C"];
      for (i = 0; i < decimal.length; i++) {
        while (num%decimal[i] < num) {
          result += roman[i];
          num -= decimal[i];
        };
        return result;
      };
}

console.log(convertToRoman(10));
