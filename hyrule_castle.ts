import { log } from "console";
import { link, readlinkSync } from "fs";
const c = require("ansi-colors");

interface Entity {
  name: string;
  strenght: number;
  hp: number;
  hp_max: number;
}

let Player: Entity = {
  name: "Link",
  strenght: 15,
  hp: 60,
  hp_max: 60,
};

let Enemy: Entity = {
  name: "Bokoblin",
  strenght: 5,
  hp: 30,
  hp_max: 30,
};

let Boss: Entity = {
  name: "Ganon",
  strenght: 20,
  hp: 150,
  hp_max: 150,
};

const fs = require("fs");

var readLineSync = require("readline-sync");

export const getInput = (question: string) =>
  readLineSync.question(`${question}\n`);

let j;
let i;

function displayHealthBar(charac: Entity) {
  let str = "";
  let str2 = "";
  for (let i = 0; i < charac.hp_max; i++) {
    if (i < charac.hp) str += "I";
    else str = "_";
  }

  console.log(str);
}

function startFight() {
  for (let etage = 0; etage <= 9 && Player.hp > 0; etage++) {
    Enemy.hp = Enemy.hp_max;
    console.log(`================== Fight ${etage + 1}===================`);
    console.log(c.red.bold(`A wild ${c.red.bold(Enemy.name)} appears.`));
    for (j = 0; Player.hp > 0 && Enemy.hp > 0; j++) {
      console.log(`${Enemy.name} HP: ${Enemy.hp}/${Enemy.hp_max}.`);
      displayHealthBar(Enemy);
      console.log(`${Player.name} HP: ${Player.hp}/${Player.hp_max}.`);
      displayHealthBar(Player);
      let choice = getInput("Heal ou Attack?");
      choice = choice.toLowerCase();

      if (choice == "attack") {
        Enemy.hp = Enemy.hp - Player.strenght;
        console.log(
          `Tu lui as ingligé ${Player.strenght} à Bokoblin.\nIl ne lui reste que ${Enemy.hp}`
        );
      } else if (choice == "heal") {
          Player.hp = Player.hp + Player.hp / 2;
          if (Player.hp > Player.hp_max) {
            console.log("tutu");
            Player.hp = Player.hp_max;
          }
        console.log(`Tu as maintenant ${Player.hp} vie.`);
      }

      if (Enemy.hp > 0) {
        Player.hp = Player.hp - Enemy.strenght;
        console.log(
          `Bokoblin t'as infligé ${Enemy.strenght}.\nIl te reste ${Player.hp}.`
        );
      }
      if (Enemy.hp <= 0) {
        console.log("Bokoblin est mort.");
        break;
      } else if (Player.hp <= 0) {
        console.log("Tu es mort, retente ta chance.");
        process.exit;
      }
    }
  }
}
startFight();

function bossFight() {
  console.log(
    "Tu as vaincu mes sbires Links.\nPar conséquent tu subiras mon couroux."
  );
  for (let etage = 1; etage == 1 && Player.hp > 0; etage++) {
    for (i = 0; Player.hp > 0 && Boss.hp > 0; i++) {
      console.log(`${Boss.name} HP: ${Boss.hp}/${Boss.hp_max}.`);
      let choice = getInput("Heal ou Attack?");
      choice = choice.toLowerCase();

        if (choice == "attack") {
            Boss.hp = Boss.hp - Player.strenght;
            console.log(
                `Tu lui as ingligé ${Player.strenght} à Bokoblin.\nIl ne lui reste que ${Boss.hp}`
            );
        }  if (choice == "heal") {
            Player.hp = Player.hp_max + (Player.hp_max / 2);
            if (Player.hp > Player.hp_max) {
              Player.hp = Player.hp_max
            }
            console.log(`Tu as maintenant ${Player.hp} vie.`);
            
        }
        

      if (Boss.hp > 0) {
        Player.hp = Player.hp - Boss.strenght;
        console.log(
          `Ganon t'as infligé ${Boss.strenght}. Il te reste ${Boss.hp}.`
        );
      }
      if (Boss.hp <= 0) {
        console.log("Ganon est mort.");
        console.log("Fatality");
        console.log(
          "Félicitation Links tu as vaincu Ganon et sauver Zelda , peut-être que pour une fois tu pourras la toucher."
        );
        break;
      } else if (Player.hp <= 0) {
          
    console.log ("________");
    console.log ( "/  _____/_____    _____   ____     _______  __ ___________ ");
    console.log ("  /   \\  ___\\__  \  /     \\_/ __ \\   /  _ \\  \/ // __ \\_  __ \"");
    console.log ("  \\    \\_\\  \\/ __ \\|  Y Y  \\  ___/  (  <_> )   /\\  ___/|  | \\/ " );                                                  
    console.log ("       \______  (____  /__|_|  /\\___  >  \\____/ \\_/  \\___  >__|   ")     
         
          
          
          
        process.exit;
      }
    }
  }
}

// bossFight();
// import { log } from "console";
// import { link, readlinkSync } from "fs";
// const c = require("ansi-colors");

