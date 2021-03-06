'use strict'

// require dependencies
const config = require('../config')
const store = require('../store')

// make a call to the server to create a new user
const signUp = function (data) {
  return $.ajax({
    method: 'POST',
    url: 'https://wdi-capstone-api.herokuapp.com' + '/sign-up',
    data: data
  })
}

// make a call to the server to log in an existing user
const signIn = function (data) {
  return $.ajax({
    method: 'POST',
    url: 'https://wdi-capstone-api.herokuapp.com' + '/sign-in',
    data: data
  })
}

// make a call to server to change password
const changePassword = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: 'https://wdi-capstone-api.herokuapp.com' + '/change-password',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// make a call to server to log out user
const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: 'https://wdi-capstone-api.herokuapp.com' + '/sign-out',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp: signUp,
  signIn: signIn,
  changePassword: changePassword,
  signOut: signOut
}
