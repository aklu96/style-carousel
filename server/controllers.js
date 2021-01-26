const db = require('../database/items.js');

const getItems = (req, res) => {
  db.Items.find()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

const addToBag = (req, res) => {
  const { styleName } = req.params;
  db.Bag.save({ styleName })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

module.exports = {
  getItems, addToBag,
};
