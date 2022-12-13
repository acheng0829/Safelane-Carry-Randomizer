let pos1Heroes = ['Alchemist', 'Anti-Mage', 'Bloodseeker', 'Broodmother', 'Chaos Knight', 'Clinkz', 'Dragon Knight', 'Drow Ranger', 
'Ember Spirit', 'Huskar', 'Gyrocopter', 'Faceless Void', 'Juggernaut', 'Kunkka', 'Legion Commander', 'Lifestealer', 'Luna', 'Lycan',
'Lone Druid', 'Medusa', 'Meepo', 'Morphling', 'Monkey King', 'Naga Siren', 'Phantom Lancer', 'Phantom Assassin', 'Riki',
'Spectre', 'Sniper', 'Slark', 'Sven', 'Templar Assassin', 'Terrorblade', 'Tiny', 'Troll Warlord', 'Ursa', 'Weaver', 'Wraith King'];

displayPos1List();
getRandomCarry();


function displayPos1List() {
  let list = document.getElementById("pos1List");

  for(let i=0; i<pos1Heroes.length; i++) {
    console.log(pos1Heroes[i]);
    let hero = document.createElement("hero");
    hero.innerText = pos1Heroes[i];
    list.appendChild(hero);
  }
}
  
function getRandomCarry() {
   let num = Math.floor(Math.random() * pos1Heroes.length) + 1;
   let d = document.getElementById("hero");
   d.innerHTML = pos1Heroes[num-1];
}