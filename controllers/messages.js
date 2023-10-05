const messagesService = require("../services/messages");

class Messages {

  async getMessage1(req, res) {    
    const message = await messagesService.getMessage1();
    res.send(`<h2> ${message} </h2>`)
  }

  async getMessage2(req, res) {    
    const message = await messagesService.getMessage2();
    res.send(`<h2> ${message} </h2>`)
  }
  
}

module.exports = new Messages();