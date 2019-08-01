const Post = require('../models/Post')

exports.newPost = async (req, res) => {
  const { title, description } = req.body
  const { img } = req.file
  await Post.create({ title, decription, img })

  res.status(201).json({ message: 'created' })
}

exports.getPosts = async (req, res) => {
  const posts = await Post.find()
  res.status(200).json(posts)
}
