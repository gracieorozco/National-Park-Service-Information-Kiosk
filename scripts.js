function alertsRequest() {
    var resultsExist = document.getElementById("result")
    while (resultsExist) {
        document.getElementById("result").remove();
        resultsExist = document.getElementById("result")
    }
    var form = document.getElementById("stateForm")
    form.onsubmit = function(e) {
        e.preventDefault();
        var request = new XMLHttpRequest()
        request.open('GET', 'https://developer.nps.gov/api/v1/alerts?stateCode=' + form.state.value + '&q=' + form.search.value + '&api_key=fykgrOCj9nCtRfxqGIbvFccAIjWKC8supUHA2Xk0')
        request.onload = function() {
            var data = JSON.parse(this.response)
            var total = data.total
            if (total >= 50) {
                total = 50
            }
            if (total > 0) {
                for (var i = 0; i < total; i++) {
                    var div = document.createElement('div')
                    div.setAttribute('class', 'card')
                    div.setAttribute('style', 'width:80%;margin:0 auto;float:none;align:middle;padding-top:50px;padding-left:50px;padding-right:50px;padding-bottom:30px')
                    div.setAttribute('id', 'result')

                    var title = document.createElement('h1')
                    var description = document.createElement('p')
                    var link = document.createElement('a')

                    title.setAttribute('class', "card-title")
                    title.setAttribute('style', "font-size:36px;padding-bottom:5px")
                    description.setAttribute('class', "card-subtitle")

                    title.textContent = data.data[i].category + ": " + data.data[i].title
                    description.textContent = data.data[i].description
                    link.setAttribute('href', data.data[i].url)
                    link.setAttribute('target', '_blank')
                    link.innerHTML = "<p> </p><p>Click here for more information.</p>"

                    body.appendChild(div)
                    div.appendChild(title)
                    div.appendChild(description)
                    description.appendChild(link)
                }
            } else {
                var div = document.createElement('div')
                div.setAttribute('class', 'card')
                div.setAttribute('style', "width:60%;margin:0 auto;float:none;align:middle;text-align:center;")
                div.setAttribute('id', 'result')
                var title = document.createElement('h1')
                title.setAttribute('class', "card-body")
                title.innerHTML = "No results were found."
                body.appendChild(div)
                div.appendChild(title)
            }
        }
        request.send()
    }
}

function articlesRequest() {
    var resultsExist = document.getElementById("result")
    while (resultsExist) {
        document.getElementById("result").remove();
        resultsExist = document.getElementById("result")
    }
    var form = document.getElementById("stateForm");
    form.onsubmit = function(e) {
        e.preventDefault();
        var request = new XMLHttpRequest()
        request.open('GET', 'https://developer.nps.gov/api/v1/articles?stateCode=' + form.state.value + '&q=' + form.search.value + '&api_key=fykgrOCj9nCtRfxqGIbvFccAIjWKC8supUHA2Xk0')
        request.onload = function() {
            var data = JSON.parse(this.response)
            var total = data.total
            if (total >= 50) {
                total = 49
            }
            if (total > 0) {
                for (var i = 0; i < total; i++) {
                    var div = document.createElement('div')
                    div.setAttribute('class', 'card')
                    div.setAttribute('style', 'width:80%;margin:0 auto;float:none;align:middle;padding-top:50px;padding-left:50px;padding-right:50px;padding-bottom:30px')
                    div.setAttribute('id', 'result')


                    var title = document.createElement('h1')
                    var description = document.createElement('p')
                    var link = document.createElement('a')

                    title.setAttribute('class', "card-title")
                    title.setAttribute('style', "font-size:36px;padding-bottom:5px")
                    link.setAttribute('class', "card-link")
                    description.setAttribute('class', "card-subtitle")

                    title.textContent = data.data[i].title
                    description.textContent = data.data[i].listingdescription
                    link.setAttribute('href', data.data[i].url)
                    link.setAttribute('target', '_blank')
                    link.innerHTML = "<p> </p><p>Click here for more information.</p>"

                    body.appendChild(div)
                    div.appendChild(title)
                    div.appendChild(description)
                    div.appendChild(link)
                }
            } else {
                var div = document.createElement('div')
                div.setAttribute('class', 'card')
                div.setAttribute('style', "width:60%;margin:0 auto;float:none;align:middle;text-align:center;")
                div.setAttribute('id', 'result')
                var title = document.createElement('h1')
                title.setAttribute('class', "card-body")
                title.innerHTML = "No results were found."
                body.appendChild(div)
                div.appendChild(title)
            }
        }
        request.send()
    }
}

