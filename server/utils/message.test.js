var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'Jen';
    var text = 'some message';
    var message = generateMessage(from, text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, text})
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Bob';
    var longitude = 19;
    var latitude = 15;
    var url = 'https://www.google.com/maps?q=19,15';
    var message = generateLocationMessage(from, longitude, latitude);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, url});
  });
});
