"use client";
import { useEffect, useState } from "react";
import ClassData from "@/data.json";

export default function Students() {
  const [showAttendance, setShowAttendance] = useState(true);
  const [students, setStudents] = useState(
    ClassData.map((student) => {
      return {
        ...student,
        isAttended: false,
      };
    })
  );

  const handleClick = (studentId) => {
    const updatedStudents = students.map((student) => {
      if (student.id === studentId) {
        return {
          ...student,
          isAttended: !student.isAttended,
        };
      }
      return student;
    });

    setStudents(updatedStudents);
  };

  useEffect(() => {
    console.log(students);
  }, [students]);

  return (
    <>
      {showAttendance ? (
        <div className="studentContainer">
          <h1 className="title">Öğrenci Listesi</h1>
          <div>
            <ul className="titlenav">
              <li>İsim Soyisim </li>
              <li>Öğrenci Num.</li>
              <li>Sınıf</li>
              <li>yoklama</li>
            </ul>
            {students.map((student) => (
              <ul className="student" key={student.id}>
                <li>
                  <p className="studentName">{student.name}</p>
                  <p className="studentNum">{student.studentNumber}</p>
                  <p className="studentClass">{student.class}</p>
                  <p className="input">
                    <input
                      onClick={() => handleClick(student.id)}
                      type="checkbox"
                    />
                  </p>
                </li>

                <li></li>
              </ul>
            ))}
          </div>
          <button
            className="yoklamaBtn"
            onClick={() => setShowAttendance(false)}
          >
            Yoklamayı Tamamla
          </button>
        </div>
      ) : (
        <div className="studentContainer">
          <h1 className="title">Öğrenci Listesi</h1>
          <ul className="titlenav">
            <li>Öğrenci Num.</li>
            <li>İsim Soyisim </li>
            <li>Sınıf</li>
            <li>yoklama</li>
          </ul>
          <ul className="student active ">
            {students.map((student) => (
              <li key={student.id}>
                <p className="studentNum">{student.studentNumber}</p>
                <p className="studentName">{student.name}</p>
                <p className="studentClass">{student.class}</p>-
                {student.isAttended ? "VAR" : "YOK"}
              </li>
            ))}
          </ul>
          <div className="sonuc">
            <span>
              Katılan öğrenci sayısı :
              {students.filter((x) => x.isAttended).length}
            </span>
            <br />
            <span>
              Katılmayan öğrenci sayısı :
              {students.filter((x) => !x.isAttended).length}
            </span>
          </div>
        </div>
      )}
    </>
  );
}
