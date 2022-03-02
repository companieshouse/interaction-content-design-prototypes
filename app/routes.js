const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
router.post('/index', function (req, res) {
    var errors = []
    var emailHasError = false
    var passwordHasError = false
    var passwordConfirmHasError = false
    var nameHasError = false
    
    if (req.session.data['sign-up-name'] === '') {
      nameHasError = true
      errors.push({
        text: 'Enter a name',
        href: '#email'
      })
    }
    if (req.session.data['sign-up-password'] === '') {
      passwordHasError = true
      errors.push({
        text: 'Enter your password. Must have a capital letter, a number and be at least 8 characters long',
        href: '#password'
      })
    }
    if (req.session.data['sign-up-password-confirm'] === '') {
      passwordConfirmHasError = true
      errors.push({
        text: 'Confirm your password for security reasons',
        href: '#password'
      })
    }
    if (req.session.data['sign-up-email'] === '') {
      emailHasError = true
      errors.push({
        text: 'Enter an email address',
        href: '#password'
      })
    }
    if (nameHasError || passwordHasError || passwordConfirmHasError || emailHasError) {
      res.render('index', {
        errorName: nameHasError,
        errorEmail: emailHasError,
        errorPassword: passwordHasError,
        errorPasswordConfirm: passwordConfirmHasError,
        errorList: errors
      })
    } else {
      res.redirect('../company-lookup')
    }
  })

module.exports = router
