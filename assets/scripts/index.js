'use strict'

// use require with a reference to bundle the file and use it in this file
const game = require('./game.js')
// game
// game.draw()

const gameEvents = require('./events.js')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // game
  // game.draw()
  // modal for signup/in
  $('#signInModal').modal({
    backdrop: 'static'
  })
  // fix this in a moment
  $('#create-game').on('submit', gameEvents.createGame)
  $('#start-game').on('click', game.newGame)

  $('#get-games').on('click', gameEvents.getGame)
  $('#content').on('submit', '.update-game', gameEvents.updateGame)
  $('#content').on('click', '.delete-game', gameEvents.deleteGame)

  // hidden on start
  $('#change-password').hide()
  $('#sign-out').hide()
  // end hidden

  // Auth starts
  $('#sign-up').on('submit', gameEvents.signUpSubmit)
  $('#sign-in').on('submit', gameEvents.signInSubmit)
  $('#change-password').on('submit', gameEvents.changePasswordSubmit)
  $('#sign-out').on('click', gameEvents.signOutSubmit)
  // Auth ends
})
