const { Mantra } = require("../db/models");

const getAll = async (req, res) => {
  const mantras = await Mantra.find();

  res.json({ data: mantras });
};

const getOne = async (req, res) => {
  const { id } = req.params;

  const mantra = await Mantra.findById(id);

  res.json({ data: mantra });
};

const createOne = async (req, res) => {
  const {
    data: { text },
  } = req.body;

  const mantra = new Mantra({ text });

  await mantra.save();

  res.json(mantra);
};

const createMany = async (req, res) => {
  const { data } = req.body;

  const mantras = await Mantra.insertMany(data);

  res.json(mantras);
};

const updateOne = async (req, res) => {
  const { id } = req.params;
  const { data } = req.body;

  const mantra = await Mantra.updateOne({ _id: id }, data); // this doesn't validate/sends internal db res

  res.json(mantra);
};

const deleteOne = async (req, res) => {
  const { id } = req.params;

  const mantra = await Mantra.findByIdAndDelete(id);

  res.json(mantra);
};

// const updateMany = async (req, res) => {
//   const { data } = req.body;

//   const mantras = await Mantra.updateMany(data);

//   res.json(mantras);
// };

exports.getAll = getAll;
exports.getOne = getOne;
exports.createOne = createOne;
exports.createMany = createMany;
exports.updateOne = updateOne;
// exports.updateMany = updateMany;
exports.deleteOne = deleteOne;
