import { useParams, Link } from "react-router-dom";

export default function CollectionDetail() {
  const { collectionName } = useParams();
  const displayName = collectionName
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
  return (
    <section className="max-w-4xl mx-auto py-10 px-2 text-center">
      <h2 className="text-3xl font-extrabold text-[#e10053] mb-4">
        {displayName} Collection
      </h2>
      <p className="text-[#c3547d] mb-8">40 unique styles coming soon!</p>
      <Link
        to="/"
        className="px-4 py-2 bg-[#b93d6a] text-[#f8d4e6] rounded-lg font-semibold shadow hover:bg-[#c3547d] transition-colors"
      >
        Back to Collections
      </Link>
    </section>
  );
}
