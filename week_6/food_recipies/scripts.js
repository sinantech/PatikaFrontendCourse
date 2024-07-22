document.addEventListener('DOMContentLoaded', () => {
    const addRecipeForm = document.getElementById('add-recipe-form');
    const recipeList = document.getElementById('recipe-list');
    const recipeDetail = document.getElementById('recipe-detail');
    const categoryList = document.getElementById('category-list');
    
    let recipes = JSON.parse(localStorage.getItem('recipes')) || [];

    if (recipeList) {
        displayRecipes(recipes);
    }

    if (categoryList) {
        displayCategories(recipes);
    }

    if (recipeDetail) {
        const urlParams = new URLSearchParams(window.location.search);
        const recipeId = urlParams.get('id');
        const recipe = recipes.find(r => r.id == recipeId);

        if (recipe) {
            displayRecipeDetail(recipe);
        }
    }

    if (addRecipeForm) {
        addRecipeForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const recipeTitle = document.getElementById('recipe-title').value;
            const recipeCategory = document.getElementById('recipe-category').value;
            const recipeIngredients = document.getElementById('recipe-ingredients').value;
            const recipeInstructions = document.getElementById('recipe-instructions').value;
            const recipeImage = document.getElementById('recipe-image').files[0];
            
            const newRecipe = {
                id: Date.now(),
                title: recipeTitle,
                category: recipeCategory,
                ingredients: recipeIngredients,
                instructions: recipeInstructions,
                image: recipeImage ? URL.createObjectURL(recipeImage) : 'default-image.jpg'
            };
            
            recipes.push(newRecipe);
            localStorage.setItem('recipes', JSON.stringify(recipes));
            
            displayRecipes(recipes);
            displayCategories(recipes);
            
            addRecipeForm.reset();
            window.location.href = 'index.html';
        });
    }
});

function displayRecipes(recipes) {
    const recipeList = document.getElementById('recipe-list');
    recipeList.innerHTML = '';

    recipes.forEach(recipe => {
        const recipeItem = document.createElement('article');
        recipeItem.className = 'bg-white shadow-md rounded p-4';
        
        recipeItem.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}" class="w-full h-48 object-cover rounded-t">
            <h3 class="text-xl font-bold mt-4">${recipe.title}</h3>
            <p class="text-gray-700 mt-2">${recipe.category}</p>
            <a href="recipe.html?id=${recipe.id}" class="text-blue-500 hover:underline mt-4 block">Tarife Git</a>
        `;
        
        recipeList.appendChild(recipeItem);
    });
}

function displayRecipeDetail(recipe) {
    const recipeDetail = document.getElementById('recipe-detail');
    
    recipeDetail.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.title}" class="w-full h-64 object-cover rounded-t mb-6">
        <h1 class="text-4xl font-bold mb-4 text-gray-800">${recipe.title}</h1>
        <p class="text-gray-600 mb-4">Kategori: <span class="font-semibold">${recipe.category}</span></p>
        
        <section class="mt-8">
            <h2 class="text-2xl font-bold mb-4">Malzemeler</h2>
            <ul class="list-disc list-inside">
                ${recipe.ingredients.split('\n').map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
        </section>
        
        <section class="mt-8">
            <h2 class="text-2xl font-bold mb-4">Talimatlar</h2>
            <ol class="list-decimal list-inside">
                ${recipe.instructions.split('\n').map(instruction => `<li>${instruction}</li>`).join('')}
            </ol>
        </section>
    `;
}

function displayCategories(recipes) {
    const categoryList = document.getElementById('category-list');
    categoryList.innerHTML = '';

    const categories = [...new Set(recipes.map(recipe => recipe.category))];

    categories.forEach(category => {
        const categoryItem = document.createElement('div');
        categoryItem.className = 'bg-white shadow-md rounded p-4';

        const categoryRecipes = recipes.filter(recipe => recipe.category === category);

        categoryItem.innerHTML = `
            <h3 class="text-xl font-bold mb-4">${category}</h3>
            <ul>
                ${categoryRecipes.map(recipe => `
                    <li class="mb-2">
                        <a href="recipe.html?id=${recipe.id}" class="text-blue-500 hover:underline">${recipe.title}</a>
                    </li>
                `).join('')}
            </ul>
        `;
        
        categoryList.appendChild(categoryItem);
    });
}
