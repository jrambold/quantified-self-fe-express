const baseURL = require('./qsAPI').baseURL()

const recipesAPIFetch = (id, method, body) => {
  return fetch(`${baseURL}/api/v1/foods/${id}/recipes`, {
    method: `${method}`,
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(body)
  })
}

const getRecipes = () => {
  var current_food = window.location.search.split('=')[1]
  recipesAPIFetch(current_food, 'GET')
    .then(response => handleResponse(response))
    .then(recipes => getEachRecipe(recipes))
    .catch(error => console.error({ error }))
}

const handleResponse = (response) => {
  return response.json()
    .then(json => {
      if (!response.ok) {
        const error = {
          status: response.status,
          statusTest: response.statusText,
          json
        }
        return Promise.reject(error)
      }
      return json
    })
}

const getEachRecipe = (recipes) => {
  return recipes.forEach(recipe => {
    renderRecipe(recipe)
  })
}

const renderRecipe = (recipe) => {
  $('#recipe-table-info').prepend(
   `<article class="recipe-item-row" data="recipe-">
      <p class="recipe-item-name"><a href=${recipe.url}>${recipe.name}</a></p>
    </article>`
  )
}

module.exports = {
  getRecipes,
  recipesAPIFetch
}
