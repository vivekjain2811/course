import React from "react";
import Hello from "./Hello";

function Cards(props){
    let Course=props.Course;
    
function getcourse(){
let allcourses=[];
    Object.values(Course).forEach(array=>{
        array.forEach(courseData=>{
            allcourses.push(courseData);
        })
    })
    return allcourses;
}
return(
    <div>
{getcourse().map((course)=>{
    <Hello key={course.id} course={course}></Hello> 
})
  
}
    </div>
)



}
export default Cards;