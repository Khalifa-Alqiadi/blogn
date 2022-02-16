const express = require("express")
const routes = express.Router();
const {
    addUser
} = require("../modules/users/service/userService")
const {
    registerSchema
} = require("../modules/users/validations/authValidation")
const {
    joiErrorFormatter,
    mongooseErrorsFormatter
} = require('../utils/validationFormattre')


const m1 = (req, res, next) =>{
    req.user = 'khalifa@gmail.com'
    next()
}

const m2 = (req, res, next) =>{
    console.log(req.url)
    if(req.user == 'khalifa@gmail.com'){
        res.redirect('/admin')
    }else{
        res.status(404).render('404')
    }
    next();
}


routes.get('/register', (req, res) => {
    return res.render('register', {
        message: {},
        FormData: {},
        errors: {}
    });
});


routes.post('/register', async (req, res) => {
    try {
        const validationResult = registerSchema.validate(req.body, {
            abortEarly: false
        })
        if (validationResult.error) {
            return res.render('register', {
                message: {
                    type: 'error',
                    body: 'Validation Error'
                },
                errors: joiErrorFormatter(validationResult.error),
                FormData: req.body
            })
        }
        const user = await addUser(req.body);
        return res.render('register', {
            message: {
                type: 'success',
                body: 'regisration success '
            },
            errors: {},
            FormData: req.body
        });
    } catch (e) {
        return res.status(400).render('register', {
            message: {
                type: 'error',
                body: 'Validation Error'
            },
            errors: mongooseErrorsFormatter(e),
            FormData: req.body
        })
    }
})

routes.get('/login', (req, res) => {
    return res.render('login', {
        message: {},
        FormData: {},
        errors: {}
    });
});


routes.post('/login', m1, m2, (req, res) => {
    console.log(req.user)
    return res.render('login', {
        message: {
            type: 'success',
            body: 'Login Success'
        },
        FormData: {},
        errors: {}
    });
});

module.exports = routes