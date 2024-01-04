const mongoose = require("mongoose");
const bcrypt = require('bcrypt');


const ClientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
    required: true
  },
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
  },
  email: {
    type: String,
    required: true,
     unique: true,
  },
  password: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['client', 'admin'],
    default: 'client'
  },
  resetToken: String,
  resetTokenExpiration: Date,
});

// ClientSchema.pre('save', async function (next) {
//   const user = this;
//   if (user.isModified('password') || user.isNew) {
//     try {
//       const hashedPassword = await bcrypt.hash(user.password, 10);
//       user.password = hashedPassword;
//     } catch (err) {
//       return next(err);
//     }
//   }
//   next();
// });


// ClientSchema.methods.matchPassword = async function (enteredPassword) {
//   return await bcrypt.compare(enteredPassword,this.password)
// }

// ClientSchema.pre('save', async function (next) {
//   if (!this.isModified) {
//     next()
//   }
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password,salt)
// });


module.exports = mongoose.model("Client", ClientSchema);
