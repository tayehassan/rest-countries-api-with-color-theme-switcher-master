import { getCountryUsingCountryCode } from "./data";

export function extractRegion(data: any) {
  const region = Array.from(
    new Set(data.map((country: { region: string }) => country.region)),
  );
  return region;
}

export function getFilteredCountries(query: "", countriesData: any) {
  const filter = countriesData.map((country: { name: string }) =>
    country.name.includes(query),
  );
  return filter;
}

export async function getBorderCountries(bordersCountryCode: Array<string>) {
  const promises = bordersCountryCode?.map((code) =>
    getCountryUsingCountryCode(code),
  );
  if (!bordersCountryCode) return [];
  const countryNames = await Promise.all(promises);
  return countryNames;
}

export function searchResult(
  Alldata: { name: string; country: string }[],
  country: string,
) {
  return Alldata.filter((count: { name: string; country: string }) =>
    count.name.toLowerCase().startsWith(country.toLowerCase()),
  );
}
