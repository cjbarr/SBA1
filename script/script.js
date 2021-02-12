let defaultRecipe = [3, 1.5, .5, 1.5]


function menu(value) {
    window.location.assign(`${value}.html`);
}

function recipe(value){
    let newRecipe=[]
  {
    for(i=0;i<defaultRecipe.length;i++){
        newRecipe.push(value*defaultRecipe[i])
    }
    for(i=0;i<newRecipe.length;i++){
        document.getElementById([i]).innerHTML = newRecipe[i];
    }
}

}