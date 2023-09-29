const guests = require("../databases/databases")

const allGuests = (req, res)=>{
    return res.status(200).json(guests);
}

const findGuest = (req, res)=>{
    const {name} = req.query;
    let guestsNames = guests;
    if(name){
     guestsNames = guests.find((string)=>{
        return string === name;
       })
       if(!guestsNames){
        return res.status(404).json({message: "This name don't exist"});    
       }
    }
    return res.status(200).json({message: "Guest Present"});
}

const addGuest = (req, res)=>{
    const {name} = req.body;
    if(!name || name === ""){
        return res.status(200).json({message: "Please, we need a name"});
    }

    const findName = guests.find((string)=>{
        return string === name;
       })
       if(findName){
        return res.status(400).json({message: "This name is in the guest list"})
       }
    const newGuest = {
        name
    }
    guests.push(newGuest);
    return res.status(201).json({message: "guest added"});
}

const deleteGuest = (req, res)=>{
    const {name} = req.query;
     const guestsNames = guests.find((string)=>{
        return string === name;
       })
       if(!guestsNames){
        return res.status(404).json({message: "This name don't exist"});    
       }
       guests.splice(guestsNames, 1);
       return res.status(200).json({message: "We remove this guest"})
}

module.exports = {allGuests, findGuest, addGuest, deleteGuest};