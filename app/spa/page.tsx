import { spa } from "@/content/site";

export default function SpaPage() {
  return (
    <div className="spa-theme">
      <section className="px-4 py-20">
        <h1 className="font-display text-6xl md:text-8xl text-off-white uppercase leading-none">
          {spa.headline}
        </h1>
      </section>
    </div>
  );
}
