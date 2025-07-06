import { useParams, Link } from "react-router-dom";

export default function CollectionDetail() {
  const { collectionName } = useParams();
  const displayName = collectionName
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return (
    <section className="max-w-4xl mx-auto py-16 px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#e10053] mb-4">
        {displayName} Collection
      </h2>
      <p className="text-[#c3547d] text-lg mb-8">Coming soon!</p>
      <Link
        to="/"
        className="px-6 py-3 bg-[#e10053] text-white rounded-lg font-semibold shadow hover:bg-[#c3547d] transition-colors"
      >
        Back to Home
      </Link>
    </section>
  );
}
