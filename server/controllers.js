const Items = require('../database/items.js');

const getItems = (req, res) => {
  Items.find()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

module.exports = {
  getItems,
};
