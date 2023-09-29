const books = require("../databases/databases")


const allBooks = (req, res)=>{
    return res.status(200).json(books.book);
}

const findBook = (req, res)=>{
    const {id} = req.params;
    const find = books.book.find((book)=>{
        return book.id === Number(id);
    })
    if(Number(id) > books.book.length){
        return res.status(404).json({message:"The value of id don't exist"});
    }
    if(!find){
        return res.status(400).json({message: "Invalid number"});
    }
    return res.status(200).json(find);
}

const addBook = (req, res)=>{
    const {id} = req.params;
    const{title, author, edition, numPages} = req.body;
    if (!title || title === ""){
        return res.status(400).json({message: "Invalid title"});
    }
    if (!author || author === ""){
        return res.status(400).json({message: "Invalid author"});
    }
    if (!edition || edition === ""){
        return res.status(400).json({message: "Invalid edition"});
    }   
    if (!numPages || numPages === null){
        return res.status(400).json({message: "Invalid number of pages"});
    } 

    const newBook = {
        id: books.new_id++,
        title,
        author,
        edition,
        numPages
    }
    books.book.push(newBook);
    return res.status(201).send();   
}

const changeBook = (req, res)=>{
    const {id} = req.params;
    const{title, author, edition, numPages} = req.body;
    const find = books.book.find((book)=>{
        return book.id === Number(id);
    })
    if(Number(id) > books.book.length){
        return res.status(404).json({message:"The value of id don't exist"});
    }
    if(!find){
        return res.status(400).json({message: "Invalid number"});
    }

    if (!title || title === ""){
        return res.status(400).json({message: "Invalid title"});
    }
    if (!author || author === ""){
        return res.status(400).json({message: "Invalid author"});
    }
    if (!edition || edition === ""){
        return res.status(400).json({message: "Invalid edition"});
    }   
    if (!numPages || numPages === null){
        return res.status(400).json({message: "Invalid number of pages"});
    } 

    find.title = title;
    find.author = author;
    find.edition = edition;
    find.numPages = numPages;

    return res.status(200).json({message:" Replaced Book"});
}

const patchBook = (req, res)=>{
    const {id} = req.params;
    const{title} = req.body;
    const find = books.book.find((book)=>{
        return book.id === Number(id);
    })
    if(Number(id) > books.book.length){
        return res.status(404).json({message:"The value of id don't exist"});
    }
    if(!find){
        return res.status(400).json({message: "Invalid number"});
    }

    if (!title || title === ""){
        return res.status(400).json({message: "Invalid title"});
    }

    find.title = title;
    return res.status(200).json({message: "Replaced Book"});

}

const removeBook = (req, res)=>{
    const { id } = req.params;
    const find = books.book.find((book)=>{
        return book.id === Number(id);
    })
    if(!find){
        return res.status(400).json({message: "Invalid id"});
    }
    books.book.splice(find, 1);
    return res.status(200).json({message: "Removed book"});
}

module.exports = {allBooks, findBook, addBook, changeBook, patchBook, removeBook}