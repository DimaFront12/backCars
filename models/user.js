const mongoose = require('mongoose');
const bcrypt = require("bcryptjs")

const UserSchema = new mongoose.Schema({
    login: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
});

UserSchema.statics.findUserByCredentials = function (login, password) {
    return this.findOne({ login })
        .then(user => {
            if (!user) {
                return Promise.reject(new Error("Неправильные почта или пароль"));
            }

            return bcrypt.compare(password, user.password).then(matched => {
                if (!matched) {
                    return Promise.reject(new Error("Неправильные почта или пароль"));
                }

                return user;
            });
        });
};

module.exports = mongoose.model('User', UserSchema);