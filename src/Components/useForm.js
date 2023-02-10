import React, { useState } from 'react'

const useForm = (validate) => {

    const [values,setvalues] = useState({
        name:"",
        email:"",
        number:"",
        time:"",
        message:"",
    })

    //An error state is created 
    const [error,seterror] = useState({});

    //Onchange 
    const handleChange = (inpvalues,value) =>{

        setvalues((prevsvalue)=>{
            return{
                ...prevsvalue,
                [inpvalues]:value,
            }
        })

    }
    //Onsubmit
    const handleSubmit =(event)=>{
        event.preventDefault();

        seterror(validate(values))
        setvalues({
            name:"",
            email:"",
            number:"",
            time:"",
            message:"",
        })
        //Back to original state

        
    }


   return{handleChange,values,handleSubmit,error}
};

export default useForm;