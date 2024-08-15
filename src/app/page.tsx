import Search from "./components/search&filter";
import Countries from "./components/countries";

export default function Home({
  searchParams,
}: {
  searchParams?: {
    country?: string;
    region?: string;
  };
}) {
  const country = searchParams?.country || "";
  const region = searchParams?.region || "";
  return (
    <main className="bg-background- min-h-screen w-screen px-10 pt-24 text- md:px-20 md:pt-28">
      <Search />
      <Countries searchParams={{ region, country }} />
    </main>
  );
}
