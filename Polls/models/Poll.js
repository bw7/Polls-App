var mongoose = require('mongoose');

// Subdocuments schema for votes in polls
var voteSchema = new mongoose.Schema({ ip: 'String' });

// Subdocuments schema for poll choices
var choiceSchema = new mongoose.Schema({ 
	text: String,
	votes: [voteSchema]
});

// Documents schema for polls
exports.PollSchema = new mongoose.Schema({
	question: { type: String, required: true },
	choices: [choiceSchema]
});