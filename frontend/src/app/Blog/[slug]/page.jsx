"use clent"
import Image from "next/image";
import blogs from "../../../../public/data/blogDetails.json";


export default async function BlogDetail({ params }) {
  const { slug } = await params; // 👈 Fix

  // Match blog by ID or slug (case-insensitive)
  const blog = blogs.find(
    (b) =>
      String(b.id) === slug ||
      (b.slug && b.slug.toLowerCase() === slug.toLowerCase())
  );

  if (!blog) {
    return <div className="p-10 text-center text-red-500">Blog not found</div>;
  }

  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-4 mt-15">
        {blog.post_title || blog.title}
      </h1>

      {/* Meta Info */}
      {(blog.post_author || blog.date_day) && (
        <div className="flex flex-wrap gap-4 text-gray-500 text-sm mb-6">
          {blog.post_author && <span>By {blog.post_author}</span>}
          {blog.comment_number && <span>{blog.comment_number} Comments</span>}
          {blog.date_day && blog.date_month && (
            <span>
              {blog.date_day} {blog.date_month}
            </span>
          )}
        </div>
      )}

      {/* Main Image */}
      {blog.image && (
        <Image
          src={`/${blog.image}`}
          alt={blog.post_title || blog.title}
          width={800}
          height={400}
          className="rounded-lg mb-6"
        />
      )}

      {/* Intro / Description */}
      {blog.introduction ? (
        <p className="text-lg text-gray-700 mb-6">{blog.introduction}</p>
      ) : (
        blog.description && (
          <p className="text-lg text-gray-700 mb-6">{blog.description}</p>
        )
      )}

      {/* Sub Title */}
      {blog.sub_title && (
        <h2 className="text-2xl font-semibold mt-8 mb-4">{blog.sub_title}</h2>
      )}

      {/* ✅ Handle "standard_post" style */}
      {[...Array(10)].map((_, i) => {
        const title = blog[`standard_post${i + 1}_title`];
        const desc = blog[`standard_post${i + 1}_description`];
        if (!title && !desc) return null;
        return (
          <div key={i} className="mb-6">
            {title && <h3 className="text-xl font-bold mb-2">{title}</h3>}
            {desc && <p className="text-gray-700">{desc}</p>}
          </div>
        );
      })}

      {/* ✅ Handle sections array */}
      {blog.sections?.length > 0 && (
        <div className="space-y-6">
          {blog.sections.map((s, i) => (
            <div key={i}>
              <h3 className="text-xl font-bold mb-2">{s.title}</h3>
              <p className="text-gray-700">{s.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* ✅ Handle components array */}
      {blog.components?.length > 0 && (
        <div className="space-y-6 mt-10">
          {blog.components.map((c, i) => (
            <div key={i}>
              <h3 className="text-xl font-bold mb-2">{c.title}</h3>
              <p className="text-gray-700">{c.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* ✅ Handle benefits */}
      {blog.benefits?.length > 0 && (
        <div className="mt-10 space-y-6">
          {blog.benefitsImage && (
            <Image
              src={`/${blog.benefitsImage}`}
              alt="Benefits"
              width={800}
              height={400}
              className="rounded-lg mb-6"
            />
          )}
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {blog.benefits.map((b, i) =>
              typeof b === "string" ? (
                <li key={i}>{b}</li>
              ) : (
                <li key={i}>
                  <strong>{b.title}:</strong> {b.description}
                </li>
              )
            )}
          </ul>
        </div>
      )}

      {/* ✅ Handle timeline */}
      {blog.timeline && (
        <div className="mt-10 space-y-8">
          {Object.entries(blog.timeline).map(([period, data], i) => (
            <div key={i} className="p-4 border rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold capitalize mb-2">
                {period.replace(/_/g, " ")}
              </h3>
              {data.summary && (
                <p className="text-gray-700 mb-2">{data.summary}</p>
              )}
              {["challenges", "achievements", "strategies", "realizations"].map(
                (field) =>
                  data[field] && (
                    <ul
                      key={field}
                      className="list-disc list-inside text-gray-700 mb-2"
                    >
                      {data[field].map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  )
              )}
              {data.personal_note && (
                <p className="italic text-gray-600">{data.personal_note}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* ✅ Quotes */}
      {blog.quotes?.length > 0 && (
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Quotes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {blog.quotes.map((q, i) => (
              <li key={i}>"{q}"</li>
            ))}
          </ul>
        </div>
      )}

      {/* ✅ Guidelines */}
      {blog.guidelines && (
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">
            {blog.guidelines.title}
          </h2>
          <p className="text-gray-700">{blog.guidelines.description}</p>
        </div>
      )}

      {/* ✅ Conclusion */}
      {blog.conclusion && (
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">
            {blog.conclusion.title || "Conclusion"}
          </h2>
          <p className="text-gray-700">
            {blog.conclusion.description || blog.conclusion}
          </p>
        </div>
      )}

      {/* ✅ External Links */}
      {blog.link || blog.links?.length > 0 ? (
        <div className="mt-10 space-y-2">
          {blog.link && (
            <a
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline text-lg block"
            >
              Read more →
            </a>
          )}
          {blog.links?.map((lnk, i) => (
            <a
              key={i}
              href={lnk}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline block"
            >
              {lnk}
            </a>
          ))}
        </div>
      ) : null}
    </section>
  );
}
