export const convertErrorsValidation = (errors) => {
    const convertedErrors = {}
    
    errors.forEach(err => {
        if(!convertedErrors[err.path]){
            convertedErrors[err.path] = ''
        }

        convertedErrors[err.path] += ` ${err.msg}`
    })

    return convertedErrors
}
