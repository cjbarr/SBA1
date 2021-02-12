let defaultRecipe = [3, 1.5, .5, 1.5]

const recipeRegex = /^\d$/;

function logIn(){
    validateEmail(document.getElementById("logUser").value)
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

