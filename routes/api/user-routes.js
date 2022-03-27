// /api/users
// 
// GET all users
// 
// GET a single user by its _id and populated thought and friend data
// 
// POST a new user:
// 
// // example data
// {
//   "username": "lernantino",
//   "email": "lernantino@gmail.com"
// }
// PUT to update a user by its _id
// 
// DELETE to remove user by its _id
// 
// BONUS: Remove a user's associated thoughts when deleted.

const router = require('express').Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} = require('../../controllers/user-controller'); // ***CREATE CONTROLLER ***

// Set up GET all and POST at /api/users
router
  .route('/')
  .get(getAllUsers)
  .post(createUser);

// Set up GET one, PUT, and DELETE at /api/users/:id
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;