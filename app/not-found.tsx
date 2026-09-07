import StarBackground from "@/components/ui/Starbackground";
import Link from "next/link";
const notFound = () => {
  return (
    <section className="not-found ">
      <StarBackground />
      <div className="z-10 relative h-screen flex items-center flex-col gap-4 justify-center text-white ">
        <h1 className="text-white text-6xl">404</h1>
        <p className="text-white text-4xl">Page Not Found</p>
        <Link href={"/"} className="border px-3 py-3 rounded-md2xl pointer">
          Go Home
        </Link>
      </div>
    </section>
  );
};

export default notFound;
