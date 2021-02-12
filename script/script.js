let defaultRecipe = [3, 1.5, .5, 1.5]

const recipeRegex = /^\d$/;

function logIn(){
    if (document.getElementById("logUser").value !=="" && document.getElementById("logPass").value !=="" ){
        window.location.assign(`recipe.html`)
    }
    else{alert("Enter a username and password")}
}


function menu(value) {
    window.location.assign(`${value}.html`);
}

function recipe(loaves){
    if (recipeRegex.test(loaves)){
    let newRecipe=[]
  
    for(i=0;i<defaultRecipe.length;i++){
        newRecipe.push(loaves*defaultRecipe[i])
    }
    for(i=0;i<newRecipe.length;i++){
        document.getElementById([i]).innerHTML = newRecipe[i];
    }


}
else{alert("Enter a valid number!")}
}

