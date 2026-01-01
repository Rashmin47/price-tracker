import Image from "next/image";

export default function Home() {
  return (
    <main>
      <header>
        <div>
          <div
            className=" flex items-center gap-3
          "
          >
            <Image src={"/deal-drop-logo.png"} alt="Deal Drop Logo" />
          </div>
        </div>
      </header>
    </main>
  );
}
