function manageStudents(callback){
    setTimeout(() => {callback();},1000);
}

function updateStudent(){
    console.log("Updating student information...");
}

manageStudents(updateStudent);