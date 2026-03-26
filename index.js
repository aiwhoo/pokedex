import Pokemon from './core/model/Pokemon.js'
import LinkedList from './core/datastructure/linkedlist.js'

let lickitung = new Pokemon(108, "lickitung","normal");
let pikachu = new Pokemon(25, "pikachu","electric");
let gengar = new Pokemon(94, "gengar","ghost");
let charmander = new Pokemon(4, "charmander", "fire");
let bulbasaur = new Pokemon(1, "bulbasaur","grass");
let monferno = new Pokemon(391, "monferno","fire");
let satalinachu = new Pokemon(311, "satalinachu","psychic");
let anisha = new Pokemon(67, "anisha","fairy");
let lopunny = new Pokemon(428, "lopunny","normal");
let mimikyu = new Pokemon(778, "mimikyu","fairy");
let litten = new Pokemon(725, "litten","fire");
let infernape = new Pokemon(392, "infernape","fire");

let pokedexJSON = {108: lickitung, 25:pikachu, 94:gengar, 4:charmander, 1:bulbasaur, 391: monferno, 311:satalinachu, 67:anisha, 428:lopunny, 778:mimikyu,725:litten, 392:infernape  };
for (let pokemonId in pokedexJSON) {
    console.log(pokedexJSON[pokemonId]);
}
//console.log(pokedexJSON)
console.log(Object.keys(pokedexJSON).length)

let pokedexLinkedList = new LinkedList();
pokedexLinkedList.print();
pokedexLinkedList.addBack(anisha);
pokedexLinkedList.print();
pokedexLinkedList.addBack(satalinachu);
pokedexLinkedList.print();
pokedexLinkedList.printRecursive();

console.log("doing add in order")

pokedexLinkedList.addInOrder(pikachu);
pokedexLinkedList.addInOrder(lickitung);
pokedexLinkedList.addInOrder(litten);
pokedexLinkedList.addInOrder(infernape);
pokedexLinkedList.addInOrder(mimikyu);
pokedexLinkedList.addInOrder(bulbasaur);

pokedexLinkedList.printRecursive();
/*
console.log(pokedexLinkedList.length);

pokedexLinkedList.addFront(lickitung);
console.log(pokedexLinkedList.length);
*/