const store = require('./store.js')

// Auth starts
const signUp = function (data) {
  return $.ajax({
    method: 'POST',
    url: 'http://localhost:4741/sign-up',
    data: data
  })
}
const signIn = function (data) {
  return $.ajax({
    method: 'POST',
    url: 'http://localhost:4741/sign-in',
    data: data
  })
}
const changePassword = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: 'http://localhost:4741/change-password',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: 'http://localhost:4741/sign-out',
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
    url: 'http://localhost:4741/games/',
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
    url: 'http://localhost:4741/games/',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
    // data: data
  })
}
const findGameSubmit = function (data) {
  return $.ajax({
    method: 'GET',
    url: 'http://localhost:4741/games/' + data.game.id,
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
  // console.log('gameId is ', gameId)
  return $.ajax({
    method: 'PATCH',
    url: 'http://localhost:4741/games/' + gameId,
    headers: {
      Authorization: 'Token token=' + store.user.token,
      contentType: 'application/json'
    },
    data: data
  })
}
const deleteGameSubmit = (gameId) => {
  return $.ajax({
    url: 'http://localhost:4741/games/' + gameId,
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
