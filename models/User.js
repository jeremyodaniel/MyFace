const { Schema, model} = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const UserSchema = new Schema(
  {
    userName: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    email: {
      type: String,
      unique: true,
      required: true,
      match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/]
    },
    thoughts: {
      // Array of _id values referencing the Thought model
    },
    friends: {
      // Array of _id values referencing the User model (self-reference)
    }

    
  }
);


/* SCHEMA SETTINGS
Create a virtual called friendCount that retrieves the length of the 
user's friends array field on query. */