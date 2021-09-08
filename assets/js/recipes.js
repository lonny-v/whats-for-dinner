// Application ID
// 6ac6db88

// Application Keys
// fb6969ade5b94c3dbb0367095699768b
//'https://api.edamam.com/api/recipes/v2?type=public&q='+ inputValue +'&app_id=6ac6db88&app_key=fb6969ade5b94c3dbb0367095699768b&random=true'


var button = document.getElementById('btn');
var inputValue = document.getElementById('inputValue');
var recipeName = document.getElementById('recipeName');
var recipeImage = document.getElementById('recipeImage');
var ingredientList = document.getElementById('ingredients');
var nutrition = document.getElementById('nutrition');
var cuisineType = document.getElementById('cuisineType');

button.addEventListener('click', function () {

    var inputValue = document.getElementById('inputValue').value;
    fetch('https://api.edamam.com/api/recipes/v2?type=public&q=' + inputValue + '&app_id=6ac6db88&app_key=fb6969ade5b94c3dbb0367095699768b&random=true')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            var recipesNameValue = data['hits'][0]['recipe']['label'];
            //var recipeImageValue = data['hits'][0]['recipe']['image'];
            var ingredientListValue = data['hits'][0]['recipe']['ingredientLines']; //NOT TO BE CONFUSED WITH INGREDIENTS!!
            var cuisineTypeValue = "Cuisine type: " + data['hits'][0]['recipe']['cuisineType'];
            var nutritionValue = data['hits'][0]['recipe']['totalDaily'];


            recipeName.innerText = recipesNameValue;
            //recipeImage.setAttribute(recipeImageValue);
            ingredientList.innerText = ingredientListValue;//join(<br/>)
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
            nutrition.innerHTML = nutritionValue;

        })
    //     .catch(err => alert('Error' + err))
})
