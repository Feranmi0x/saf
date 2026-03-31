import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link"; // import Link

const kazimir = localFont({
  src: [
    { path: "../../app/fonts/fonnts.com-Kazimir-Text-Medium.otf", weight: "400", style: "normal" },
  ],
  variable: "--font-kazimir",
  display: "swap",
});

export default function SafLogo() {
  return (
    <Link href="/" className="flex items-center gap-2 ml-4">
      {/* Logo Image */}
      <div className="overflow-hidden rounded-md ml-6">
        <Image
          src="/saflogo.jpg"
          alt="SAF Logo"
          width={35}
          height={35}
          className="object-cover"
          priority
        />
      </div>

      {/* Logo Text */}
      <div
        className={`${kazimir.className} text-[12px] tracking-widest text-shadow-gray-950 mr-10 hidden md:flex flex-col leading-tight`}
      >
        <span>Sam Anisulowo</span>
        <span>Foundation</span>
      </div>
    </Link>
  );
}