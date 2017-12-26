var ajax = new XMLHttpRequest(); // We create the HTTP Object

function getCitiesFromProvince() {
    "use strict";
    var province, url;
    province = document.getElementById("provSelect").value;
    url = "cities_from_province.php?prov=" + window.encodeURI(province);
    ajax.open("GET", url, true);
    ajax.onreadystatechange = handleHttpResponse;
    ajax.send(null);
    document.getElementById("animation").innerHTML = "<img src = 'images/ajax-loader.gif' alt = 'loading gif'/>";
    document.getElementById("animation").style.display = "block";
}

function handleHttpResponse() {
    "use strict";
    var cities;
    if (ajax.readyState == 4 && ajax.status == 200) {
        cities = ajax.responseText.split("~");
    
        document.getElementById("citySelect").options.length = 0;
        // The cities string contains cities separated by the tilde (~).
        // Use JavaScript split() function to return all cities in an array.
        for (var i = 0; i < cities.length; i++){
            document.getElementById("citySelect").options[i] = new Option(cities[i]);
        }
        // Then, add code that populates cities drop-down list.
        document.getElementById("animation").style.display = "none";
    }
}