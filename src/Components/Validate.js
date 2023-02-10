
//Conditions are written to validate the form 
export default function validate(values){
    let erors = {};

    if(!values.name.trim()){
        erors.name = "Name required"
    }

    if(!values.email.trim()){
        erors.email = "Email required";
    }
    else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)){
        erors.email = "Email address invalid";
    }

    if(!values.number.trim()){
        erors.number = "Number requiered";
    }
    
    return erors;
}