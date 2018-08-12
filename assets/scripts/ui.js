const store = require('./store.js')
const handlebars = require('./mygames.handlebars')
const game = require('./game.js')

// Auth starts
const signInSuccess = function (response) {
  // console.log(response)
  store.user = response.user
  $('#display').html('Signed in successfully!')
  $('#create-game').show()
  // $('#get-game').show()
  $('#change-password').show()
  $('#sign-out').show()
  // $('#sign-up').hide()
  // $('#sign-in').hide()
  $('#signInModal').modal('hide')
  game.draw()
}
const signInError = function (error) {
  $('#modal-display').html('Sign in unsuccessful, please try again!', (error))
}
const signUpSuccess = function (response) {
  $('#modal-display').html('Signed up successfully!')
}
const signUpError = function (error) {
  $('#modal-display').html('Sign up unsuccessful, please try again.', (error))
}
const changePasswordSuccess = function (changePasswordResponse) {
  $('#display').html('Password changed successfully!')
}
const changePasswordError = function (error) {
  $('#display').html('Password change unsuccessful, please try again.', (error))
}
const signOutSuccess = function (signOutResponse) {
  delete store.user
  $('#display').html('Signed out successfully!')
  $('#content').html('')
  $('#create-game').hide()
  // $('#get-games').hide()
  $('#change-password').hide()
  // $('#sign-out').hide()
  // $('#sign-up').show()
  // $('#sign-in').show()
  $('#signInModal').modal()
  $('#content').html('')
}

const signOutError = function (error) {
  $('#display').html('Failed to sign out.', error)
}
// Auth ends

// Game starts
const createGameSuccess = function (response) {
  $('#display').html('Game created successfully!')
}
const createGameError = function (error) {
  $('#content').html('Game creation unsuccessful', error)
}
const getGameSuccess = function (data) {
  $('#display').html('Games retrieved successfully!')
  const showGamesHtml = handlebars({ games: data.games })
  $('#content').html('')
  $('#content').append(showGamesHtml)
  // console.log(showGamesHtml)
  // console.log(data.games)
}
const getGameError = function (error) {
  $('#display').html('Game retrieval unsuccessful', error)
}
const deleteGameSuccess = function (gameId) {
  $('#display').html('Game deleted successfully!')
  $('#content').html('')
}
const deleteGameError = function (error) {
  $('#display').html('Cannot delete game', error)
}
const findGameSuccess = function (response) {
  $('#display').html('Game found successfully!')
}
const findGameError = function (error) {
  $('#display').html('Game find unsuccessful', error)
}
const updateGameSuccess = function (gameId) {
  $('#display').html('Game updated successfully!')
  $('#content').html('')
}
const updateGameError = function (error) {
  $('#display').html('Game update unsuccessful', error)
}
// Game ends

module.exports = {
  // Auth starts
  signInSuccess: signInSuccess,
  signInError: signInError,
  signUpSuccess: signUpSuccess,
  signUpError: signUpError,
  changePasswordSuccess: changePasswordSuccess,
  changePasswordError: changePasswordError,
  signOutSuccess: signOutSuccess,
  signOutError: signOutError,
  // Auth ends
  // Game starts
  createGameSuccess: createGameSuccess,
  createGameError: createGameError,
  getGameSuccess: getGameSuccess,
  getGameError: getGameError,
  deleteGameSuccess: deleteGameSuccess,
  deleteGameError: deleteGameError,
  findGameSuccess: findGameSuccess,
  findGameError: findGameError,
  updateGameSuccess: updateGameSuccess,
  updateGameError: updateGameError
  // Game ends
}
