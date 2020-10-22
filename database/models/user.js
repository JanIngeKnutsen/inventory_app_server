// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//   firstname: {
//     type: String
//     // required: true
//   },
//   last: {
//     type: String
//     // required: true
//   },
//   email: {
//     type: String
//     // required: true
//   },
//   phone: {
//     type: Number
//   },
//   uuid: {
//     type: String
//     // required: true
//   },
//   username: {
//     type: String
//     // required: true
//   },
//   password: {
//     type: String
//     // required: true
//   },
//   dob: {
//     type: Number
//   },
//   role: {
//     type: [String]
//     // required: true
//   }
// });

// const User = mongoose.model("users", userSchema);

// module.exports = User;

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    first: {
      type: String
      // required: true
    },
    last: {
      type: String
      // required: true
    }
  },
  contact: {
    email: {
      type: String
      // required: true
    },
    phone: {
      type: Number
    },
    address: {
      type: String
    }
  },
  login: {
    uuid: {
      type: String
      // required: true
    },
    username: {
      type: String
      // required: true
    },
    password: {
      type: String
      // required: true
    }
  },
  dob: {
    type: Number
  },
  role: {
    type: [String]
    // required: true
  }
});

const User = mongoose.model("users", userSchema);

module.exports = User;
