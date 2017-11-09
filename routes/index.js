var express = require('express');
var router = express.Router();
const UserController = require('../controller/user');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* GET signup page. */
router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Sign-up' });
});

/* POST Create User page. */
router.post('/signup', function(req, res, next) {
  const result = UserController.createUser(req, res, (user, err) => {
    if (err) {
      return { status: 400, error: err };
    }
    res.redirect('listUser');
  });
});

/* GET listUser page. */
router.get('/listUser', function(req, res, next) {
  const result = UserController.getUsers(req, res, (users, err) => {
    if (err) {
      return { status: 400, error: err };
    }
    res.render('listUser', { users });
  });
});

/* GET updateuser page. */
router.get('/updateUser/:userId', function(req, res, next) {
  const result = UserController.getUser(req, res, (user, err) => {
    if (err) {
      return { status: 400, error: err };
    }
    res.render('updateuser', { user });
  });
});

/* POST updateuser page. */
router.post('/updateUser/:userId', function(req, res, next) {
  const result = UserController.updateUser(req, res, (user, err) => {
    if (err) {
      return { status: 400, error: err };
    }
    res.render('updateUser', { user });
  });
});

/* GET DELETE user page. */
router.get('/deleteuser/:userId', function(req, res, next) {
  const result = UserController.deleteUser(req, res, (user, err) => {
    if (err) {
      return { status: 400, error: err };
    }
    res.redirect('/listUser');
  });
});


module.exports = router;
