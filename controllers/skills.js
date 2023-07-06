module.exports = {
    index,
    show,
    new: newSkill,
    create,
  };
 // Convention is to name the model in uppercase and singular
 const Skill = require('../models/skill');
function index(req, res) {
    res.render('skills/index', {
      skills: Skill.getAll(),
      title: 'All Skills'
    });
  }

  function show(req, res) {
    res.render('skills/show', {
      skill: Skill.getOne(req.params.id),
      title: "Skill Details"
    });
  }

  function newSkill(req, res) {
    res.render('skills/new', { title: 'New Skill' });
  }
  
  function create(req, res) {
    console.log(req.body);
    // The model is responsible for creating data
    // Todo.create(req.body);
    // Do a redirect anytime data is changed
    res.redirect('/skills');
  }