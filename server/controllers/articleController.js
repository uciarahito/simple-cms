const Article = require('../models/article')
var mongo = require('mongodb')
var methods = {}
const Helpers = require('../helpers/decodeToken')

methods.insertOne = (req, res, next) => {
    let decoded = Helpers.decodeToken(req.headers.token)
    let article = new Article({
        title: req.body.title,
        content: req.body.content,
        category: req.body.category,
        author: decoded._id
    })
    article.save(function(err, record) {
        if (err) return console.error(err);
        res.json(record)
    });
} // insertOne

methods.getAll = (req, res, next) => {
    Article.find()
        .populate("author")
        .then(records => {
            res.json(records)
        })
        .catch(err => {
            res.json({
                err,
                message: 'Error waktu getAll Article'
            })
        })
} //getAll

methods.getById = (req, res, next) => {
    Article.findById(req.params.id)
        .populate('author')
        .then(record => {
            res.json(record)
        })
        .catch(err => {
            res.json({
                err,
                message: 'Error waktu getById Article'
            })
        })
} // getById

methods.getByAuthor = (req, res, next) => {
    let decoded = Helpers.decodeToken(req.headers.token)
    Article.find({})
        .populate('author')
        .then(record => {
            console.log('Ini record getByAuthor di controller');
            console.log(record);
            if (record.author.username == decoded.username) {
                res.json(record)
            }
        })
        .catch(err => {
            res.json({
                err,
                message: 'Error waktu getByAuthor Article'
            })
        })
} // getById

methods.updateById = (req, res, next) => {
    let decoded = Helpers.decodeToken(req.headers.token)
    Article.findById(req.params.id)
        .then(record => {
            Article.updateOne({
                    "_id": new mongo.ObjectID(req.params.id)
                }, {
                    $set: {
                        "title": req.body.title || record.title,
                        "content": req.body.content || record.content,
                        "category": req.body.category || record.category,
                        "author": decoded._id || record.author
                    }
                })
                .then((record) => {
                    res.json(record)
                })
                .catch(err => {
                    res.json({
                        err,
                        message: 'Error waktu update Article'
                    })
                })
        })
        .catch(err => {
            res.json({
                err,
                message: 'Data tidak ada'
            })
        })
} //updateById

methods.deleteById = (req, res, next) => {
    Article.deleteOne({
            "_id": new mongo.ObjectID(req.params.id)
        })
        .then((record) => {
            res.json(record)
        })
        .catch(err => {
            res.json({
                err,
                message: 'Error waktu deleteById Article'
            })
        })
} // deleteById

module.exports = methods