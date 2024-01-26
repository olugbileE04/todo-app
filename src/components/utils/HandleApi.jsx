import axios from 'axios'


const baseUrl = "http://localhost:5000"

const getAllToDo =(setToDo)=>{
    axios
    .get(baseUrl)
    .then(({data})=>{
        console.log('data ---->',data);
        setToDo(data);
    })
    
}

const addToDo =(text, setText, setToDo) =>{
    axios
 .post(baseUrl, {text})
 .then((data)=>{
    console.log('data ---->',data);
    setText("");
    getAllToDo(setToDo)
 
 })


}

export {getAllToDo, addToDo}