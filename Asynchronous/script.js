'strict mode';

// AJAX - Asynchronous Javascript And Xml
// Api - https://countries-api-836d.onrender.com/countries/

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/name/india');
request.send();

request.addEventListener('load', function () {
  const [data] = JSON.parse(this.responseText);
  console.log(data);

  const html = `
  <article class="country">
    <img class="country__img" src="${data.flag}"/>
    <div class="country__data">
      <h3 class="country__name">INDIA</h3>
      <h4 class="country__region">"${data.region}"</h4>
      <p class="country__row">
        <span>👫</span>POP people
      </p>
      <p class="country__row">
        <span>🗣️</span>LANG
      </p>
      <p class="country__row">
        <span>💰</span>CUR
      </p>
    </div>
  </article> `;
});
