const db = require("../models");

module.exports = function(app) {
  app.get("/api/workouts", function(req, res) {
    db.Workouts.find({}).then(function(dbWorkouts) {
      res.json(dbWorkouts);
    });
  });

  app.get("/api/range", function(req, res) {
    db.Workouts.find({}).then(function(dbWorkouts) {
      res.json(/public/stats);
    });
  });

  app.post("/api/workouts", function(req, res) {
    db.Workouts.find({}).then(function(dbWorkouts) {
      res.json(dbWorkouts);
    });
  });

  app.put("/api/workouts/:id", function(req, res) {
    db.Workouts.updateWorkout({ _id: req.params.id }, { rating: req.body.rating }).then(function(dbWorkout) {
      res.json(dbWorkout);
    });
  });
};