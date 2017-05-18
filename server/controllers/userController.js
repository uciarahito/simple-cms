var User = require('../models/user')
var methods = {}

methods.getAll = (req, res) => {
    User.find({}, (err, records) => {
        if (err) {
            res.json(err)
        }
        console.log('Ini record dari getAll di controller');
        console.log(records);
        res.json(records)
    })
}

methods.getById = (req, res) => {
    User.findById(req.params.id, (err, record) => {
        if (err) {
            res.json(err)
        }
        console.log('Ini record dari getById di controller');
        console.log(record);
        res.json(records)
    })
}

methods.insertOne = (req, res) => {
    let newUser = new User({
        name: req.body.name,
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    })

    newUser.save((err, record) => {
        if (err) {
            res.json({
                err
            })
        }
        console.log(record);
        res.json(record)
    })
}

methods.updateById = (req, res) => {
    User.findByIdAndUpdate(req.params.id, (err, record) => {
        if (err) {
            res.json({
                err
            })
        }
        console.log('ini record waktu findById update');
        console.log(record);
        record.json(record)
    })
}

methods.deleteById = (req, res) => {
    User.findByIdAndRemove(req.params.id, (err, record) => {
        if (err) {
            res.json({
                err
            })
        }
        console.log(record);
        res.json(record)
    })
}

module.exports = methods