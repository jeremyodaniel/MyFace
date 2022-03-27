const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const UserSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280
    },
    createdAt: {
      // **Date
      // **Set default value to the current timestamp
      // **Use a getter method to format the timestamp on query
    },
    username: {
      type: String,
      required: true
    },
    reactions: { //(These are like replies)
      // Array of nested documents created with the reactionSchema
    }

    
  }
);

/* SCHEMA SETTINGS
Create a virtual called reactionCount that retrieves the length of 
the thought's reactions array field on query.*/