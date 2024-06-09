const Player = require("../Model/Players");

const createPlayer = async (req, res) => {
  try {
    const { name, score } = req.body;
    const newPlayer = new Player({ name, score });
    await newPlayer.save();
    res.status(201).send(newPlayer);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getPlayers = async (req, res) => {
  try {
    const players = await Player.find().sort({ score: -1 });
    res.status(200).send(players);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createPlayer,
  getPlayers,
};
