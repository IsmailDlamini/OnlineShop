import bcrypt from 'bcrypt'

const users = [
    
   {
        name : "Admin",
        email : "admin@example.com",
        password : bcrypt.hashSync("Admin1234", 10),
        isAdmin:true,
    },
    {
        name : "Ismail",
        email : "iii409475@gmail.com",
        password : bcrypt.hashSync("Ismail121", 10),
    },  


  ];
  
  export default users