function campRequest() {
    var resultsExist = document.getElementById("result")
    while (resultsExist) {
        document.getElementById("result").remove();
        resultsExist = document.getElementById("result")
    }
    var form = document.getElementById("stateForm");
    form.onsubmit = function(e) {
        e.preventDefault();
        var request = new XMLHttpRequest()
        request.open('GET', 'https://developer.nps.gov/api/v1/campgrounds?stateCode=' + form.state.value + '&q=' + form.search.value + '&api_key=fykgrOCj9nCtRfxqGIbvFccAIjWKC8supUHA2Xk0')
        request.onload = function() {
            var data = JSON.parse(this.response)
            var total = data.total
            if (total >= 50) {
                total = 49
            }
            if (total > 0) {
                for (var i = 0; i < total; i++) {
                    var div = document.createElement('div')
                    div.setAttribute('class', 'card')
                    div.setAttribute('style', 'width:80%;margin:0 auto;float:none;align:middle;padding-top:50px;padding-left:50px;padding-right:50px;padding-bottom:30px')
                    div.setAttribute('id', 'result')

                    var title = document.createElement('h1')
                    var description = document.createElement('p')
                    var directionsUrl = document.createElement('a')
                    var regulationsUrl = document.createElement('a')

                    title.setAttribute('class', "card-title")
                    title.setAttribute('style', "font-size:36px;padding-bottom:5px")
                    description.setAttribute('class', "card-subtitle")
                    directionsUrl.setAttribute('class', "card-link")
                    regulationsUrl.setAttribute('class', "card-link")

                    title.textContent = data.data[i].name
                    description.textContent = data.data[i].description
                    directionsUrl.setAttribute('href', data.data[i].directionsUrl)
                    directionsUrl.innerHTML = "<p> </p><p>Find directions</p>"
                    regulationsUrl.setAttribute('href', data.data[i].regulationsoverview)
                    regulationsUrl.innerHTML = "<p> </p><p>Click here to view regulations.</p>"

                    body.appendChild(div)
                    div.appendChild(title)
                    div.appendChild(description)
                    description.appendChild(regulationsUrl)
                    regulationsUrl.appendChild(directionsUrl)
                }
            } else {
                var div = document.createElement('div')
                div.setAttribute('class', 'card')
                div.setAttribute('style', "width:60%;margin:0 auto;float:none;align:middle;text-align:center;")
                div.setAttribute('id', 'result')
                var title = document.createElement('h1')
                title.setAttribute('class', "card-body")
                title.innerHTML = "No results were found."
                body.appendChild(div)
                div.appendChild(title)
            }
        }
        request.send()
    }
}

