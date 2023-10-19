import React, { useEffect, useState } from 'react';

const country = () => {

    const [country , setCountry] = useState([]);

    useEffect(() => {
        fetch (`https://restcountries.com/v2/all`)
        .then((res)=>res.json())
        .then((data) => setCountry(data));
    } , []);




    return (
        
      <div className="container">
      
      
        
      <h1> Hello from User page </h1>

     
      <div className="row" >
      
      {country.map((value,index)  => (
          <div key = {index} className="col-md-4" >

              <div className="border my-3 p-3">
             
            
           
             <p> Name : {value.name}</p>

             


         

</div>
</div>
             

         
      ))}
     
  </div>

  </div>
    );
};

export  default country;