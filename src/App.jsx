import React, { useState } from "react";

const App =()=>
{
   
    const[fullName,setFullName]=useState(
    {
        fname:'',
        lname:'',
        email:'',
        phone:'',
    });
    // //const[fullname,setFullname]=useState();
    // const[lastName,setlastname]=useState("");
    // const[fullname,setFullname]=useState();
    // const [lastNamenew,selastNamenew]=useState("");
    
    // eslint-disable-next-line 
    const  inputEvent=(event)=>
    {
        console.log(event.target.value);
        console.log(event.target.name);

        // const value =event.target.value;
        // const name =event.target.name;
        const{value,name}=event.target;

        setFullName((preValue)=>
        {
            console.log(preValue);

            return{
                ...preValue,
                [name]:value,
            }

            // if(name ==='fname')
            // {
            //     return{
            //     fname:value,
            //     lname:preValue.lname,
            //     email:preValue.email,
            //     phone:preValue.phone,
            // };
            
            //  }
            // else if(name ==='lname')
            // {
            //     return{
            //     fname:preValue.fname,
            //     lname:value,
            //     email:preValue.email,
            //     phone:preValue.phone,
            // };
            // }
            // else if(name ==='email')
            // {
            //     return{
            //     fname:preValue.fname,
            //     lname:preValue.lname,
            //     email:value,
            //     phone:preValue.phone,
            // };
            // }
            // else if(name ==='phone')
            // {
            //     return{
            //     fname:preValue.fname,
            //     lname:preValue.lname,
            //     email:preValue.email,
            //     phone:value,
            // };
            // }



        }
        )};
       

    
    const onSubmit=(event)=>
    {
        Event.preventDefault();
        alert("form submitted");
        // setFullname(name);
        // selastNamenew(lastName);
    };
    // const inputEventtwo=(event)=>
    // {
    //  setlastname(event.target.value);
    // };
return(
    <>
        <div className="main_div">
        <form onSubmit={onSubmit}>
        <h1>Hello {fullName.fname} {fullName.lname}</h1>
        <p>{fullName.email}</p>
        <p>{fullName.phone}</p>
        <br/>
        <input type='test'
         placeholder="Enter your Name" 
         name="fname" 
         onChange={inputEvent}
         value={fullName.fname} /> 
        <br/>
        <input type="text"
         placeholder="Enter your LastName" 
        name="lname" 
        onChange={inputEvent}
        value={fullName.lname}
        />
        <br/>
        <input type="email"
         placeholder="Enter your Email" 
        name="email" 
        onChange={inputEvent}
        value={fullName.email}
        autoComplete="off"
        />
        <br/>
        <input type="number"
         placeholder="Enter your Mob. Number" 
        name="phone" 
        onChange={inputEvent}
        value={fullName.phone}
        />

        <button type="submit">Click me</button>
        </form>
        </div>
    </>
  
    );
};
export default App;