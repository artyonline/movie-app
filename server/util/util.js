const crypto = require('crypto');

module.exports.hashPassword = (password, salt = null) => {
    if (!salt) salt = crypto.randomBytes(16).toString('hex');
    const hashedPassword = crypto.pbkdf2Sync(password, salt,
        1000, 64, `sha512`).toString(`hex`);

    return {
        salt,
        hashedPassword
    }
}
