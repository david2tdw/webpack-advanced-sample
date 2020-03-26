module.exports = {
  'GET /user': { name: '刘小夕2' },
  'POST /login/account': (req, res) => {
    const { password, username } = req.body
    if (password === '888' && username === 'admin') {
      return res.send({
        status: 'ok',
        code: 0,
        token: 'aabdb',
        data: {
          id: 1,
          name: '刘小夕test1'
        }
      })
    } else {
      return res.send({
        status: 'error',
        code: 403
      })
    }
  }
}
