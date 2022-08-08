const asyncHandler = require('express-async-handler')
const Bing = require('../models/bingModel')

// @desc    Get bings
// @route   GET /api/bings
// @access  Private
const getBings = asyncHandler(async (req, res) => {
  const bings = await Bing.find({ user: req.user._id })

  res.status(200).json(bings)
})

// @desc    Set bing
// @route   POST /api/bings
// @access  Private
const setBing = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    throw new Error('空..空气饼？')
  }

  const bing = await Bing.create({
    user: req.user._id,
    text: req.body.text,
  })

  res.status(200).json(bing)
})

// @desc    Update bing
// @route   PUT /api/bings/:id
// @access  Private
const updateBing = asyncHandler(async (req, res) => {
  const bing = await Bing.findById(req.params.id)

  if (!bing) {
    res.status(404)
    throw new Error('饼被吃掉啦~')
  }

  // checking for th ecorrect user
  if (!req.user) {
    res.status(404)
    throw new Error('User not found')
  }

  if (bing.user.toString() !== req.user._id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  const updatedBing = await Bing.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updatedBing)
})

// @desc    Delete bing
// @route   DELETE /api/bings/:id
// @access  Private
const deleteBing = asyncHandler(async (req, res) => {
  const bing = await Bing.findById(req.params.id)

  if (!bing) {
    res.status(404)
    throw new Error('饼被吃掉啦~')
  }

  await bing.remove()

  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getBings,
  setBing,
  updateBing,
  deleteBing,
}
