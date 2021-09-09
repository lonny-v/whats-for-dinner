var button = document.getElementById('btn');
var inputValue = document.getElementById('inputValue');
var recipeName = document.getElementById('recipeName');
var recipeImage = document.getElementById('recipes');
var ingredientList = document.getElementById('ingredients');
var nutrition = document.getElementById('nutrition');
var cuisineType = document.getElementById('cuisineType');
var instructions = document.getElementById('instructions');
var fortune = document.getElementById('fortune');
var fortuneCookie = document.getElementById('fortuneCookie')

//ARRAY TO HOLD INGREDIENTS, TO BE DISPLAYED AS A LIST
var allIngredients = []

//STARTS FUNCTION, USER INPUT NEEDED TO SEARCH FOR KEYWWORD
button.addEventListener('click', function () {
    var inputValue = document.getElementById('inputValue').value;
    fetch('https://api.edamam.com/api/recipes/v2?type=public&q=' + inputValue + '&app_id=6ac6db88&app_key=fb6969ade5b94c3dbb0367095699768b&random=true')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            var recipesNameValue = data['hits'][0]['recipe']['label'];
            var ingredientListValue = data['hits'][0]['recipe']['ingredientLines']; //NOT TO BE CONFUSED WITH INGREDIENTS!!
            var cuisineTypeValue = "Cuisine type: " + data['hits'][0]['recipe']['cuisineType'];
            var nutritionValue = data['hits'][0]['recipe']['totalDaily'];



            //DISPLAY RECIPE NAME
            recipeName.innerText = recipesNameValue;

            //DISPLAY RECIPE IMAGE
            var img = document.createElement('img');
            img.setAttribute('src', data['hits'][0]['recipe']['image']);
            // if(recipeImage.childNodes[0] !== null){
            //     recipeImage.lastElementChild.setAttribute('src', data['hits'][0]['recipe']['image'])}
            //     else {
            recipeImage.appendChild(img);
            //}


            //DISPLAY CUISINE TYPE IE. AMERICAN, CHINESE
            cuisineType.innerText = cuisineTypeValue;

            console.log(allIngredients, ingredientListValue)
            //DISPLAY INGREDIENTS
            allIngredients.push(ingredientListValue)
            let txt = "<ul>";
            for (let i = 0; i < ingredientListValue.length; i++) {
                txt += "<li>" + ingredientListValue[i] + "</li>";
            }
            ingredientList.innerHTML = txt + "</ul>";

            //DISPLAY PREPARATION INSTRUCTIONS ON HOST WEBSITE AS AN IFRAME
            var iframe = document.createElement('iframe');
            iframe.setAttribute('src', data['hits'][0]['recipe']['url']);
            iframe.setAttribute('height', 1000, 'width', 100)
            //var removeIframe = document.querySelector('iframe')
            if (instructions.childNodes[0] != null) {
                instructions.removeChild(instructions.childNodes[0])
            }
            instructions.appendChild(iframe)
        })
})

//DISPLAY FORTUNE
fortune.addEventListener('click', function () {
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(listFortune => {
            console.log(listFortune);
            var fortuneContent = listFortune['content']
            fortuneCookie.innerText = '"' + fortuneContent + '"';

        })
})