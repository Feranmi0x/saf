import { kazimir } from "../../lib/fonts";

export default function Styling() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className={`m-6 text-[35px] ${kazimir.className} font-bold`}>Sam Anisulowo Foundation — supporting Ekiti State communities</h1>
        <h1 className={`m-6 text-[14px]`}>SIGN IN</h1>
        <h1 className={`m-6 text-[35px] ${kazimir.className} font-normal`}>Sam Anisulowo Foundation — supporting Ekiti State communities</h1>
        <h1 className={`m-6 font-bold`}>Sam Anisulowo Foundation — supporting Ekiti State communities</h1>
        <h1 className={`m-6 text-[35px] ${kazimir.className} font-bold`}>Sam Anisulowo Foundation — supporting Ekiti State communities</h1>
        <h1 className={`m-6 text-[16px] text-gray-500`}>create an account</h1>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}