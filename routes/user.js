import express from 'express';
import { getUsers,createUsers,createUser,deleteUser,updateUser} from '../controllers/user.js';
const router = express.Router();


// all routes in here are starting with /users
router.get('/',getUsers);

router.post('/',createUsers);

// /users/2 => req.params(id:2)

router.get('/:id',createUser);

router.delete('/:id',deleteUser);

router.patch('/:id',updateUser);

export default router; // export to index.js