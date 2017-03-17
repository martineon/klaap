// We Make Our USer Schema and Export It..
// Then It Will Be Recovered By The Index.js In The Database Folder

const users = {
  email: {
    lowercase: true,
    unique: true,
    required: true,
    type: String,
    validate: function(email) {
      return /^[a-zA-Z0-9.!#$%&’*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
    }
  },
  name: {
      type: String,
      required: true
  }
}

module.exports = users;
