"use client";

import { useParams, useSearchParams } from "next/navigation";
import ApplyForm from "../ApplyForm";

export default function ApplyPage() {
  const { id } = useParams();
  const searchParams = useSearchParams();
  const jobTitle = searchParams.get("title") || "Unknown Position";

  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold mb-6 mt-24 text-center">
        Apply for: {jobTitle}
      </h2>
      <ApplyForm jobTitle={jobTitle} jobId={id} />
    </div>
  );
}
