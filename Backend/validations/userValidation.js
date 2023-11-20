function validation(values){
    let error ={}
    const username_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if(values.email===""){
        error.email ="Email field is required"
    }
    else if(!username_pattern.test(values.username)){
        error.username ="Invalid username "
    }else{
        error.username
    }

}