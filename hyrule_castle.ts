import { log } from "console";
import { link, readlinkSync } from "fs";

interface Entity {
    name : string,
    strenght: number,
    hp : number,
    hp_max : number,
}

let Player: Entity = {
    name: "Link",
    strenght: 15,
    hp: 60,
    hp_max: 60
};

let Enemy: Entity = {
    name: "Bokoblin",
    strenght: 5,
    hp: 30,
    hp_max: 30
};

let Boss: Entity = {
    name: "Ganon",
    strenght: 20,
    hp: 150,
    hp_max: 150
};

const fs = require('fs');

var readLineSync = require ('readline-sync')

export const getInput = (question: string) => readLineSync.question(`${question}\n`);

let j


function startFight () {
    for (let etage = 0; etage < 10 && Player.hp > 0; etage++) {
        Enemy.hp = Enemy.hp_max
        console.log(`================== Fight ${etage +1}===================`)
        console.log(`A wild ${Enemy.name} appears.`);
        for (j = 0; Player.hp > 0 && Enemy.hp > 0; j++) {
            console.log(`${Enemy.name} HP: ${Enemy.hp}/${Enemy.hp_max}.`);
            let choice = getInput('Heal ou Attack?')
            choice = choice.toLowerCase();

            if (choice == 'attack') {
                 Enemy.hp = Enemy.hp - Player.strenght
                 console.log(`Tu lui as ingligé ${Player.strenght} à Bokoblin. Il ne lui reste que ${Enemy.hp}`)
                
            }
            else if (choice == "heal") {
               Player.hp = Player.hp + Player.hp / 2;
               console.log(`Tu as maintenant ${Player.hp} vie.`);
            }
            
             
            if (Enemy.hp > 0) {
                Player.hp = Player.hp - Enemy.strenght;
                console.log(`Bokoblin t'as infligé ${Enemy.strenght}. Il te reste ${Player.hp}`);
            }
            if (Enemy.hp <= 0) {
                console.log('Bokoblin est mort.');
                break
            }
           
        
            else (
                console.log('Tu es mort, retente ta chance.');
                 process.exit
                )
        }
          
            

    }
}
startFight();

function finalFight(params:type) {
    
}

 



// function definePlayer(player: any ) {
//     console.log("Hyrule Castle");
//     console.log(`You choose ${player}`);
   
// }  