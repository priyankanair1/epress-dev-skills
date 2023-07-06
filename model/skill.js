const skills = [
    {id: 125223, skill: 'Web Desiging', done: true},
    {id: 127904, skill: 'Learn Python', done: false},
    {id: 139608, skill: 'Network Architecture', done: false}
  ];
  
  module.exports = {
    getAll
  };
  
  function getAll() {
    return skills;
  }
 