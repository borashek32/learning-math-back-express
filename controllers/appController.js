const User = require('./../models/User')

class appController {
  async getUsers(req, res) {
    try {
      const users = await User.find()
      res.json(users)
    } catch (e) {
      console.log(e)
      res.status(400).json({ message: 'Some error occured. Please, try again later' })
    }
  }
}

module.exports = new appController