function eventsRequest() {
    var resultsExist = document.getElementById("result")
    while (resultsExist) {
        document.getElementById("result").remove();
        resultsExist = document.getElementById("result")
    }
    var form = document.getElementById("stateForm");
    form.onsubmit = function(e) {
        e.preventDefault();
        var request = new XMLHttpRequest()
        request.open('GET', 'https://developer.nps.gov/api/v1/events?stateCode=' + form.state.value + '&q=' + form.search.value + '&api_key=fykgrOCj9nCtRfxqGIbvFccAIjWKC8supUHA2Xk0')
        request.onload = function() {
            var data = JSON.parse(this.response)
            var total = data.total
            if (total >= 50) {
                total = 49
            }
            if (total > 0) {
                for (var i = 0; i < total; i++) {
                    var div = document.createElement('div')
                    div.setAttribute('class', 'card')
                    div.setAttribute('style', 'width:80%;margin:0 auto;float:none;align:middle;padding-top:30px;padding-left:50px;padding-right:50px;padding-bottom:30px')
                    div.setAttribute('id', 'result')

                    var title = document.createElement('h1')
                    var location = document.createElement('p')
                    var dates = document.createElement('p')
                    var times = document.createElement('p')

                    title.setAttribute('class', "card-title")
                    title.setAttribute('style', "font-size:32px;padding-bottom:5px")
                    location.setAttribute('class', "card-subtitle")
                    location.setAttribute('style', "padding-bottom:10px")
                    dates.setAttribute('class', "card-subtitle")
                    times.setAttribute('class', "card-subtitle")

                    title.textContent = data.data[i].title
                    location.textContent = "Location: " + data.data[i].parkfullname
                    times.textContent = "Time: "
                    for (var m = 0, z = 1; m < data.data[i].times.length; m++, z = 0) {
                        times.textContent += data.data[i].times[m].timestart + "-" + data.data[i].times[m].timeend
                        times.textContent += "       "
                        if (z % 3 == 0) {
                            time.innerHTML += "<br>"
                        }
                    }
                    dates.innerHTML = "Dates: <br>"
                    for (var j = 0, q = 1; j < data.data[i].dates.length; j++, q++) {
                        dates.innerHTML += data.data[i].dates[j]
                        dates.innerHTML += "     "
                        if (q % 3 == 0) {
                            dates.innerHTML += "<br>"
                        }
                    }
                    body.appendChild(div)
                    div.appendChild(title)
                    div.appendChild(location)
                    dates.setAttribute("style", "white-space:pre;padding-bottom:10px;")
                    div.appendChild(dates)
                    times.setAttribute("style", "white-space:pre;padding-bottom:10px;")
                    div.appendChild(times)
                }
            } else {
                var div = document.createElement('div')
                div.setAttribute('class', 'card')
                div.setAttribute('style', "width:60%;margin:0 auto;float:none;align:middle;text-align:center;")
                div.setAttribute('id', 'result')
                var title = document.createElement('h1')
                title.setAttribute('class', "card-body")
                title.innerHTML = "No results were found."
                body.appendChild(div)
                div.appendChild(title)
            }
        }
        request.send()
    }
}

function newsRequest() {
    var resultsExist = document.getElementById("result")
    while (resultsExist) {
        document.getElementById("result").remove();
        resultsExist = document.getElementById("result")
    }
    var form = document.getElementById("stateForm");
    form.onsubmit = function(e) {
        e.preventDefault();
        var request = new XMLHttpRequest()
        request.open('GET', 'https://developer.nps.gov/api/v1/news?stateCode=' + form.state.value + '&q=' + form.search.value + '&api_key=fykgrOCj9nCtRfxqGIbvFccAIjWKC8supUHA2Xk0')
        request.onload = function() {
            var data = JSON.parse(this.response)
            var total = data.total
            if (total >= 50) {
                total = 50
            }
            if (total > 0) {
                for (var i = 0; i < total; i++) {
                    var div = document.createElement('div')
                    div.setAttribute('class', 'card')
                    div.setAttribute('style', 'width:80%;margin:0 auto;float:none;align:middle;padding-top:30px;padding-left:50px;padding-right:50px;padding-bottom:30px')
                    div.setAttribute('id', 'result')
                    var br = document.createElement('br')

                    var title = document.createElement('h1')
                    var date = document.createElement('h3')
                    var abstract = document.createElement('p')
                    var url = document.createElement('a')


                    title.setAttribute('class', "card-title")
                    title.setAttribute('style', "font-size:36px;padding-bottom:5px")
                    date.setAttribute('class', "card-subtitle")
                    abstract.setAttribute('class', "card-subtitle")
                    url.setAttribute('class', "card-link")

                    title.textContent = data.data[i].title
                    date.textContent = data.data[i].releasedate
                    abstract.textContent = data.data[i].abstract
                    url.setAttribute('href', data.data[i].url)
                    url.setAttribute('target', '_blank')
                    url.innerHTML = "<p> </p><p>Link to article</p>"

                    body.appendChild(div)
                    div.appendChild(title)
                    div.appendChild(date)
                    div.appendChild(abstract)
                    abstract.appendChild(url)
                }
            } else {
                var div = document.createElement('div')
                div.setAttribute('class', 'card')
                div.setAttribute('style', "width:60%;margin:0 auto;float:none;align:middle;text-align:center;")
                div.setAttribute('id', 'result')
                var title = document.createElement('h1')
                title.setAttribute('class', "card-body")
                title.innerHTML = "No results were found."
                body.appendChild(div)
                div.appendChild(title)
            }
        }
        request.send()
    }
}

