const store = require('./store.js')

// Auth starts
const signUp = function (data) {
  return $.ajax({
    method: 'POST',
    url: 'https://wdi-capstone-api.herokuapp.com/sign-up',
    data: data
  })
}
const signIn = function (data) {
  return $.ajax({
    method: 'POST',
    url: 'https://wdi-capstone-api.herokuapp.com/sign-in',
    data: data
  })
}
const changePassword = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: 'https://wdi-capstone-api.herokuapp.com/change-password',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: 'https://wdi-capstone-api.herokuapp.com/sign-out',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
// Auth ends

// Game starts
const createGameSubmit = function (data) {
  return $.ajax({
    method: 'POST',
    url: 'https://wdi-capstone-api.herokuapp.com/games/',
    headers: {
      Authorization: 'Token token=' + store.user.token,
      contentType: 'application/json'
    },
    data: data
  })
}
const getGameSubmit = function () {
  return $.ajax({
    method: 'GET',
    url: 'https://wdi-capstone-api.herokuapp.com/games/',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
    // data: data
  })
}
const findGameSubmit = function (data) {
  return $.ajax({
    method: 'GET',
    url: 'https://wdi-capstone-api.herokuapp.com/games/' + data.game.id,
    headers: {
      contentType: 'application/json'
    },
    data: {
      id: data.game.id,
      game: {
        score: data.game.score,
        description: data.game.description
      }
    }
  })
}
const updateGameSubmit = function (data, gameId) {
  // console.log('data is', data)
  console.log('gameId is ', gameId)
  return $.ajax({
    method: 'PATCH',
    url: 'https://wdi-capstone-api.herokuapp.com/games/' + data.game.id,
    headers: {
      Authorization: 'Token token=' + store.user.token,
      contentType: 'application/json'
    },
    data: data
  })
}
const deleteGameSubmit = (gameId) => {
  return $.ajax({
    url: 'https://wdi-capstone-api.herokuapp.com/games/' + gameId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
// Game ends

module.exports = {
  // Auth starts
  signUp: signUp,
  signIn: signIn,
  signOut: signOut,
  changePassword: changePassword,
  // Auth ends

  // Game starts
  createGameSubmit: createGameSubmit,
  getGameSubmit: getGameSubmit,
  findGameSubmit: findGameSubmit,
  updateGameSubmit: updateGameSubmit,
  deleteGameSubmit: deleteGameSubmit
  // Game ends

}
