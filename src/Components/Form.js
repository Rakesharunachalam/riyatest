import React from 'react'
import useForm from './useForm'
import validate from './Validate';


//Form table is created and input are validated in a separate component name validate.js,
// onchange event is triggered & onsubmit handle function will validate and form will be submitted
//and return back to original state.
 
function Form() {

  const {handleChange,values,handleSubmit,error} = useForm(validate);

  return (
    <div className='form-main' id='con'>
    <div className='form-tittle'>
    <h1>Enquiry Us</h1>
    </div>
    <form className='enquiry-form' onSubmit={handleSubmit}>
    <div className="form-group">
      <label htmlFor='name'>Name</label>
      <input style={{width:'25rem'}} 
      onChange={(e)=>{
        handleChange('name',e.target.value)
    }}
      type="name" 
      className="form-control" id="name"
       aria-describedby="emailHelp"
        placeholder="Enter name"
        value={values.name}
       ></input>
       {error.name && <p>{error.name}</p>}
      <small id="emailHelp" className="form-text text-muted">We'll never share your name with anyone else.</small>
    </div>
    <div className="form-group">
      <label htmlFor='email'>Email address</label>
      <input style={{width:'25rem'}} 
      onChange={(e)=>{
        handleChange('email',e.target.value)
    }}
      type="email" className="form-control" id="email" 
      aria-describedby="emailHelp" placeholder="Enter email"
      value={values.email}
      ></input>
       {error.email && <p>{error.email}</p>}
      <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div className="form-group">
      <label htmlFor='number'>Contact Number</label>
      <input style={{width:'25rem'}} 
      onChange={(e)=>{
        handleChange('number',e.target.value)
    }}
      type="number" className="form-control" id="number"
       aria-describedby="emailHelp" placeholder="Enter number"
       value={values.number}
       ></input>
       {error.number && <p>{error.number}</p>}
      <small id="emailHelp" className="form-text text-muted">We'll never share your number with anyone else.</small>
    </div>
    <div className="form-group">
      <label for="time">Time to contact</label>
      <input style={{width:'25rem'}} 
      onChange={(e)=>{
        handleChange('time',e.target.value)
    }}
      type="datetime-local" 
      className="form-control" id="time" 
      value={values.time}
      placeholder="time"></input>
    </div>

    <div className="form-group">
      <label htmlFor='message'>Drop your message</label>
      <input style={{width:'25rem'}} 
      onChange={(e)=>{
        handleChange('message',e.target.value)
    }}
      type="message" className="form-control" id="message" 
      aria-describedby="emailHelp" placeholder="Hi I am Rakesh..."
      value={values.message}
      ></input>
       {error.message && <p>{error.message}</p>}
      
    </div>
             
    <button style={{marginTop:'20px'}} 
    type="submit" value="submit"
     className="btn btn-primary">Submit</button>
  </form>
  </div>
  )
}

export default Form