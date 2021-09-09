// Application ID
// 6ac6db88

// Application Keys
// fb6969ade5b94c3dbb0367095699768b
//'https://api.edamam.com/api/recipes/v2?type=public&q='+ inputValue +'&app_id=6ac6db88&app_key=fb6969ade5b94c3dbb0367095699768b&random=true'


var button = document.getElementById('btn');
var inputValue = document.getElementById('inputValue');
var recipeName = document.getElementById('recipeName');
var recipeImage = document.getElementById('recipes');
var ingredientList = document.getElementById('ingredients');
var nutrition = document.getElementById('nutrition');
var cuisineType = document.getElementById('cuisineType');
var instructions = document.getElementById('instructions');

var allIngredients = []

button.addEventListener('click', function () {
    //clearAllFields()
    var inputValue = document.getElementById('inputValue').value;
    fetch('https://api.edamam.com/api/recipes/v2?type=public&q=' + inputValue + '&app_id=6ac6db88&app_key=fb6969ade5b94c3dbb0367095699768b&random=true')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            var recipesNameValue = data['hits'][0]['recipe']['label'];
            var ingredientListValue = data['hits'][0]['recipe']['ingredientLines']; //NOT TO BE CONFUSED WITH INGREDIENTS!!
            var cuisineTypeValue = "Cuisine type: " + data['hits'][0]['recipe']['cuisineType'];
            var nutritionValue = data['hits'][0]['recipe']['totalDaily'];


            allIngredients.push(ingredientListValue)
            let txt = " ";
            allIngredients.forEach(displayIngredients)
            ingredientList.innerHTML = txt;
            function displayIngredients(value, index, array) {
                txt += value + "<br>"; 
            }


            recipeName.innerText = recipesNameValue;
            //recipeImage.setAttribute(recipeImageValue);

            var img = document.createElement('img');
            img.setAttribute('src', data['hits'][0]['recipe']['image']);
            recipeImage.appendChild(img)
            // var ingredients = data.list
            // var HTMLText = ""
            //var ingredientLines = data['hits'][0]['recipe']['ingredientLines']
            // for (let i = 0; i < ingredientLines.length; i = i + 20) {
            // for (let i = 0; i < ingredientLines.length; i = i++) {
            //     console.log(i)
            //     HTMLText += `<li id="ingredientList">
            //             <p>${ingredientList[i]}</p></li>`
            //             // <p>${ingredientList[i][0]}</p>
            //             // <p>${ingredientList[i][1]}</p>
            //             // <p>${ingredientList[i][2]}</p>
            //             // <p>${ingredientList[i][3]}</p>
            //             // <p>${ingredientList[i][4]}</p></li>`
            // }
            // console.log(HTMLText);
            // document.querySelector("#ingredients").innerText = HTMLText;
            cuisineType.innerText = cuisineTypeValue;
            nutrition.innerText = nutritionValue;

            var iframe = document.createElement('iframe');
            iframe.setAttribute('src', data['hits'][0]['recipe']['url']);
            iframe.setAttribute('height', 1000, 'width', 100)
            instructions.appendChild(iframe)

            //instructions.innerHTML = data['hits'][0]['recipe']['url'];

        })
    //     .catch(err => alert('Error' + err))
})

function clearAllFields(){
    inputValue.innerText="";
    recipesName.innerText="";
    ingredientList.innerText="";
    cuisineType.innerText="";
    nutrition.innerText="";
//     recipeImage.removeChild(img);
}