function parksRequest() {
    var resultsExist = document.getElementById("result")
    while (resultsExist) {
        document.getElementById("result").remove();
        resultsExist = document.getElementById("result")
    }
    var form = document.getElementById("stateForm");
    form.onsubmit = function(e) {
        e.preventDefault();
        var request = new XMLHttpRequest()
        request.open('GET', 'https://developer.nps.gov/api/v1/parks?stateCode=' + form.state.value + '&q=' + form.search.value + '&api_key=fykgrOCj9nCtRfxqGIbvFccAIjWKC8supUHA2Xk0')
        request.onload = function() {
            var data = JSON.parse(this.response)
            var total = data.total
            if (total >= 50) {
                total = 50
            }
            if (total > 0) {
                for (var i = 0; i < total; i++) {
                    var div = document.createElement('div')
                    div.setAttribute('class', 'card')
                    div.setAttribute('style', 'width:80%;margin:0 auto;float:none;align:middle;padding-top:30px;padding-left:50px;padding-right:50px;padding-bottom:30px')
                    div.setAttribute('id', 'result')
                    var br = document.createElement('br')

                    var title = document.createElement('h1')
                    var description = document.createElement('p')
                    var weather = document.createElement('p')
                    var directions = document.createElement('p')
                    var directionsLink = document.createElement('a')


                    title.setAttribute('class', "card-title")
                    title.setAttribute('style', "font-size:36px;padding-bottom:5px")
                    description.setAttribute('class', "card-subtitle")
                    weather.setAttribute('class', "card-subtitle")
                    weather.setAttribute('style', 'padding-top: 10px')
                    directions.setAttribute('class', "card-subtitle")
                    directions.setAttribute('style', 'padding-top: 10px')
                    directionsLink.setAttribute('class', "card-link")

                    title.textContent = data.data[i].name
                    description.innerHTML = "<strong>Description: </strong>" + data.data[i].description
                    weather.innerHTML = "<strong>Weather: </strong>" + data.data[i].weatherInfo
                    directions.innerHTML = "<strong>Directions: </strong>" + data.data[i].directionsInfo
                    directionsLink.setAttribute('href', data.data[i].directionsUrl)
                    directionsLink.innerHTML = "<p> </p><p>Click here for directions</p>"

                    body.appendChild(div)
                    div.appendChild(title)
                    div.appendChild(description)
                    div.appendChild(weather)
                    div.appendChild(directions)
                    directions.appendChild(directionsLink)
                }
            } else {
                var div = document.createElement('div')
                div.setAttribute('class', 'card')
                div.setAttribute('style', "width:60%;margin:0 auto;float:none;align:middle;text-align:center;")
                div.setAttribute('id', 'result')
                var title = document.createElement('h1')
                title.setAttribute('class', "card-body")
                title.innerHTML = "No results were found."
                body.appendChild(div)
                div.appendChild(title)
            }
        }
        request.send()
    }
}

function placesRequest() {
    var resultsExist = document.getElementById("result")
    while (resultsExist) {
        document.getElementById("result").remove();
        resultsExist = document.getElementById("result")
    }
    var form = document.getElementById("stateForm");
    form.onsubmit = function(e) {
        e.preventDefault();
        var request = new XMLHttpRequest()
        request.open('GET', 'https://developer.nps.gov/api/v1/places?stateCode=' + form.state.value + '&q=' + form.search.value + '&api_key=fykgrOCj9nCtRfxqGIbvFccAIjWKC8supUHA2Xk0')
        request.onload = function() {
            var data = JSON.parse(this.response)
            var total = data.total
            if (total >= 50) {
                total = 49
            }
            if (total > 0) {
                for (var i = 0; i < total; i++) {
                    var div = document.createElement('div')
                    div.setAttribute('class', 'card')
                    div.setAttribute('style', 'width:80%;margin:0 auto;float:none;align:middle;padding-top:30px;padding-left:50px;padding-right:50px;padding-bottom:30px')
                    div.setAttribute('id', 'result')

                    var title = document.createElement('h1')
                    var description = document.createElement('p')
                    var url = document.createElement('a')

                    title.setAttribute('class', "card-title")
                    title.setAttribute('style', "font-size:36px;padding-bottom:5px")
                    description.setAttribute('class', "card-subtitle")
                    url.setAttribute('class', "card-link")

                    title.textContent = data.data[i].title
                    description.textContent = data.data[i].listingdescription
                    url.setAttribute('href', data.data[i].url)
                    url.setAttribute('target', '_blank')
                    url.innerHTML = "<p> </p><p>Link to website.</p>"

                    body.appendChild(div)
                    div.appendChild(title)
                    div.appendChild(description)
                    description.appendChild(url)
                }
            } else {
                var div = document.createElement('div')
                div.setAttribute('class', 'card')
                div.setAttribute('style', "width:60%;margin:0 auto;float:none;align:middle;text-align:center;")
                div.setAttribute('id', 'result')
                var title = document.createElement('h1')
                title.setAttribute('class', "card-body")
                title.innerHTML = "No results were found."
                body.appendChild(div)
                div.appendChild(title)
            }
        }
        request.send()
    }
}

