const alumniModel = require('../models/alumniModel');
const { errorHttp } = require('../middlewares/errorHandler');

exports.getAll = (req, res) => {
  const { tahunLulus } = req.query;
  res.json(alumniModel.getAll(tahunLulus));
};

exports.getById = (req, res, next) => {
  const id = parseInt(req.params.id);
  const data = alumniModel.getById(id);
  if (!data) return next(errorHttp(404, 'Data tidak ditemukan'));
  res.json(data);
};

exports.create = (req, res, next) => {
  const { nama, prodi, tahunLulus, pekerjaan } = req.body;
  if (!nama || !prodi || !tahunLulus || !pekerjaan) return next(errorHttp(400, 'Semua field wajib diisi'));

  const baru = alumniModel.create({ nama, prodi, tahunLulus, pekerjaan });
  res.status(201).json(baru);
};

exports.update = (req, res, next) => {
  const id = parseInt(req.params.id);
  const hasil = alumniModel.update(id, req.body);
  if (!hasil) return next(errorHttp(404, 'Data tidak ditemukan'));
  res.json(hasil);
};

exports.remove = (req, res, next) => {
  const id = parseInt(req.params.id);
  const berhasil = alumniModel.remove(id);
  if (!berhasil) return next(errorHttp(404, 'Data tidak ditemukan'));
  res.status(204).send();
};