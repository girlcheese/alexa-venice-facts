'use strict'
var Alexa = require('alexa-sdk')

var APP_ID = 'amzn1.ask.skill.bebd9187-621f-42a9-9056-5d194dd95c2b' // OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]"
var SKILL_NAME = 'Venice Facts'

/**
 * Array containing space facts.
 */
var FACTS = [
  'There are 417 bridges in Venice and 72 of those are private.',
  'Venice has one of the narrowest streets in the world. Calletta, or Ramo Varisco street, is only 53 cm wide.',
  'Until recently, Venice didn’t have female gondoliers. Venice got its first female gondolier in 2010.',
  'Every year 18 million tourists visit Venice. That’s, on average, around 50 thousand people per day. The peak time is during the carnival with more than three million visitors.',
  '<phoneme alphabet="ipa" ph="akkwa alta">Acqua alta</phoneme>, or higher water, happens when tide is 9 cm above normal height. It mostly happens as a result of an interaction between Sirocco and tides (Sirocco is a warm wind blowing from north Africa).',
  'There are 177 canals in Venice.',
  'The famous San Marco bell tower, or campanile, was built in the 12th century and collapsed in 1902. The tower was rebuilt to be exactly the same as the previous one.',
  'Venice is sinking at the rate of 1-2 millimeters a year.',
  'There are 118 islands, 416 bridges, 177 canals and 127 squares in Venice.',
  'Some experts say that Venice could be a ghost town by 2030. It would be populated only by tourists.',
  'Venice is more than 1500 years old. It dates back to the mid 400.',
  'The first public casino in the world was opened in Venice in 1638.',
  'Feeding pigeons is not allowed in Venice.',
  'The first public casino opened in 1638 in Venice.',
  'The first woman every to graduate from any University (in 16XX) was from Venice.'
]

exports.handler = function (event, context, callback) {
  var alexa = Alexa.handler(event, context)
  alexa.APP_ID = APP_ID
  alexa.registerHandlers(handlers)
  alexa.execute()
}

var handlers = {
  'LaunchRequest': function () {
    this.emit('GetFact')
  },
  'GetNewFactIntent': function () {
    this.emit('GetFact')
  },
  'GetFact': function () {
    // Get a random space fact from the space facts list
    var factIndex = Math.floor(Math.random() * FACTS.length)
    var randomFact = FACTS[ factIndex ]

    // Create speech output
    var speechOutput = 'Here\'s your fact: ' + randomFact

    this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
  },
  'AMAZON.HelpIntent': function () {
    var speechOutput = 'You can say tell me a Venice fact, or, you can say bye... How can I help you next?'
    var reprompt = 'What can I help you with?'
    this.emit(':ask', speechOutput, reprompt)
  },
  'AMAZON.CancelIntent': function () {
    this.emit(':tell', '<phoneme alphabet="ipa" ph="tʃao">Ciao</phoneme>!')
  },
  'AMAZON.StopIntent': function () {
    this.emit(':tell', '<phoneme alphabet="ipa" ph="tʃao">Ciao</phoneme>!')
  }
}
