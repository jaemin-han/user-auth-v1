const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID});
const router = vertex.router();
const Profile = require('../models/Profile');

router.get('/test', (req, res) => {
	res.json({
		confirmation: 'success',
        data: 'this is a test endpoint'
    })
})

router.get('/currentuser', (req, res) => {
    if (req.vertexSession == null){
        res.json({
            confirmation: 'success',
            user: null
        })
        return
    }
    if (req.vertexSession.user == null){
        res.json({
            confirmation: 'success',
            user: null
        })
        return
    }
    Profile.findById(req.vertexSession.user.id, (err, profile) => {
        if (err) {
            res.json({
                confirmation: 'fail',
                message: err.message
            })
            return
        }
        res.json({
            confirmation: 'success',
            user: profile
        })
    })
})

router.get('/logout', (req, res) => {
    req.vertexSession.reset()
    res.json({
        confirmation: 'success',
        user: null
    })
})


router.post('/register', (req, res) => {
    const body = req.body
    console.log('REGISTER: ' + JSON.stringify(body))
    Profile.create(body, (err, profile) => {
        if (err) {
            res.json({
                confirmation: 'fail',
                message: err.message
            })
            return
        }
        console.log('SUCCESS: ')
        req.vertexSession.user = {id: profile._id.toString()}
        res.json({
            confirmation: 'succeess',
            data: profile
        })
    })
})

router.post('/login', (req, res) => {
    const body = req.body
    const username = body.username

    Profile.find({username: username}, (err, profiles) => {
        if (err) {
            res.json({
                confirmation: 'fail',
                message: err.message
            })
            return
        }
        if (profiles.length == 0){
            res.json({
                confirmation: 'fail',
                message: 'Profile not found'
            })
            return
        }

        const profile = profiles[0]
        const password = body.password
        if (profile.password != password){
            res.json({
                confirmation: 'fail',
                message: 'Incorrect password'
            })
            return
        }
        res.json({
            confirmation: 'success',
            user: profile
        })
    })
})

module.exports = router
