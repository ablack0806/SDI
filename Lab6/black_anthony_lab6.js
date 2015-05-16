//alert("JavaScript works!");

//Anthony Black
//SDI 1505



//my function


function listOfSuperHeroes() {

    var listOfSuperHeroes = ["Iron Man", "Spider-man", "Hulk", "Hancock"];

    var secretIdentities = ["Tony Starks", "Peter Parker", "Bruce Banner", "Hancock"];

    for (var i = 0; i < listOfSuperHeroes.length; i++) {

        console.log(listOfSuperHeroes[i] + " is NOT so secretly " + secretIdentities [i]);


    }
    listOfSuperHeroes.push("Tony Black", "Jackie Chan", "Darth Vader");
    secretIdentities.push("A black guy", "An archeologist", "Some evil dude");
    for (var i = 0; i < listOfSuperHeroes.length; i++){
        console.log(listOfSuperHeroes[i] + " is NOT so secretly " + secretIdentities [i]);

    }
}
listOfSuperHeroes();


