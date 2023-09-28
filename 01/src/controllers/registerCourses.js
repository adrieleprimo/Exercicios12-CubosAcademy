let { databases } = require("../databases/databases");

const allCourses = (req, res)=>{
    return res.status(200).json(databases.courses);
}

const addCourse = (req, res)=>{
    const {id} = req.params;
    const {title} = req.body;
    if(!title){
        return res.status(400).json({message: "This format is invalid"});
    }
    if(title === ""){
        return res.status(400).json({message: "This format is invalid"});
    }

    const newCourse = {
        id: databases.course_id++,
        title
    }
    databases.courses.push(newCourse)
    return res.status(201).send();
}

const patchCourse = (req,res)=>{
    const {id} = req.params;
    const{title} = req.body;

    const validationId = databases.courses.find((student)=>{
        return student.id === Number(id)
    });
    if(!validationId){
        return res.status(404).json({message: "This id is invalid"});
    }
    validationId.title = title;

    return res.status(201).send();

}
module.exports = {allCourses, addCourse, patchCourse};