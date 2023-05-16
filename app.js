let player = {
  name: "DongGyu",
  age: 32,
};

const GetPlayer = {
  names: function (str) {
    console.log("My Name Is " + str);
  },
  ages: function (str) {
    console.log("I'm " + str + " Years Old");
  },
  krage: function (age) {
    return age + 2;
  },
};
GetPlayer.names(player.name);
GetPlayer.ages(player.age);
const korage = GetPlayer.krage(30);
console.log(korage);

// const userName = prompt("What's Your Name?");
// const userAge = parseInt(prompt("How Old Are You?"));
// console.log(isNaN(userAge));
// if (isNaN(userAge)) {
//   alert("나이가 잘못 되었습니다.");
// } else if (userAge === 100) {
//   alert("wise");
// }
// console.log(userName);
// console.log(userAge);

const title = document.getElementById("title");
console.dir(title);

title.innerText = "HI";

const hellos = document.getElementsByClassName("hh");
console.log(hellos);

const htitle = document.querySelector(".hclass h1");
console.log(htitle);
