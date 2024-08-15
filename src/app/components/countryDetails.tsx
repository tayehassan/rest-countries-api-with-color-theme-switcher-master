import Image from "next/image";
import { getCountry } from "../lib/data";
import { getBorderCountries } from "../lib/utils";

export default async function Details({ id }: { id: string }) {
  const country = (await getCountry(id))[0];
  const borders = await getBorderCountries(country?.borders);
  return (
    <div className="mt-10 grid h-2/5 w-full items-center gap-5 md:mt-16 md:grid-cols-2 md:flex-row md:gap-32">
      <div className="h-full w-full rounded-md border-[16px] border-opacity-20 bg-element-color">
        <Image
          src={country.flag}
          alt={`${country.name} flag`}
          className="h-full w-full"
          width={240}
          height={160}
        ></Image>
      </div>

      <div className="flex h-full w-full flex-col justify-center">
        <h1 className="mb-3 text-3xl font-black md:mb-7 md:text-[2rem]">
          {country.name}
        </h1>
        <div className="grid h-auto gap-3 md:grid-cols-2">
          <ul className="flex flex-col text-base md:gap-3">
            <li>
              <strong>Native Name: </strong>
              {country.nativeName}
            </li>
            <li>
              <strong>Population: </strong>
              {country.population}
            </li>
            <li>
              <strong>Region: </strong>
              {country.region}
            </li>
            <li>
              <strong>Sub Region: </strong>
              {country.subregion}
            </li>
            <li>
              <strong>Capital: </strong>
              {country.capital}
            </li>
          </ul>
          <ul className="flex flex-col text-base md:gap-3">
            <li>
              <strong>Top level Domain: </strong>
              {country.topLevelDomain}
            </li>
            <li>
              <strong>Currencies: </strong>
              {country.currencies?.at(0).symbol}
            </li>
            <li>
              <strong>Languages: </strong>
              {country.languages
                .map((lang: { name: string }) => {
                  return lang.name;
                })
                .join(", ")}
            </li>
          </ul>
        </div>
        <div className="mt-10 flex">
          <h2 className="text-md mr-2 block w-24 font-black">
            Border countries:
          </h2>
          <div className="inline">
            {borders.map((border: string) => {
              return (
                <button
                  key={border}
                  className="mx-2 mb-2 inline rounded-md bg-element-color px-5 py-1"
                >
                  {border}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
