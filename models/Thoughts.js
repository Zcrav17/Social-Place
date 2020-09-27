const { Schema, model } = require('mongoose');

const ThoughtsSchema = new Schema ({

    thoughtText: {
        
        String
        Required
        //Must be between 1 and 280 characters
    },
    createdAt: {
        
        Date
        Set default value to the current timestamp
        Use moment in a getter method to format the timestamp on query
    },
    username: { //(The user that created this thought)
        
        String
        Required
    },
    
    reactions: { //(These are like replies)
        
    }
    
    Array of nested documents created with the reactionSchema
    Schema Settings
    
    // Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
});

const Thoughts = model('Thoughts', ThoughtsSchema);

module.exports = Thoughts;