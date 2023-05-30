const express = require('express')
const router = express.Router()
const {
    getActivities,
    setActivity,
    deleteActivity,
    updateActivity
} = require('../controllers/activityController')



router.route('/').get(getActivities).post(setActivity)
router.route('/:id').delete(deleteActivity).put(updateActivity)

module.exports = router;