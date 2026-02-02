exports.showIndex = (_req, res, _next) => {
  res.render('index')
}

exports.showPageSignUp = (_req, res, _next) => {
  res.render('signUp')
}

exports.showMembersPage = (_req, res) => {
  res.render('members')
}

exports.get404Page = (_req, res, _next) => {
  res.status(404).render('404')
}
