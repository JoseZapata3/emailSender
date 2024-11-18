const { Router } = require('express');
const { sendMail } = require('../controllers/email.controller.js');

const router = Router();

router.post('/send-email', sendMail);

module.exports = router;