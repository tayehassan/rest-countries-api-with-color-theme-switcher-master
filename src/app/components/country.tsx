import Image from "next/image";
import Link from "next/link";

export default async function Country({
  country,
  index,
}: {
  country: any;
  index: number;
}) {
  return (
    <Link
      href={`/country?id=${country.id}`}
      className={`relative h-[350px] overflow-hidden rounded-lg bg-element-color`}
    >
      <div className="relative h-44 w-full">
        <Image
          alt={`${country.name} flag`}
          src={`${country.flag}`}
          className="relative"
          fill={true}
        />
      </div>

      <div className="absolute bottom-5 pl-6">
        <h2 className="h-16 text-wrap pt-5 text-lg font-black leading-4">
          {country.name}
        </h2>
        <div className="flex flex-col justify-start gap-0 text-sm">
          <p>
            <strong>Population: </strong>
            {country.population?.toLocaleString()}
          </p>
          <p>
            <strong>Region: </strong>
            {country.region}
          </p>
          <p>
            <strong>Capital: </strong>
            {country.capital}
          </p>
        </div>
      </div>
    </Link>
  );
}
