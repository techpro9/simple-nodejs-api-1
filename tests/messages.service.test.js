const messagesService = require('../services/messages');

describe('test messages ', () => {
  it('when we get message 1 we obtain Message1 string', () => {        
    expect(messagesService.getMessage1()).toBe("Message1");
  });

  it('when we get message 2 we obtain Message2 string', () => {        
    expect(messagesService.getMessage2()).toBe("Message2");
  });

}) 
