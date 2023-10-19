import React, { useEffect, useState } from 'react';
import userStyle from '@/styles/users.module.css'
import Link from 'next/link';


const Users = () =>
{
    const [users , setUsers] = useState([]);

    useEffect(() => {
        fetch (`https://jsonplaceholder.typicode.com/users`)
        .then((res)=>res.json())
        .then((data) => setUsers(data));
    } , []);


    
      


   

    


    return (

      <div className="container">
      
      
        
            <h1> Hello from User page </h1>

           
            <div className="row" >
            {users.map((value,index)  => (
                <div key = {index} className="col-md-4" >

                    <div className="border my-3 p-3">
                   
                  
                   <p className=""> ID : {value.id}</p>

                   <p> Name : {value.name}</p>

                   <p> user name : {value.username}</p>
                   <p> Email : {value.email}</p>
<Link href ={`users/details/${value.id}`} className="btn btn-primary">
    Details
</Link>
            
               

</div>
</div>
                   
   
               
            ))}
           
        </div>

        </div>
    );
};

export default Users;



