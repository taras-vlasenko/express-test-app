const validate = (obj, props) => {
    let msg = null;
    return {
       isValid: props.every(prop => {
            if (obj.hasOwnProperty(prop) && obj[prop].length !== 0) {
                return true
            }
            msg = `${prop} is missing`;
            return false
        }),
        errorMessage: msg
    }
};

module.exports = { validate };