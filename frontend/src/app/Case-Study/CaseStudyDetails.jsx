
import Image from "next/image";
import caseStudies from "../../data/caseStudyGrid.json";

export default function CaseStudyDetail({ params }) {
  const { slug } = params;

  // Find case study by id
  const caseStudy = caseStudies.find((item) => String(item.id) === slug);

  if (!caseStudy) {
    return <p className="text-center py-12">Case study not found.</p>;
  }

  return (
    <section className="py-12 px-6 max-w-5xl mx-auto ">
        <h1 className="text-3xl font-bold mb-4 text-center">{caseStudy.title}</h1>
      {caseStudy.image && (
        <div className="flex justify-center mb-6 pt-10">
          <Image
            src={`/${caseStudy.image}`}
            alt={caseStudy.title}
            width={800}
            height={400}
            className="rounded-md pt-10"
          />
        </div>
      )}

    

      {caseStudy.subtitle && (
        <p className="text-gray-600 mb-4">
          {Array.isArray(caseStudy.subtitle)
            ? caseStudy.subtitle.join(", ")
            : caseStudy.subtitle}
        </p>
      )}

      {caseStudy.objective && (
        <div className="mb-4">
          <h2 className="font-semibold text-xl mb-2">Objective</h2>
          {Array.isArray(caseStudy.objective)
            ? caseStudy.objective.map((obj, i) => <p key={i}>{obj}</p>)
            : <p>{caseStudy.objective}</p>}
        </div>
      )}

      {caseStudy.challenges && (
        <div className="mb-4">
          <h2 className="font-semibold text-xl mb-2">Challenges</h2>
          <ul className="list-disc list-inside">
            {caseStudy.challenges.map((ch, i) => (
              <li key={i}>{ch}</li>
            ))}
          </ul>
        </div>
      )}

      {caseStudy.solution && (
        <div className="mb-4">
          <h2 className="font-semibold text-xl mb-2">Solution</h2>
          {Array.isArray(caseStudy.solution)
            ? caseStudy.solution.map((sol, i) => <p key={i}>{sol}</p>)
            : <p>{caseStudy.solution}</p>}
        </div>
      )}

      {caseStudy.results && (
        <div className="mb-4">
          <h2 className="font-semibold text-xl mb-2">Results</h2>
          {Array.isArray(caseStudy.results)
            ? caseStudy.results.map((res, i) => <p key={i}>{res}</p>)
            : typeof caseStudy.results === "object"
            ? Object.entries(caseStudy.results).map(([k, v], i) => (
                <p key={i}>
                  <strong>{k}:</strong> {v}
                </p>
              ))
            : <p>{caseStudy.results}</p>}
        </div>
      )}

      {caseStudy.keyFeatures && (
        <div className="mb-4">
          <h2 className="font-semibold text-xl mb-2">Key Features</h2>
          <ul className="list-disc list-inside">
            {caseStudy.keyFeatures.map((kf, i) => (
              <li key={i}>{kf}</li>
            ))}
          </ul>
        </div>
      )}

      {caseStudy.conclusion && (
        <div className="mb-4">
          <h2 className="font-semibold text-xl mb-2">Conclusion</h2>
          {Array.isArray(caseStudy.conclusion)
            ? caseStudy.conclusion.map((con, i) => <p key={i}>{con}</p>)
            : <p>{caseStudy.conclusion}</p>}
        </div>
      )}
    </section>
  );
}
