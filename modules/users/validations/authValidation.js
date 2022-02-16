const Joi = require('@hapi/joi');

const registerSchema = Joi.object({
    fullname: Joi.string()
    .trim()
    .min(6)
    .max(30)
    .required(),

    password: Joi.string()
    .required(),
    // .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

    // repeat_password: Joi.ref('password'),

    email: Joi.string()
    .trim()
    .lowercase()
    .email({minDomainSegments: 2, tlds: { allow: ['com', 'net', 'in']}})
})

// .with('password', 'repeat_password')

module.exports = {registerSchema}
