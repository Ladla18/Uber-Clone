const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const captainController = require('../controllers/captain.controller');


router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First Name must be 3 Long'),
    body('password').isLength({ min: 6 }).withMessage('Password must be 8'),
    body('vehicle.color').isLength({ min: 3 }).withMessage('Color must be 3 Long'),
    body('vehicle.plate').isLength({ min: 3 }).withMessage('Plate must be 3 Long'),
    body('vehicle.capacity').isLength({ min: 1 }).withMessage('Capacity must be 1 Long'),
    body('vehicle.vehicleType').isIn(['car', 'motorcycle']).withMessage('Invalid Vehicle Type')
], captainController.registerCaptain);

module.exports = router;