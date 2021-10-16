interface City {
  city: string;
  growth_from_2000_to_2013: string;
  latitude: number;
  longitude: number;
  population: string;
  rank: string;
  state: string;
}

const endpoint =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities: City[] = [];

fetch(endpoint)
  .then((blob) => blob.json())
  .then((data: City[]) => cities.push(...data));

console.log(cities);

function findMatches(wordToMatch: string, cities: City[]) {
  return cities.filter((place) => {
    const regex = new RegExp(wordToMatch, 'gi');
    return place.city.match(regex) || place.state.match(regex);
  });
}

function numberWithCommas(x: string) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches(e: KeyboardEvent) {
  const target = e.target as HTMLInputElement;
  const matchArray = findMatches(target.value, cities);
  const html = matchArray
    .map((place) => {
      const regex = new RegExp(target.value, 'gi');
      const cityName = place.city.replace(
        regex,
        `<span class="hl">${target.value}</span>`
      );
      const stateName = place.city.replace(
        regex,
        `<span class="hl">${target.value}</span>`
      );
      return `
    <li>
      <span class="name">${cityName}, ${stateName}</span>
      <span class="population">${numberWithCommas(place.population)}</span>
    </li>
    `;
    })
    .join('');
  suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search') as HTMLInputElement;
const suggestions = document.querySelector('.suggestions') as HTMLUListElement;

searchInput.addEventListener('keyup', (e) => displayMatches(e));
