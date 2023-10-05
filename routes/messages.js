const express = require("express");
const router = express.Router();
const messagesController = require("../controllers/messages");

router.get("/message1", messagesController.getMessage1);
router.get("/message2", messagesController.getMessage2);

module.exports = router;