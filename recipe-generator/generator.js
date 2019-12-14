function myFunction() {

    var data = null;
    var displayRecipe = document.getElementById('displayRecipe');

    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var myData = JSON.parse(this.responseText);
            renderHTML(myData);
        }
    }

    xhr.open("GET", "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=1&tags=dinner", true);
    xhr.setRequestHeader("x-rapidapi-host", "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "6ab7c45be7mshed5d31203aa41afp19827ajsn457ed009a81c");

    xhr.send(data);

    

    

    //add html to page
    function renderHTML(data) {
        //create a variable for an empty string
        var htmlString = "";
        var storedObject = data.recipes[0].id;
    
        htmlString += "<div class='container'><h3>" + data.recipes[0].title + "</h3>";
        
        htmlString += "<p><strong>Prep Time: </strong>" + data.recipes[0].preparationMinutes + " minutes</p>";
        htmlString += "<p><strong>Cook Time: </strong>" + data.recipes[0].cookingMinutes + " minutes</p>";
        htmlString += "<p><strong>Yield: </strong>" + data.recipes[0].servings + " servings</p>";
        htmlString += "<div class='heartOnImg' onclick='storeRecipe(recipe)'><div class='heart'><img src='save-file.svg' height='30px' width='30px' title='Save Recipe'></div>";
        htmlString += "<img class='recipeImage' src=" + data.recipes[0].image + "></div>";
        htmlString += "<h4>Ingredients</h4>";

        for (i = 0; i < data.recipes[0].extendedIngredients.length; i++){
            htmlString += "<ul>";
            htmlString += "<li>"; 
            htmlString += data.recipes[0].extendedIngredients[i].original;
            htmlString += "</li>"; 
            htmlString += "</ul>";
        }
        
        htmlString += "<h4>Instructions</h4>";
        htmlString += "<p>" + data.recipes[0].instructions + "</p></div>";
    
        //target empty div
        displayRecipe.insertAdjacentHTML('afterbegin', htmlString)

        
        var recipe = localStorage.setItem(data.recipes[0].title, storedObject);
  
  }
}