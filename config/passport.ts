// import { User } from "../models/user.model";

// const LocalStrategy = require("passport-local").Strategy;
// const bcrypt = require("bcryptjs");

// //configure passport for user authentification

// module.exports = function (passport) {
//   passport.use(
//     new LocalStrategy(async function (username, password, done) {
//       try {
//         let user = await User.findOne({ username: username });
//         console.log(user)
//         if (!user) {
//           throw new Error("Benutzername oder Passwort falsch");
//         }
//         let validation = await bcrypt.compare(password, user.password);
//         console.log(validation)
//         if (validation) {
//           return done(null, user);
//         } else {
//           throw new Error("Benutzername oder Passwort falsch");
//         }
//       } catch (error) {
//         return done(error);
//       }
//     })
//   );

//   passport.serializeUser(function (user, done) {
//     if (user) done(null, user);
//     else console.log("error on serializing user");
//   });

//   passport.deserializeUser(function (user, done) {
//     User.findById(user, function (err, user) {
//       done(err, user);
//     });
//   });
// };
