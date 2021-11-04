import { v4 as uuidv4 } from 'uuid';

let users=[]

export const getUsers=(req,res)=>{
    /*console.log(users);
    res.send('Hello World');
   */ res.send(users);
}

export const createUsers=(req,res)=>{
    const user=req.body;
    users.push({...user,id:uuidv4()}); // everytime new object create, new unique id created.
    res.send(`Users with the name ${user.firstName} added to database`);
}

export const createUser=(req,res)=>{
    const{id} =req.params;
    const foundUser=users.find((user)=>user.id==id); 
    res.send(foundUser)
}

export const deleteUser=(req,res)=>{
    const {id}=req.params;  

    users=users.filter((user)=>user.id!=id);  
    
    res.send(`User with the id ${id} has been delete`)
}

export const updateUser=(req,res)=>{
    const {id}=req.params;// received id
    
    const{firstName,lastName,age}=req.body;  // receive all the info want to change in json format

    const user=users.find((user)=>user.id==id);// find which user what to update by id from req.params

    if(firstName) user.firstName=firstName;
    if(lastName) user.lastName=lastName;
    if(age) user.Age=Age;

    res.send(`User with the id ${id} has been updated`)
}