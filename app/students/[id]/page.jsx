import ClassData from "@/data.json";

export default async function StudentDetail({ params }) {
  const { id } = params;

  const student = ClassData.find((x) => x.id == id);

  console.log(student);
  return (
    <div className="studentsContainer">
      <div className="studentDetail">
        <div className="studentDet">
          <h1>{student.name}</h1>
          <h2>{student.studentNumber}</h2>
          <h3>{student.class}</h3>
        </div>
        <div className="contact">
          <h3>{student.details.contact.email}</h3>
          <h3>{student.details.contact.phone}</h3>
          <h3>{student.details.contact.address}</h3>
        </div>
        <div className="activities">
          <h3>Kulübü : {student.details.extraActivities}</h3>
        </div>
        <div className="notes">
          <h3>Başarı durumu : {student.details.notes}</h3>
        </div>
      </div>
    </div>
  );
}
