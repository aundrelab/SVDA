var express = require('express');
var router = express.Router();
const db = require('../../middleware/db')
const crypt = require('../../middleware/crypt');

router.post('/add', async function(req, res, next){
    if(!req.body){
        return res.json({success:false, message: 'error: invalid data received'});
    }   

    // inserts father into dbsd
    let father_id = null;
    let father_query = 'INSERT INTO Father VALUES(NULL,?,?,?,?)';
    if(req.body['father']){
        var values = []
        for(var i in req.body['father']){
            values.push(req.body['father'][i]);
        }

        father = await db.query(db.pool, father_query, values).catch((err) => {
            return null;
        });
        father_id = father ? father.insertId : null;
    }

    // inserts mother into db
    let mother_query = 'INSERT INTO Mother VALUES(NULL,?,?,?,?)';
    let mother_id = null;
    if(req.body['mother']){
        var values = []
        for(var i in req.body['mother']){
            values.push(req.body['mother'][i]);
        }

        mother = await db.query(db.pool, mother_query, values).catch((err) => {
            return null;
        });
        mother_id = mother ? mother.insertId : null;
    }
    
    // inserts guardian into db
    let guardian_query = 'INSERT INTO Guardian VALUES(NULL,?,?,?)';
    let guardian_id = null;
    if(req.body['guardian']){
        var values = []
        for(var i in req.body['guardian']){
            values.push(req.body['guardian'][i]);
        }

        guardian = await db.query(db.pool, guardian_query, values).catch((err) => {
            return null;
        });
        guardian_id = guardian ? guardian.insertId : null;
    }

    // inserts student into db
    let student_query = 'INSERT INTO Student VALUES(NULL,?,?,?,?,?,?,?,?,?,?)';
    var values = [
            req.body['student_email'], req.body['student_first_name'], req.body['student_middle_name'],
            req.body['student_last_name'], req.body['student_phone_number'], father_id, mother_id, guardian_id,
            req.body['student_grade'], req.body['student_status']
    ];

    student = await db.query(db.pool, student_query, values).catch((err) => {
        console.log(err);
        return {insertId: -1};
    });

    return res.json({success: student.insertId > -1});
});

router.put('/update', async function(req, res, next){
    return;
});

router.delete('/remove', async function(req, res, next){
    return;
});

router.get('/', async function(req, res, next){
    return;
});


module.exports = router;