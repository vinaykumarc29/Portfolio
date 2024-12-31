const skills=document.querySelector(".Skills");
const Education=document.querySelector(".Education");
const Experience=document.querySelector(".Experience");
const btn1 = document.querySelector(".button1").addEventListener("click",()=>{updateSkills();});
const btn2 = document.querySelector(".button2").addEventListener("click",()=>{updateEducation();});
const btn3 = document.querySelector(".button3").addEventListener("click",()=>{updateExperience();});



const updateSkills =()=>{
    skills.classList.remove("d-none");
    Education.classList.add("d-none");
    Experience.classList.add("d-none");
}
const updateEducation =()=>{
    skills.classList.add("d-none");
    Education.classList.remove("d-none");
    Experience.classList.add("d-none");
}
const updateExperience =()=>{
    skills.classList.add("d-none");
    Education.classList.add("d-none");
    Experience.classList.remove("d-none");
}

const submit= document.querySelector("#submit").addEventListener("click",(event)=>{
    event.preventDefault();
    const form =document.querySelector("#form");
    form.reset();
    alert("This feature demands knowledge of backend which i dont have it will come very soon");
    
    
})

