function Student(){
    return (
        <div>
            <h2>Student Profile</h2>
            <p>Name: Akhil</p>
            <p>Age: 20</p>
            <p>Major: Computer Science</p>
        </div>
    );
}
function StudentManagement() {
  return (
    <div>
      <h1>Student Management System</h1>
        <Student />
    </div>
  );
}
export default StudentManagement;