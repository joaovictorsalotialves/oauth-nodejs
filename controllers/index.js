const User = require('../models/user')

exports.showIndex = (_req, res, _next) => {
  res.render('index')
}

exports.showPageSignUp = (_req, res, _next) => {
  res.render('signUp')
}

exports.showMembersPage = (_req, res, _next) => {
  res.render('members')
}

exports.get404Page = (_req, res, _next) => {
  res.status(404).render('404')
}

exports.signup = async (req, res, _next) => {
  const { username, email, password } = req.body
  const user = new User(username, email, password)

  try {
    await user.save()
    res.redirect('/members')
  } catch (error) {
    console.log(error)
    res.redirect('/signup')
  }
}

exports.login = async (req, res, _next) => {
  const { email, password } = req.body
  const user = await User.findOne(email, password)

  try {
    if (user) {
      return res.redirect('/members')
    }

    res.redirect('/')
  } catch (error) {
    console.log(error)
    res.redirect('/')
  }
}
