import style from "./page.module.css";
import PassGenerator from "@/components/PassGenerator/PassGenerator";

export default function Home() {
  return (
    <main className={style.main}>
      <PassGenerator />
    </main>
  );
};