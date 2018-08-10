
const getFormFields = require('../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
// const game = require('./game.js')

// const handlebars = require('./mygames.handlebars')

// Game starts
const createGame = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createGameSubmit(data)
    .then(ui.createGameSuccess)
    .catch(ui.createGameError)
  $(event.target).trigger('reset')
  // game
  // game.newGame()
}

const getGame = function (event) {
  event.preventDefault()
  api.getGameSubmit()
    .then(ui.getGameSuccess)
    .catch(ui.getGameError)
}
const findGame = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.findGameSubmit(data)
}
// const showUpdateGame = function (event) {
//   $('.update-game').show()
// }
const updateGame = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  // console.log('data is', data)
  // console.log('game id is ', game.id)
  // console.log('event target is', event.target)
  // console.log('data.id is', data.id)
  const gameId = $(event.target).closest('ul').attr('data-id')
  // console.log('closest event target is ', ((event.target).closest('ul')))
  console.log('gameId is ', gameId)
  api.updateGameSubmit(data, gameId)
    .then(ui.updateGameSuccess)
    .catch(ui.updateGameError)
  // $(event.target).trigger('reset')
}
const deleteGame = function (event) {
  event.preventDefault()
  const gameId = $(event.target).closest('ul').attr('data-id')
  api.deleteGameSubmit(gameId)
    .then(ui.deleteGameSuccess)
    .catch(ui.deleteGameError)
}
// Game ends

// Auth starts
const signInSubmit = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInError)
  $(event.target).trigger('reset')
}
const signUpSubmit = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpError)
  $(event.target).trigger('reset')
}
const signOutSubmit = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutError)
}
const changePasswordSubmit = function (event) {
  const data = getFormFields(event.target)
  event.preventDefault()
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordError)
  $(event.target).trigger('reset')
}
// Auth ends

module.exports = {
  // Game starts
  createGame: createGame,
  getGame: getGame,
  findGame: findGame,
  // showUpdateGame: showUpdateGame,
  updateGame: updateGame,
  deleteGame: deleteGame,
  // Game ends

  // Auth starts
  signInSubmit: signInSubmit,
  signUpSubmit: signUpSubmit,
  signOutSubmit: signOutSubmit,
  changePasswordSubmit: changePasswordSubmit
  // Auth ends
}
