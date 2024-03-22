import { Link } from "./link";

/*function defineCharacters(player: string, monster: string) {
  console.log("Hyrule Castle");
  console.log(`You choose ${player}`);

  let character;
  let enemy;

  if (player.toLowerCase() === "link") {
    console.log("You choose Link.");
    character = new Link("Link", 60, 15);
    enemy = { name: "Bokoblin", maxHP: 30, currentHP: 30, str: 5 };
  } else {
    console.log("Sorry bro, it's gonna be Link.");
    character = new Link("Link", 60, 15);
    enemy = { name: "Bokoblin", maxHP: 30, currentHP: 30, str: 5 };
  }

  startFight(character, enemy);
}

function startFight(character: any, enemy: any) {
  console.log(`A wild ${enemy.name} appears!`);
  console.log(`${enemy.name} HP: ${enemy.currentHP}/${enemy.maxHP}`);

  while (character.currentHP > 0 && enemy.currentHP > 0) {
    let action = prompt("Choose your action: Attack or Heal").toLowerCase();

    if (action === "attack") {
      attack(character, enemy);
    } else if (action === "heal") {
      heal(character);
    } else {
      console.log("Invalid action! Choose Attack or Heal.");
      continue;
    }

    // Enemy's turn
    enemyAttack(character, enemy);

    // Check if character is defeated
    if (character.currentHP <= 0) {
      console.log("Game over! You were defeated.");
      break;
    }
  }

  if (enemy.currentHP <= 0) {
    console.log(`You defeated ${enemy.name}!`);
  }
}

function attack(attacker: any, target: any) {
  let damage = attacker.str;
  target.currentHP -= damage;
  console.log(`${attacker.name} dealt ${damage} damage to ${target.name}.`);
}

function heal(character: any) {
  let healing = character.maxHP / 2;
  character.currentHP = Math.min(
    character.currentHP + healing,
    character.maxHP
  );
  console.log(`${character.name} healed for ${healing} HP.`);
}

function enemyAttack(character: any, enemy: any) {
  let damage = enemy.str;
  character.currentHP -= damage;
  console.log(`${enemy.name} dealt ${damage} damage to ${character.name}.`);
}

defineCharacters("Link", "Bokoblin");*/
