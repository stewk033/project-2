const router = require("express").Router();
const {Character, Universe, Alignment} = require('../../models');

router.get('/', async (req, res) => {
  Character.findAll({
    attributes: ['id', 'name'],
    include: [
      {
        model: Universe,
        attributes: ['universe_name']
      },
      {
        model: Alignment,
        attributes: ['alignment_type']
      },
    ]
  })
  .then (dbPostData => res.json(dbPostData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/:id', async (req, res) => {
  Character.findOne({
    where: {
      id: req.params.id
    }
  })
  .then (dbPostData => res.json(dbPostData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/universe/:universe_id', async (req, res) => {
  Character.findAll({
    where: {
      universe_id: req.params.universe_id
    }
  })
  .then (dbPostData => res.json(dbPostData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;