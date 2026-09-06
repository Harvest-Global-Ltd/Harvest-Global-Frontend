import StarBackground from "@/components/ui/Starbackground";
import Link from "next/link";
const notFound = () => {
  return (
    <section className="not-found ">
      <StarBackground />
      <div className="z-10 relative h-screen flex items-center flex-col gap-4 justify-center text-white ">
        <h3 className="text-white text-6xl">404</h3>
        <h3 className="text-white text-6xl">Page Not found</h3>
        <Link href={"/"}>
          <button className="border px-3 py-3 rounded-md2xl pointer">
            Go Home
          </button>
        </Link>
      </div>
    </section>
  );
};

export default notFound;
