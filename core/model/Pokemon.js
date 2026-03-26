class Pokemon{
    constructor(pokedexID, name, pokemonType){
        this.pokedexID = pokedexID;
        this.name = name;
        this.pokemonType = pokemonType;
        this.gender = "";
        this.stats = null; // json, individual fields, class  object
        this.img = "";

    }

    getID(){
        return this.pokedexID;
    }
}

export default Pokemon;