import Link from "next/link";
export default function Nav() {
  return (
    <>
      <div className="nav">
        <Link href="/students">Öğrenci Listesi</Link>
        <Link href="/yoklama">Yoklama Listesi</Link>
        <Link href="/sinif">Sınıflar</Link>
      </div>
    </>
  );
}