function plansRequest() {
    var resultsExist = document.getElementById("result")
    while (resultsExist) {
        document.getElementById("result").remove();
        resultsExist = document.getElementById("result")
    }
    var form = document.getElementById("stateForm");
    form.onsubmit = function(e) {
        e.preventDefault();
        var request = new XMLHttpRequest()
        request.open('GET', 'https://developer.nps.gov/api/v1/lessonplans?stateCode=' + form.state.value + '&q=' + form.search.value + '&api_key=fykgrOCj9nCtRfxqGIbvFccAIjWKC8supUHA2Xk0')
        request.onload = function() {
            var data = JSON.parse(this.response)
            var total = data.total
            if (total >= 50) {
                total = 49
            }
            if (total > 0) {
                for (var i = 0; i < total; i++) {
                    var div = document.createElement('div')
                    div.setAttribute('class', 'card')
                    div.setAttribute('style', 'width:80%;margin:0 auto;float:none;align:middle;padding-top:30px;padding-left:50px;padding-right:50px;padding-bottom:30px')
                    div.setAttribute('id', 'result')

                    var title = document.createElement('h1')
                    var duration = document.createElement('p')
                    var objective = document.createElement('p')
                    var url = document.createElement('a')

                    title.setAttribute('class', "card-title")
                    title.setAttribute('style', "font-size:36px;padding-bottom:5px")
                    duration.setAttribute('class', "card-subtitle")
                    objective.setAttribute('class', "card-subtitle")
                    objective.setAttribute("style", "padding-top:10px;")
                    url.setAttribute('class', "card-link")

                    title.textContent = data.data[i].title
                    duration.textContent = "Duration: " + data.data[i].duration + " "
                    objective.textContent = data.data[i].questionobjective
                    url.setAttribute('href', data.data[i].url)
                    url.setAttribute('target', '_blank')
                    url.innerHTML = "<p> </p><p>Click here for more information.</p>"

                    body.appendChild(div)
                    div.appendChild(title)
                    div.appendChild(duration)
                    duration.appendChild(objective)
                    duration.appendChild(url)
                }
            } else {
                var div = document.createElement('div')
                div.setAttribute('class', 'card')
                div.setAttribute('style', "width:60%;margin:0 auto;float:none;align:middle;text-align:center;")
                div.setAttribute('id', 'result')
                var title = document.createElement('h1')
                title.setAttribute('class', "card-body")
                title.innerHTML = "No results were found."
                body.appendChild(div)
                div.appendChild(title)
            }
        }
        request.send()
    }
}

