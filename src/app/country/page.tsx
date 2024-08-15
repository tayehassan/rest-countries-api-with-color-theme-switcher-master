import { ArrowLeftIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import Details from "@/app/components/countryDetails";
import { Suspense } from "react";

export default function Country({
  searchParams,
}: {
  searchParams?: {
    id?: string;
  };
}) {
  const id = searchParams?.id || "";

  return (
    <main className="h-screen w-screen bg-background- px-10 pt-28 md:px-20 md:pt-36">
      <Link
        className="max-w-fit rounded-md bg-element-color py-2 pl-6 pr-10 text-lg font-bold"
        href={"/"}
      >
        <ArrowLeftIcon className="mr-3 inline-block size-6" />
        Back
      </Link>
      <Suspense fallback={<p>Loading...</p>}>
        <Details id={id} />
      </Suspense>
    </main>
  );
}
