const express = require('express');
const router = express.Router();
const ItemModel = require('../models/ItemModel.js');

/* GET home page. */
router.get('/', (req, res) => {
    // Here we are asking mongoose to find TaskModels,
    // we are not passing any specifice attributes, such
    // as an id, so mongoose will find all tasks.
    ItemModel.find((err, items) => {
    // Queries are run asynchronously.
    // So we have to pass in a callback to be ran when the
    // db query is finished
      res.render('index', {
          items: items
      });
    });
});

/* POST Create a task. */
router.post('/', (req, res) => {
    const item = req.body.item;
    const number = req.body.number;
    const model = new ItemModel({
        text: item,
        number: number
    });
    model.save((err, item) => {
        // Inserts are run asynchronously.
        // So we have to pass in a callback to be ran when
        // the insert is finished
        res.redirect('/');
    });
});
module.exports = router;
