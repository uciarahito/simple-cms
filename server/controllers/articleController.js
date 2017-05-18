var Article = require('../models/article')
var methods = {}

methods.getAll = (req, res) => {
    Article.find({}, (err, records) => {
        if (err) {
            res.json(err)
        }
        console.log('Ini record dari getAll di controller');
        console.log(records);
        res.json(records)
    })
}

methods.getById = (req, res) => {
    Article.findById(req.params.id, (err, record) => {
        if (err) {
            res.json(err)
        }
        console.log('Ini record dari getById di controller');
        console.log(record);
        res.json(records)
    })
}

methods.insertOne = (req, res) => {
    let newaArticle = new Article({
        title: req.body.title,
        content: req.body.content,
        category: req.body.category,
        author: req.body.author
    })

    newaArticle.save((err, record) => {
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
    Article.findByIdAndUpdate(req.params.id, (err, record) => {
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
    Article.findByIdAndRemove(req.params.id, (err, record) => {
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