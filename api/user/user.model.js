const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  lastName:{
    type: String,
    required:true,
    trim: true,
  },
  nick:{
    type:String,
    trim: true,
  },


  email: {
    type: String,
    required: true,
    unique: [true, 'Email must be unique'],
    trim: true,
  },
  role: {
    type: String,
    enum: ['ADMIN', 'role_user'],
    default: 'role_user',
  },
  avatar :{
    type: String,
    default: 'defaul.png',
  },
  password: String,
  age: {
    type: Number,
    min: 18,
    max: 65,
  },

  isActive: {
    type: Boolean,
    default: false,
  },
  passwordResetExpires:{
  type: Date
  }
},
{
  versionKey: false,
  timestamps: true,  //La opción timestamps: true en la definición del esquema de Mongoose habilita la creación automática de los campos "createdAt" y "updatedAt" en los documentos.
});
// Virtuals
UserSchema.virtual('profile').get(function () {
  const user = this;

  return {
    name:   user.name,
    email:  user.email,
    role:   user.role,
    nick:   user.nick,
    avatar: user.avatar
  }
});


// trigger
// UserSchema.pre('save', function (next) {
//   const user = this;

//   try {
//     if (!this.isModified('password')) {
//       next();
//     }

//     // if (user.password) {
//     //   const salt = await bcrypt.genSalt(10);
//     //   const hash = await bcrypt.hash(user.password, salt);

//     //   user.password = hash;
//     // }
//   } catch (error) {

//   }

// });



// Methods
// UserSchema.methods.comparePaassword = function () {}


const User = mongoose.model('User', UserSchema); // users

module.exports = User;
