const joiErrorFormatter = (newErrors)=>{
    const errors = {}
    const details = newErrors.details
    details.map(d => {
        errors[d.path] = [d.message]
    })
    return errors
}

const mongooseErrorsFormatter = (newErrors) =>{
    const errors = {}
    const details = newErrors.errors
    for(const key in details){
        errors[key] = [details[key].message]
    }
    return errors
}

module.exports = {joiErrorFormatter, mongooseErrorsFormatter}