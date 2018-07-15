const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()

router.get('/test', (req, res) => {
	res.json({
		confirmation: 'success',
        data: 'this is a test endpoint'
    })
})

router.post('/register', (req, res) => {
	res.json({
		confirmation: 'success',
        data: req.body
    })
})

router.post('/login', (req, res) => {
	res.json({
		confirmation: 'success',
        data: req.body
    })
})

module.exports = router
