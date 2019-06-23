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
                    div.setAttribute('id', 'result')

                    var title = document.createElement('h1')
                    var description = document.createElement('p')
                    var link = document.createElement('a')

                    title.setAttribute('class', "card-body")
                    description.setAttribute('class', "card-body")
                    link.setAttribute('class', "card-body")

                    title.textContent = data.data[i].category + ": " + data.data[i].title
                    description.textContent = data.data[i].description
                    link.setAttribute('href', data.data[i].url)
                    link.setAttribute('target', '_blank')
                    link.innerHTML = "Click here for more information"

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
                    div.setAttribute('id', 'result')

                    var title = document.createElement('h1')
                    var url = document.createElement('a')
                    var description = document.createElement('p')

                    title.setAttribute('class', "card-body")
                    url.setAttribute('class', "card-body")
                    description.setAttribute('class', "card-body")

                    title.textContent = data.data[i].title
                    description.textContent = data.data[i].listingdescription
                    url.setAttribute('href', data.data[i].url)
                    url.setAttribute('target', '_blank')
                    url.innerHTML = "Click here to visit the article."

                    body.appendChild(div)
                    div.appendChild(title)
                    div.appendChild(description)
                    div.appendChild(url)
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
                    div.setAttribute('id', 'result')

                    var title = document.createElement('h1')
                    var description = document.createElement('p')
                    var directionsUrl = document.createElement('a')
                    var regulationsUrl = document.createElement('a')

                    title.setAttribute('class', "card-body")
                    description.setAttribute('class', "card-body")
                    directionsUrl.setAttribute('class', "card-body")
                    regulationsUrl.setAttribute('class', "card-body")

                    title.textContent = data.data[i].name
                    description.textContent = data.data[i].description
                    directionsUrl.setAttribute('href', data.data[i].directionsUrl)
                    directionsUrl.innerHTML = "Find directions."
                    regulationsUrl.setAttribute('href', data.data[i].regulationsoverview)
                    regulationsUrl.innerHTML = "Click here to view regulations."

                    body.appendChild(div)
                    div.appendChild(title)
                    div.appendChild(description)
                    div.appendChild(regulationsUrl)
                    div.appendChild(directionsUrl)
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
                    div.setAttribute('id', 'result')
                    var br = document.createElement('br')

                    var title = document.createElement('h1')
                    var location = document.createElement('p')
                    var dates = document.createElement('p')
                    var times = document.createElement('p')

                    title.setAttribute('class', "card-body")
                    location.setAttribute('class', "card-body")
                    dates.setAttribute('class', "card-body")
                    times.setAttribute('class', "card-body")

                    title.textContent = data.data[i].title
                    location.textContent = "Location: " + data.data[i].parkfullname
                    times.textContent = "Time: "
                    for (var m = 0; m < data.data[i].times.length; m++) {
                        times.textContent += data.data[i].times[m].timestart + "-" + data.data[i].times[m].timeend
                        times.textContent += "       "
                    }
                    dates.textContent = "Dates: "
                    for (var j = 0; j < data.data[i].dates.length; j++) {
                        dates.textContent += data.data[i].dates[j]
                        dates.textContent += "   "
                    }

                    body.appendChild(div)
                    div.appendChild(title)
                    div.appendChild(location)
                    times.setAttribute("style", "white-space: pre")
                    div.appendChild(times)
                    dates.setAttribute("style", "white-space: pre")
                    div.appendChild(dates)
                    div.appendChild(br)
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
                total = 49
            }
            if (total > 0) {
                for (var i = 0; i < total; i++) {
                    var div = document.createElement('div')
                    div.setAttribute('class', 'card')
                    div.setAttribute('id', 'result')
                    var br = document.createElement('br')

                    var title = document.createElement('h1')
                    var date = document.createElement('h3')
                    var abstract = document.createElement('p')
                    var url = document.createElement('a')


                    title.setAttribute('class', "card-body")
                    date.setAttribute('class', "card-body")
                    abstract.setAttribute('class', "card-body")
                    url.setAttribute('class', "card-body")

                    title.textContent = data.data[i].title
                    date.textContent = data.data[i].releasedate
                    abstract.textContent = data.data[i].abstract
                    url.setAttribute('href', data.data[i].url)
                    url.setAttribute('target', '_blank')
                    url.innerHTML = "Link to article"

                    body.appendChild(div)
                    div.appendChild(title)
                    div.appendChild(date)
                    div.appendChild(abstract)
                    div.appendChild(url)
                    div.appendChild(br)
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
                    div.setAttribute('id', 'result')
                    var br = document.createElement('br')

                    var title = document.createElement('h1')
                    var description = document.createElement('p')
                    var weather = document.createElement('p')
                    var directions = document.createElement('p')
                    var directionsLink = document.createElement('a')


                    title.setAttribute('class', "card-body")
                    description.setAttribute('class', "card-body")
                    weather.setAttribute('class', "card-body")
                    directions.setAttribute('class', "card-body")
                    directionsLink.setAttribute('class', "card-body")

                    title.textContent = data.data[i].name
                    description.textContent = data.data[i].description
                    weather.textContent = data.data[i].weatherInfo
                    directions.textContent = data.data[i].directionsInfo
                    directionsLink.setAttribute('href', data.data[i].directionsUrl)
                    directionsLink.innerHTML = "Click here for directions"

                    body.appendChild(div)
                    div.appendChild(title)
                    div.appendChild(description)
                    div.appendChild(weather)
                    div.appendChild(directions)
                    div.appendChild(directionsLink)
                    div.appendChild(br)
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
                    div.setAttribute('id', 'result')
                    var br = document.createElement('br')

                    var title = document.createElement('h1')
                    var duration = document.createElement('p')
                    var objective = document.createElement('p')
                    var url = document.createElement('a')

                    title.setAttribute('class', "card-body")
                    duration.setAttribute('class', "card-body")
                    objective.setAttribute('class', "card-body")
                    url.setAttribute('class', "card-body")

                    title.textContent = data.data[i].title
                    duration.textContent = data.data[i].duration
                    objective.textContent = data.data[i].questionobjective
                    url.setAttribute('href', data.data[i].url)
                    url.setAttribute('target', '_blank')
                    url.innerHTML = "Click here to learn more."

                    body.appendChild(div)
                    div.appendChild(title)
                    div.appendChild(duration)
                    div.appendChild(objective)
                    div.appendChild(url)
                    div.appendChild(br)
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
                    div.setAttribute('id', 'result')
                    var br = document.createElement('br')

                    var title = document.createElement('h1')
                    var description = document.createElement('p')
                    var url = document.createElement('a')

                    title.setAttribute('class', "card-body")
                    description.setAttribute('class', "card-body")
                    url.setAttribute('class', "card-body")

                    title.textContent = data.data[i].title
                    description.textContent = data.data[i].listingdescription
                    url.setAttribute('href', data.data[i].url)
                    url.setAttribute('target', '_blank')
                    url.innerHTML = "Link to website"

                    body.appendChild(div)
                    div.appendChild(title)
                    div.appendChild(description)
                    div.appendChild(url)
                    div.appendChild(br)
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
                    div.setAttribute('id', 'result')
                    var br = document.createElement('br')

                    var title = document.createElement('h1')
                    var description = document.createElement('p')
                    var url = document.createElement('a')

                    title.setAttribute('class', "card-body")
                    description.setAttribute('class', "card-body")
                    url.setAttribute('class', "card-body")

                    title.textContent = data.data[i].title
                    description.textContent = data.data[i].listingdescription
                    url.setAttribute('href', data.data[i].url)
                    url.setAttribute('target', '_blank')
                    url.innerHTML = "Click here to learn more."

                    body.appendChild(div)
                    div.appendChild(title)
                    div.appendChild(description)
                    div.appendChild(url)
                    div.appendChild(br)
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
                    div.setAttribute('id', 'result')
                    var br = document.createElement('br')

                    var title = document.createElement('h1')
                    var description = document.createElement('p')
                    var directions = document.createElement('p')
                    var url = document.createElement('a')
                    var directionsUrl = document.createElement('a')


                    title.setAttribute('class', "card-body")
                    description.setAttribute('class', "card-body")
                    directions.setAttribute('class', "card-body")
                    url.setAttribute('class', "card-body")
                    directionsUrl.setAttribute('class', "card-body")

                    title.textContent = data.data[i].name
                    description.textContent = data.data[i].description
                    directions.textContent = data.data[i].directionsInfo
                    url.setAttribute('href', data.data[i].url)
                    url.setAttribute('target', '_blank')
                    url.innerHTML = "Click to visit the website."
                    directionsUrl.setAttribute('href', data.data[i].url)
                    directionsUrl.setAttribute('target', '_blank')
                    directionsUrl.innerHTML = "Link to directions"

                    body.appendChild(div)
                    div.appendChild(title)
                    div.appendChild(description)
                    div.appendChild(url)
                    div.appendChild(br)
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
