import StarBackground from "@/components/ui/Starbackground";
import Link from "next/link";
const notFound = () => {
  return (
    <section className="not-found ">
      <StarBackground />
      <div className="z-10 relative h-screen flex items-center flex-col gap-4 justify-center text-white ">
        <h1 className="text-white font-extrabold text-5xl md:text-8xl">
          404
        </h1>
        <p className="text-white font-extrabold text-5xl md:text-8xl tracking-wider">
          Page Not Found
        </p>
        <Link href={"/"} className="border hover:bg-white text-2xl font-extrabold tracking-wide hover:text-black px-3 py-3 rounded-md pointer">
          Go Home
        </Link>
      </div>
    </section>
  );
};

export default notFound;
