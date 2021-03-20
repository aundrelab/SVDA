var express = require('express');
var router = express.Router();
const db = require('../../middleware/db')
const crypt = require('../../middleware/crypt');

/**
 * Attempts to log a user into the website. Either returns true if successful, or false if unsuccessful.
 */
router.get('/login', async function (req, res, next) {
    if (!req.query.email || !req.query.password) {
        return res.render('login', {success: false});
    }

    const query = 'SELECT * FROM User WHERE user_email = ? AND user_password = ? LIMIT 1;';
    values = [req.query.email, req.query.password]
    let user = await db.query(db.pool, query, values).catch((err) =>{
        return null;
    });

    console.log(user);

    if (Array.isArray(user) && user.length) {
        req.session.user = user[0];
        return res.json({ success: true });
    } else {
        delete req.session.user;
        delete req.session.username;
        return res.json({ success: false , msg: "Incorrect Credentials!"});
    }
});


/**
 * Logs a user out of the website.
 */
 router.get('/logout', async function (req, res, next) {
    delete req.session.user;
    // return res.json({ success: true });
    if (req.session.username) {
        delete req.session.username;
    }
    return res.redirect("/");
});

module.exports = router;