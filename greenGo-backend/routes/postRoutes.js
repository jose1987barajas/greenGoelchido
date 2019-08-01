const { Router } = require('express')
const router = Router()
const { newPost, getPosts } = require('../controllers/postController')

router.get('/', getPosts)
router.post('/new', newPost)
module.exports = router