function peopleRequest() {
    var resultsExist = document.getElementById("result")
    while (resultsExist) {
        document.getElementById("result").remove();
        resultsExist = document.getElementById("result")
    }
    var form = document.getElementById("stateForm");
    form.onsubmit = function(e) {
        e.preventDefault();
        var request = new XMLHttpRequest()
        request.open('GET', 'https://developer.nps.gov/api/v1/people?stateCode=' + form.state.value + '&q=' + form.search.value + '&api_key=fykgrOCj9nCtRfxqGIbvFccAIjWKC8supUHA2Xk0')
        request.onload = function() {
            var data = JSON.parse(this.response)
            var total = data.total
            if (total >= 50) {
                total = 49
            }
            if (total > 0) {
                for (var i = 0; i < total; i++) {
                    var div = document.createElement('div')
                    div.setAttribute('class', 'card')
                    div.setAttribute('style', 'width:80%;margin:0 auto;float:none;align:middle;padding-top:30px;padding-left:50px;padding-right:50px;padding-bottom:30px')
                    div.setAttribute('id', 'result')
                    var br = document.createElement('br')

                    var title = document.createElement('h1')
                    var description = document.createElement('p')
                    var url = document.createElement('a')

                    title.setAttribute('class', "card-title")
                    title.setAttribute('style', "font-size:36px;padding-bottom:5px")
                    description.setAttribute('class', "card-subtitle")
                    url.setAttribute('class', "card-link")

                    title.textContent = data.data[i].title
                    description.textContent = data.data[i].listingdescription
                    url.setAttribute('href', data.data[i].url)
                    url.setAttribute('target', '_blank')
                    url.innerHTML = "<p> </p><p>Click here to learn more.</p>"

                    body.appendChild(div)
                    div.appendChild(title)
                    div.appendChild(description)
                    description.appendChild(url)
                }
            } else {
                var div = document.createElement('div')
                div.setAttribute('class', 'card')
                div.setAttribute('style', "width:60%;margin:0 auto;float:none;align:middle;text-align:center;")
                div.setAttribute('id', 'result')
                var title = document.createElement('h1')
                title.setAttribute('class', "card-body")
                title.innerHTML = "No results were found."
                body.appendChild(div)
                div.appendChild(title)
            }
        }
        request.send()
    }
}

function visitorCentersRequest() {
    var resultsExist = document.getElementById("result")
    while (resultsExist) {
        document.getElementById("result").remove();
        resultsExist = document.getElementById("result")
    }
    var form = document.getElementById("stateForm");
    form.onsubmit = function(e) {
        e.preventDefault();
        var request = new XMLHttpRequest()
        request.open('GET', 'https://developer.nps.gov/api/v1/visitorcenters?stateCode=' + form.state.value + '&q=' + form.search.value + '&api_key=fykgrOCj9nCtRfxqGIbvFccAIjWKC8supUHA2Xk0')
        request.onload = function() {
            var data = JSON.parse(this.response)
            var total = data.total
            if (total >= 50) {
                total = 49
            }
            if (total > 0) {
                for (var i = 0; i < total; i++) {
                    var div = document.createElement('div')
                    div.setAttribute('class', 'card')
                    div.setAttribute('style', 'width:80%;margin:0 auto;float:none;align:middle;padding-top:30px;padding-left:50px;padding-right:50px;padding-bottom:30px')
                    div.setAttribute('id', 'result')
                    var br = document.createElement('br')

                    var title = document.createElement('h1')
                    var description = document.createElement('p')
                    var directions = document.createElement('p')
                    var url = document.createElement('a')
                    var directionsUrl = document.createElement('a')

                    title.setAttribute('class', "card-title")
                    title.setAttribute('style', "font-size:36px;padding-bottom:5px")
                    description.setAttribute('class', "card-subtitle")
                    directions.setAttribute('class', "card-subtitle")
                    url.setAttribute('class', "card-link")
                    directionsUrl.setAttribute('class', "card-link")

                    title.textContent = data.data[i].name
                    description.textContent = data.data[i].description
                    directions.textContent = data.data[i].directionsInfo
                    url.setAttribute('href', data.data[i].url)
                    url.setAttribute('target', '_blank')
                    url.innerHTML = "<p> </p><p>Click to visit the website.</p>"
                    directionsUrl.setAttribute('href', data.data[i].url)
                    directionsUrl.setAttribute('target', '_blank')
                    directionsUrl.innerHTML = "<p> </p><p>Link to directions</p>"

                    body.appendChild(div)
                    div.appendChild(title)
                    div.appendChild(description)
                    description.appendChild(url)
                    url.appendChild(directionsUrl)
                }
            } else {
                var div = document.createElement('div')
                div.setAttribute('class', 'card')
                div.setAttribute('style', "width:60%;margin:0 auto;float:none;align:middle;text-align:center;")
                div.setAttribute('id', 'result')
                var title = document.createElement('h1')
                title.setAttribute('class', "card-body")
                title.innerHTML = "No results were found."
                body.appendChild(div)
                div.appendChild(title)
            }
        }
        request.send()
    }
}

