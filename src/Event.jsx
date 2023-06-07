import React, {useState} from 'react';
const Event = () =>
{
  const[fullname, setFullName]=useState({
    fname: '',
    lname: '',
    
  });
  

 
const inputEvent =(event) =>
{
  console.log(event.target.value);
  console.log(event.target.name);
  
  const name =event.target.name;
  const value= event.target.value;
 
 

  setFullName((preValue) =>
  {
    if(name === 'fname')
    {
      return{
        fname: value,
        lname: preValue.lname,
        
      };
  
    }
    else if(name === 'lname')
    {
      return{
        fname:preValue.fname,
        lname:value,
        
      };
    }
   
  }
 
)};
const onSubmit = (event) =>
   {
      event.preventDefault();
      //alert("form Submitted");

   };

  return(
    <>
      <div>
       <form onSubmit={onSubmit} >
        <h1>Hello,{fullname.fname} {fullname.lname}</h1>
        <br />
        <input 
        type='text'
        placeholder="Enter your Name" 
        onChange={inputEvent}
        name='fname' 
        value={fullname.fname}
         />
        <br />
        <br />
        <input 
        type='text'
        placeholder="Enter your LastName" 
        onChange={inputEvent}
        name='lname' 
        value={fullname.lname}  
        />
        <br />
        <br />
       
        <br />
        <br />
        <button type="submit">Submit 👍</button>
       </form>
      </div>
    </>
  );

}

export default Event;