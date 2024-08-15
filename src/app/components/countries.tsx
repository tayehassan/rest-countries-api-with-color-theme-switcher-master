import { getCountries } from "../lib/data";
import Country from "./country";

export default async function Countries({
  searchParams,
}: {
  searchParams: {
    region: string;
    country: string;
  };
}) {
  const region = searchParams?.region || "";
  const country = searchParams?.country || "";
  const countries = await getCountries(region, country);

  return countries?.length ? (
    <ul className="mt-8 grid w-full grid-cols-1 gap-x-20 gap-y-12 text-sm sm:grid-cols-2 sm:gap-y-16 md:grid-cols-3 lg:grid-cols-4">
      {countries.map((count: { id: string }, index: number) => {
        return <Country country={count} index={index} key={count.id} />;
      })}
    </ul>
  ) : (
    <div className="bg-background- mt-8 flex h-full w-full justify-center text-4xl">
      No country with the name ( {country})
    </div>
  );
}
