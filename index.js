async function handleSubmit() {
  let country = document.getElementById("query-string");
//   console.log(country.value);
  let dateOne = document.getElementById("start-date");
//   console.log(dateOne.value);
  let dateTwo = document.getElementById("end-date");
//   console.log(dateTwo.value);

  fetch(`https://api.covid19api.com/country/${country.value}?from=${dateOne.value}T00:00:00Z&to=${dateTwo.value}T00:00:00Z`)
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      populateData(data);
    })
    .catch((err)=>console.log(err.message));
}

function populateData(data) {
    var main = document.getElementsByClassName("cases")[0];
    main.innerHTML="";
  for (var i = 0; i < data.length; i++) {
    var main_div = document.createElement('div');
    main_div.className = 'case';
    var div1 = document.createElement('div');
    var div2 = document.createElement('div');
    var div3 = document.createElement('div');
    div1.classList.add('blue');
    div2.classList.add('blue');
    div3.classList.add('blue');
    div1.innerHTML = "Active Cases-->" + data[i].Active;
    div2.innerHTML = "Confirmed-->" + data[i].Confirmed;
    div3.innerHTML = "Deaths-->"+ data[i].Deaths;
    main_div.appendChild(div1);
    main_div.appendChild(div2);
    main_div.appendChild(div3);
    main.appendChild(main_div);
  }
}
