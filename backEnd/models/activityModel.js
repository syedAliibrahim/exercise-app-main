const mongoose = require('mongoose')

const activitySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
    },
    desc: {
      type: String,
      required: [true, 'Please add an email'],
    },
    duration: {
      type: String,
      required: [true, 'Please add a duration'],
    },
    activityType: {
        type: String,
        required: [true, 'Please add an Activity Type'],
    },
    date: {
        type: Date,
        default: Date.now,
        required: [true, 'Please add a date'],
      },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Activity', activitySchema)