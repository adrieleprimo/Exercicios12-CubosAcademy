let {students, student_id, databases} = require("../databases/databases")

const allStudents =  (req, res)=>{
    return res.status(200).json(databases.students);
}

const newStudent = (req, res)=>{
    const {id} = req.params;
    const {name, lastname, age, course} = req.body;
    if(!name){
        return res.status(400).json({message: "Invalid name"});
    }
    if(!lastname){
        return res.status(400).json({message: "Invalid last name"});
    }
    if(!age){
        return res.status(400).json({message: "Invalid age"});
    }
    if(!course){
        return res.status(400).json({message: "Invalid course"});
    }
    if(lastname === "" || name === "" || course === ""){
        return res.status(400).json({message: "Invalid information"});
    }
    if(age <18){
        return res.status(400).json({message: "Invalid age"});
    }

    const student = {
        id: student_id++,
        name,
        lastname,
        age,
        course
    }
    students.push(student);
    return res.status(201).send();
}

const findStudent = (req, res)=>{
    const {id} = req.params;
    const validationId = databases.students.find((student)=>{
        return student.id === Number(id);
    }); 
    if(!validationId){
        return res.status(404).json({message: "This id is invalid"});
    } 

    return res.status(200).json(validationId);
}

const deleteStudent = (req, res)=>{
    const {id} = req.params;
    const validationId = databases.students.find((student)=>{
        return student.id === Number(id)
    });
    if(!validationId){
        return res.status(404).json({message: "This id is invalid"});
    }
    students.splice(validationId,1);
    return res.status(200).json(students);
}

const putStudent = (req,res)=>{
    const {id} = req.params;
    const{name, lastname, age, course} = req.body;

    if(!name){
        return res.status(400).json({message: "Invalid name"});
    }
    if(!lastname){
        return res.status(400).json({message: "Invalid last name"});
    }
    if(!age){
        return res.status(400).json({message: "Invalid age"});
    }
    if(!course){
        return res.status(400).json({message: "Invalid course"});
    }
    if(lastname === "" || name === "" || course === ""){
        return res.status(400).json({message: "Invalid information"});
    }
    if(age <18){
        return res.status(400).json({message: "Invalid age"});
    }

    const validationId = databases.students.find((student)=>{
        return student.id === Number(id)
    });
    if(!validationId){
        return res.status(404).json({message: "This id is invalid"});
    }
    validationId.name = name;
    validationId.lastname = lastname;
    validationId.age = age;
    validationId.course = course;

    return res.status(201).send();

}




module.exports = {allStudents, newStudent, findStudent, deleteStudent, putStudent}