//API -> https://pokeapi.co/api/v2/pokemon/ditto

$(document).ready(() => {

    function createCard(id, name, img){
        let text = `<div class="card m-2" style="width: 18rem;" id="karticka">
        <img src="${img}" class="card-img-top" alt="${name}">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${id}</li>
        </ul>`;
      return text;
    }


    function getPokemonName(pokemonId){
        $.ajax({
            url: `https://pokeapi.co/api/v2/pokemon/${pokemonId}`,
            type: "GET",
            data: {
                pokemonId,
            },
            success: function (result) {
                console.log(result);
                $("#searchCard").append(createCard(result.id, result.name, result.sprites.other.dream_world.front_default));
            },
            error: function (error) {
                console.log(error);
            },
        });
    }

    

    
    
    $("#searchBtn").on("click", function(){
        $("#karticka").remove();
        let nameOfPokemon = $("#pokeSearch").val();
        let tolwer = nameOfPokemon.toLowerCase()
        getPokemonName(tolwer);
    });

});