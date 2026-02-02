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

exports.signup = (req, res, next) => {
  const { username, email, password } = req.body
  console.log(username, email, password)
}
