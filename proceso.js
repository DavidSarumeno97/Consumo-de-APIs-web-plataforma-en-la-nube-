var respuestaa = [];

function cargarDatos() {
    let resultado = document.querySelector('#tabladet');
    resultado.innerHTML = '';

    aux = 0;

    for (let item of Object.values(respuestaa)) {
        console.log(Object.values(item));

        for (var i = 0; i < item.length; i++) {

            resultado.innerHTML +=
                `<tr class="row justify-content-center"> 
                            <td class="col text-center">${item[i].strAlternate}</td>
                            <td class="col text-center">${item[i].strCountry}</td>
                            <td class="col text-center">${item[i].strStadiumLocation}</td>
                            <td class="col text-center">${item[i].strLeague}</td>
                            <td class="col text-center">${item[i].strStadium}</td>
                            <td class="col text-center">${item[i].strTeam}</td>
                            <td class="col " align="center"><img class="ima" src="${item[i].strTeamBadge}"></td>
                            <td class="col " align="center"><img class="ima" src="${item[i].strStadiumThumb}"></td>
                        </tr>`
        }
    }
}

function cargarDatosVacios() {
    var url = 'https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=Arsenal';
    var api = new XMLHttpRequest();
    api.open('GET', url, true);
    api.send();
    api.onreadystatechange = function() {
        if (this.status == 200 && this.readyState == 4) {
            respuestaa = JSON.parse(this.responseText);
        }

    }
    let resultado = document.querySelector('#tabladet');
    resultado.innerHTML = '';
    for (var i = 0; i < 6; i++) {

        resultado.innerHTML +=
            `<tr class="row justify-content-center"> 
                <td class="col text-center">------------------</td>
                <td class="col text-center">------------------</td>
                <td class="col text-center">------------------</td>
                <td class="col text-center">------------------</td>
                <td class="col text-center">------------------</td>
                <td class="col text-center">------------------</td>
                <td class="col " align="center">------------------</td>
                <td class="col " align="center">------------------</td>
            </tr>`


    }
}

function filtrar(event) {
    if (event.key === 'Enter') {
        let resultado = document.querySelector('#filtro');

        let nombre = "";
        let html = document.querySelector('#tabladet');
        html.innerHTML = '';
        for (let item of Object.values(respuestaa)) {
            console.log(Object.values(item));

            for (var i = 0; i < item.length; i++) {
                nombre = item[i].strTeam;

                if (nombre.toLowerCase().includes(resultado.value.toLowerCase())) {
                    html.innerHTML +=
                        `<tr class="row justify-content-center"> 
                                <td class="col text-center">${item[i].strAlternate}</td>
                                <td class="col text-center">${item[i].strCountry}</td>
                                <td class="col text-center">${item[i].strStadiumLocation}</td>
                                <td class="col text-center">${item[i].strLeague}</td>
                                <td class="col text-center">${item[i].strStadium}</td>
                                <td class="col text-center">${item[i].strTeam}</td>
                                <td class="col " align="center"><img class="ima" src="${item[i].strTeamBadge}"></td>
                                <td class="col " align="center"><img class="ima" src="${item[i].strStadiumThumb}"></td>
                            </tr>`
                }

            }
        }

    }
}