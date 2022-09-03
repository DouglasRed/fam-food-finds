const router = require("express").Router();
const { User } = require("../../models");

// signup
router.post("/", async (req, res) => {
  try {
    const newUser = await User.create({
      username: req.body.username,
      password: req.body.password
    });
    req.session.save(() => {
      req.session.user_id = newUser.id;
      req.session.username = newUser.username;
      req.session.loggedIn = true;
      res.status(200).json({user: newUser, message: "You are signed up!"})
    })
  } catch (err) {
    res.status(500).json(err);
  }
});


// login
router.post("/login", (req, res) => {
  User.findOne({
    where: {
      username: req.body.username
    }
  }).then(dbUserData => {
    if (!dbUserData) {
      res.status(400).json({ message: "No user with that email address!" });
      return;
    }

    const validPassword = dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: "Incorrect password!" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;
  
      res.json({ user: dbUserData, message: "You are now logged in!" });
    });
  });
});

// logout
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  }
  else {
    res.status(404).end();
  }
});

// route for testing purposes
router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll({
    })
    res.status(200).json(userData);
} catch (err) {
    res.status(500).json(err);
}
})

module.exports = router;