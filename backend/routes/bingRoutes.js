const express = require('express')
const { getBings, updateBing, deleteBing, setBing } = require('../controllers/bingController')
const { protect } = require('../middleware/authMiddleware')
const router = express.Router()

router.route('/').get(protect, getBings).post(protect, setBing)
router.route('/:id').put(protect, updateBing).delete(protect, deleteBing)

module.exports = router
