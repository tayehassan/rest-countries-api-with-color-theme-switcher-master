import { extractRegion, searchResult } from "./utils";

const BASE_URL = "http://localhost:3000/data";
export async function getCountries(
  region: string | undefined,
  country: string | any,
) {
  let url;
  if (region != "" || !region) {
    url = `${BASE_URL}?region=${region}`;
  } else {
    url = BASE_URL;
  }
  const data = await fetch(url);
  const countryData = await data.json();
  if (country) return searchResult(country, country);
  return countryData;
}

export async function getCountry(id: string) {
  const data = await fetch(`${BASE_URL}?id=${id}`);
  return await data.json();
}

export async function getRegion() {
  const countriesData = await (await fetch(BASE_URL)).json();
  return extractRegion(countriesData);
}

export async function getCountryUsingCountryCode(countryCode: string) {
  const data = await fetch(BASE_URL);
  const country = (await data.json()).filter(
    (country: { alpha3Code: string }) =>
      country.alpha3Code === `${countryCode}`,
  );
  return country[0].name;
}

export const region = [
  "Asia",
  "Europe",
  "Africa",
  "Oceania",
  "Americas",
  "Polar",
  "Antarctic Ocean",
  "Antarctic",
];
