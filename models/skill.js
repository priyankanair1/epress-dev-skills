const skills = [
  { id: 125223, skill: "Web Desiging", done: true },
  { id: 127904, skill: "Learn Python", done: false },
  { id: 139608, skill: "Network Architecture", done: false },
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
};

function getAll() {
  console.log(skills);
  return skills;
}

function getOne(id) {
  // URL params are strings - convert to a number
  id = parseInt(id);
  // The Array.prototype.find iterator method is
  // ideal for finding objects within an array
  return skills.find((skill) => skill.id === id);
}

function create(skill) {
  // Add the id
  skill.id = Date.now() % 1000000;
  // New skills wouldn't be done :)
  skill.done = false;
  skills.push(skill);
}

function deleteOne(id) {
  // All properties attached to req.params are strings!
  id = parseInt(id);
  // Find the index based on the id of the skill object
  const idx = skills.findIndex((skill) => skill.id === id);
  skills.splice(idx, 1);
}
