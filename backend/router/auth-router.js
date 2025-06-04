const express = require("express");
const router = express.Router();

const  createPlans= require("../controller/createPlans/createPlans");

// Route to create a new plan
router.post("/create-plan", createPlans.createPlans);
// Route to create a new subscription
router.post("/create-subscription", createPlans.createSubscription);
// Route to create a plan and subscription


module.exports = router;