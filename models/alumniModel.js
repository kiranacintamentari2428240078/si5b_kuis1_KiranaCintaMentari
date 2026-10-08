let alumni = [
  {
    id: 1,
    nim: "2020110045",
    nama: "Farhan Akbar",
    prodi: "Sistem Informasi",
    tahunLulus: 2024,
    pekerjaan: "Business Analyst"
  },
  {
    id: 2,
    nim: "2019110012",
    nama: "Siti Rahma",
    prodi: "Teknik Informatika",
    tahunLulus: 2023,
    pekerjaan: "Web Developer"
  },
  {
    id: 3,
    nim: "2020110078",
    nama: "Dimas Prakoso",
    prodi: "Sistem Informasi",
    tahunLulus: 2024,
    pekerjaan: "Data Analyst"
  },
];
let nextId = 4;

function getAll(tahunLulus) {
  if (tahunLulus) return alumni.filter((m) => m.tahunLulus === Number(tahunLulus));
  return alumni;
}

function getById(id) {
  return alumni.find((m) => m.id === id);
}

function create(data) {
  const baru = { id: nextId++, ...data };
  alumni.push(baru);
  return baru;
}

function update(id, data) {
  const index = alumni.findIndex((m) => m.id === id);
  if (index === -1) return null;
  alumni[index] = { ...alumni[index], ...data, id };
  return alumni[index];
}

function remove(id) {
  const index = alumni.findIndex((m) => m.id === id);
  if (index === -1) return false;
  alumni.splice(index, 1);
  return true;
}

module.exports = { getAll, getById, create, update, remove };