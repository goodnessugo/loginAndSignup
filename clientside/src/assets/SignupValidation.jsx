function Validation(values) {
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    // const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
    const password_pattern = /^([a-zA-Z0-9]){8,}$/

    // the name validation
    if(values.name === "") {
        error.name = "Name should not be empty"
    }
    else {
        error.name = ""
    }

// the email validation
    if(values.email === "") {
        error.email = "Name should not be empty"
    }
    else if(!email_pattern.test(values.email)) {
       error.email = "Email don't match"  
    }else {
        error.email = ""
    }



    if(values.password === "") {
        error.password = "Password should not be empty"
    }
    else if(!password_pattern.test(values.password)) {
       error.password = "Password don't match"  
    }else {
        error.password = ""
    }
    return error;
}

export default Validation;