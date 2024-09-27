import ClassData from "@/data.json";
import Link from "next/link";

export default async function Students() {
  const students = ClassData;
  return (
    <>
      <div className="studentContainer">
        <h1 className="title">Öğrenci Listesi</h1>
        <div>
          <ul className="titlenav">
            <li>Ad Soyad</li>
            <li>Öğrenci Num.</li>
            <li>Detay</li>
          </ul>
          {students.map((student) => (
            <ul className="student" key={student.id}>
              <li>
                <p className="studentName">{student.name}</p>
                <p className="studentNum">{student.studentNumber}</p>
                <p>
                  <Link className="detail" href={`/students/${student.id}`}>
                    Göster
                  </Link>
                </p>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
}