function searchParksRequest() {
  var accordion = document.createElement('div')
  accordion.setAttribute('class', 'accordion')
  accordion.setAttribute('id', 'resultAcc')

  var card = document.createElement('div')
  card.setAttribute('class', 'card')

  var headerOne = document.createElement('div')
  headerOne.setAttribute('class', 'card-header')
  headerOne.setAttribute('id', 'head1')

  var textOne = document.createElement('h5')
  textOne.setAttribute('class', 'mb-0')

  var buttonOne = document.createElement('button')
  buttonOne.setAttribute('class', 'btn btn-link')
  buttonOne.setAttribute('type', 'button')
  buttonOne.setAttribute('data-toggle', 'collapse')
  buttonOne.setAttribute('data-target', '#c1')
  buttonOne.setAttribute('aria-expanded', 'true')
  buttonOne.setAttribute('aria-controls', 'c1')
  buttonOne.textContent = "Parks"

  var c1 = document.createElement('div')
  c1.setAttribute('class', 'collapse show')
  c1.setAttribute('id', 'c1')
  c1.setAttribute('aria-labelledby', 'head1')
  c1.setAttribute('data-parent', '#resultAcc')

  var cd1 = document.createElement('div')
  cd1.setAttribute('class', 'card-body')

  parksRequest


  textOne.appendChild(buttonOne)
  headerOne.appendChild(textOne)
  card.appendChild(headerOne)
  accordion.appendChild(card)
  body.appendChild(accordion)

  c1.appendChild(cd1)
  card.appendChild(c1)

  var card2 = document.createElement('div')
  card2.setAttribute('class', 'card')

  var headerTwo = document.createElement('div')
  headerTwo.setAttribute('class', 'card-header')
  headerTwo.setAttribute('id', 'head2')

  var textTwo = document.createElement('h5')
  textTwo.setAttribute('class', 'mb-0')

  var buttonTwo = document.createElement('button')
  buttonTwo.setAttribute('class', 'btn btn-link')
  buttonTwo.setAttribute('type', 'button')
  buttonTwo.setAttribute('data-toggle', 'collapse')
  buttonTwo.setAttribute('data-target', '#c2')
  buttonTwo.setAttribute('aria-expanded', 'true')
  buttonTwo.setAttribute('aria-controls', 'c2')
  buttonTwo.textContent = "Visitor Centers"

  var c2 = document.createElement('div')
  c2.setAttribute('class', 'collapse')
  c2.setAttribute('id', 'c2')
  c2.setAttribute('aria-labelledby', 'head2')
  c2.setAttribute('data-parent', '#resultAcc')

  var cd2 = document.createElement('div')
  cd2.setAttribute('class', 'card-body')
//  cd2.innerHTML = "()"

  textTwo.appendChild(buttonTwo)
  headerTwo.appendChild(textTwo)
  card.appendChild(headerTwo)
  accordion.appendChild(card)
  body.appendChild(accordion)

  c2.appendChild(cd2)
  card.appendChild(c2)

  var card3 = document.createElement('div')
  card3.setAttribute('class', 'card')

  var headerThree = document.createElement('div')
  headerThree.setAttribute('class', 'card-header')
  headerThree.setAttribute('id', 'head3')

  var textThree = document.createElement('h5')
  textThree.setAttribute('class', 'mb-0')

  var buttonThree = document.createElement('button')
  buttonThree.setAttribute('class', 'btn btn-link')
  buttonThree.setAttribute('type', 'button')
  buttonThree.setAttribute('data-toggle', 'collapse')
  buttonThree.setAttribute('data-target', '#c3')
  buttonThree.setAttribute('aria-expanded', 'true')
  buttonThree.setAttribute('aria-controls', 'c3')
  buttonThree.textContent = "Campgrounds"

  var c3 = document.createElement('div')
  c3.setAttribute('class', 'collapse')
  c3.setAttribute('id', 'c3')
  c3.setAttribute('aria-labelledby', 'head3')
  c3.setAttribute('data-parent', '#resultAcc')

  var cd3 = document.createElement('div')
  cd3.setAttribute('class', 'card-body')
//  cd3.innerHTML = "text" camp

  textThree.appendChild(buttonThree)
  headerThree.appendChild(textThree)
  card.appendChild(headerThree)
  accordion.appendChild(card)
  body.appendChild(accordion)

  c3.appendChild(cd3)
  card.appendChild(c3)

}
