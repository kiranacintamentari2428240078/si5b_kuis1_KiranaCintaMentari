  const mongoose = require('mongoose');

  const alamatSchema = new mongoose.Schema({
  jalan: String,
  kota: String,
}, { _id: false });

  const alumniSchema = new mongoose.Schema({
    nim: { type: String, required: [true, 'nim wajib diisi'], unique: true, trim: true },
    nama: { type: String, required: [true, 'nama wajib diisi'], trim: true },
    alamat: alamatSchema,
    prodiId: { type: mongoose.Schema.Types.ObjectId, ref: 'Prodi' },
    tahunLulus: { type: Number, required: [true, 'tahun lulus wajib diisi'], true: true},
    pekerjaan: { type: String, required: [true, 'pekerjaan wajib diisi'], trim:true},
    createdAt: { type: Date, default: Date.now },
  });

  module.exports = mongoose.model('Alumni', alumniSchema);