// interface Entity {
//   name: string;
//   strenght: number;
//   hp: number;
//   hp_max: number;
// }

// let Player: Entity = {
//   name: "Link",
//   strenght: 15,
//   hp: 60,
//   hp_max: 60,
// };

// let Enemy: Entity = {
//   name: "Bokoblin",
//   strenght: 5,
//   hp: 30,
//   hp_max: 30,
// };

// let Boss: Entity = {
//   name: "Ganon",
//   strenght: 20,
//   hp: 150,
//   hp_max: 150,
// };

// const fs = require("fs");

// var readLineSync = require("readline-sync");

// export const getInput = (question: string) =>
//   readLineSync.question(`${question}\n`);

// let j;
// let i;

// function displayHealthBar(charac: Entity) {
//   let str = "";
//   let str2 = "";
//   for (let i = 0; i < charac.hp_max; i++) {
//     if (i < charac.hp) str += "I";
//     else str = "_";
//   }

//   console.log(str);
// }

// function startFight() {
//   for (let etage = 0; etage <= 9 && Player.hp > 0; etage++) {
//     Enemy.hp = Enemy.hp_max;
//     console.log(`================== Fight ${etage + 1}===================`);
//     console.log(c.red.bold(`A wild ${c.red.bold(Enemy.name)} appears.`));
//     for (j = 0; Player.hp > 0 && Enemy.hp > 0; j++) {
//       console.log(`${Enemy.name} HP: ${Enemy.hp}/${Enemy.hp_max}.`);
//       displayHealthBar(Enemy);
//       console.log(`${Player.name} HP: ${Player.hp}/${Player.hp_max}.`);
//       displayHealthBar(Player);
//       let choice = getInput("Heal ou Attack?");
//       choice = choice.toLowerCase();

//       if (choice == "attack") {
//         Enemy.hp = Enemy.hp - Player.strenght;
//         console.log(
//           `Tu lui as ingligé ${Player.strenght} à Bokoblin.\nIl ne lui reste que ${Enemy.hp}`
//         );
//       } else if (choice == "heal") {
//         Player.hp = Player.hp + Player.hp / 2;
//         if (Player.hp > Player.hp_max) {
//           console.log("tutu");
//           Player.hp = Player.hp_max;
//         }
//         console.log(`Tu as maintenant ${Player.hp} vie.`);
//       }

//       if (Enemy.hp > 0) {
//         Player.hp = Player.hp - Enemy.strenght;
//         console.log(
//           `Bokoblin t'as infligé ${Enemy.strenght}.\nIl te reste ${Player.hp}.`
//         );
//       }
//       if (Enemy.hp <= 0) {
//         console.log("Bokoblin est mort.");
//         break;
//       } else if (Player.hp <= 0) {
//         console.log("Tu es mort, retente ta chance.");
//         process.exit;
//       }
//     }
//   }
// }
// startFight();

// function bossFight() {
//   console.log(
//     "Tu as vaincu mes sbires Links.\nPar conséquent tu subiras mon couroux."
//   );
//   for (let etage = 1; etage == 1 && Player.hp > 0; etage++) {
//     for (i = 0; Player.hp > 0 && Boss.hp > 0; i++) {
//       console.log(`${Boss.name} HP: ${Boss.hp}/${Boss.hp_max}.`);
//       let choice = getInput("Heal ou Attack?");
//       choice = choice.toLowerCase();

//       if (choice == "attack") {
//         Boss.hp = Boss.hp - Player.strenght;
//         console.log(
//           `Tu lui as ingligé ${Player.strenght} à Bokoblin.\nIl ne lui reste que ${Boss.hp}`
//         );
//       }
//       if (choice == "heal") {
//         Player.hp = Player.hp_max + Player.hp_max / 2;
//         if (Player.hp > Player.hp_max) {
//           Player.hp = Player.hp_max;
//         }
//         console.log(`Tu as maintenant ${Player.hp} vie.`);
//       }

//       if (Boss.hp > 0) {
//         Player.hp = Player.hp - Boss.strenght;
//         console.log(
//           `Ganon t'as infligé ${Boss.strenght}. Il te reste ${Boss.hp}.`
//         );
//       }
//       if (Boss.hp <= 0) {
//         console.log("Ganon est mort.");
//         console.log("Fatality");
//         console.log(
//           "Félicitation Links tu as vaincu Ganon et sauver Zelda , peut-être que pour une fois tu pourras la toucher."
//         );
//         break;
//       } else if (Player.hp <= 0) {
//         console.log("________");
//         console.log(
//           "/  _____/_____    _____   ____     _______  __ ___________ "
//         );
//         console.log(
//           '  /   \\  ___\\__    /     \\_/ __ \\   /  _ \\  / // __ \\_  __ "'
//         );
//         console.log(
//           "  \\    \\_\\  \\/ __ \\|  Y Y  \\  ___/  (  <_> )   /\\  ___/|  | \\/ "
//         );
//         console.log(
//           "       ______  (____  /__|_|  /\\___  >  \\____/ \\_/  \\___  >__|   "
//         );

//         process.exit;
//       }
//     }
//   }
// }

// bossFight();
