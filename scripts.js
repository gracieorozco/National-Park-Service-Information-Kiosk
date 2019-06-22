function alertRequest() {
    var form = document.getElementById("stateForm");
    form.onsubmit = function(e) {
        e.preventDefault();
        var request = new XMLHttpRequest()
        request.open('GET', 'https://developer.nps.gov/api/v1/alerts?stateCode=' + form.state.value + '&api_key=fykgrOCj9nCtRfxqGIbvFccAIjWKC8supUHA2Xk0')
        request.onload = function() {
            var data = JSON.parse(this.response)
            var total = data.total
            if (total >= 50) {
                total = 50
            }
            for (var i = 0; i < total; i++) {
                var div = document.createElement('div')
                div.setAttribute('class', 'card')
                div.setAttribute('id', 'result')
                var br = document.createElement('br')

                var title = document.createElement('h1')
                var description = document.createElement('p')
                var link = document.createElement('a')

                title.setAttribute('class', "card-body")
                description.setAttribute('class', "card-body")
                link.setAttribute('class', "card-body")

                title.textContent = data.data[i].category + ": " + data.data[i].title
                description.textContent = data.data[i].description
                link.setAttribute('href', data.data[i].url)
                link.innerHTML = "Click here for more information"

                body.appendChild(div)
                div.appendChild(title)
                div.appendChild(description)
                div.appendChild(link)
            }
        }
        request.send()
    }
}

function eventsRequest() {
    var form = document.getElementById("stateForm");
    form.onsubmit = function(e) {
        e.preventDefault();
        var request = new XMLHttpRequest()
        request.open('GET', 'https://developer.nps.gov/api/v1/events?stateCode=' + form.state.value + '&api_key=fykgrOCj9nCtRfxqGIbvFccAIjWKC8supUHA2Xk0')
        request.onload = function() {
            var data = JSON.parse(this.response)
            var total = data.total
            if (total >= 50) {
                total = 49
            }
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
        }
        request.send()
    }
}

function newsRequest() {
    var form = document.getElementById("stateForm");
    form.onsubmit = function(e) {
        e.preventDefault();
        var request = new XMLHttpRequest()
        request.open('GET', 'https://developer.nps.gov/api/v1/newsreleases?stateCode=' + form.state.value + '&api_key=fykgrOCj9nCtRfxqGIbvFccAIjWKC8supUHA2Xk0')
        request.onload = function() {
            var data = JSON.parse(this.response)
            var total = data.total
            if (total >= 50) {
                total = 49
            }
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
                url.innerHTML = "Link to article"

                body.appendChild(div)
                div.appendChild(title)
                div.appendChild(date)
                div.appendChild(abstract)
                div.appendChild(url)
                div.appendChild(br)
            }
        }
        request.send()
    }
}

function parksRequest() {
    var form = document.getElementById("stateForm");
    form.onsubmit = function(e) {
        e.preventDefault();
        var request = new XMLHttpRequest()
        request.open('GET', 'https://developer.nps.gov/api/v1/parks?stateCODE=' + form.state.value + '&api_key=fykgrOCj9nCtRfxqGIbvFccAIjWKC8supUHA2Xk0')
        request.onload = function() {
            var data = JSON.parse(this.response)
            var total = data.total
            if (total >= 50) {
                total = 50
            }
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
        }
        request.send()
    }
}

function placesRequest() {
    var form = document.getElementById("stateForm");
    form.onsubmit = function(e) {
        e.preventDefault();
        var request = new XMLHttpRequest()
        request.open('GET', 'https://developer.nps.gov/api/v1/places?stateCode=' + form.state.value + '&api_key=fykgrOCj9nCtRfxqGIbvFccAIjWKC8supUHA2Xk0')
        request.onload = function() {
            var data = JSON.parse(this.response)
            var total = data.total
            if (total >= 50) {
                total = 49
            }
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
                url.innerHTML = "Link to website"

                body.appendChild(div)
                div.appendChild(title)
                div.appendChild(description)
                div.appendChild(url)
                div.appendChild(br)
            }
        }
        request.send()
    }
}

function visitorCenterRequest() {
    var form = document.getElementById("stateForm");
    form.onsubmit = function(e) {
        e.preventDefault();
        var request = new XMLHttpRequest()
        request.open('GET', 'https://developer.nps.gov/api/v1/visitorCenters?stateCode=' + form.state.value + '&api_key=fykgrOCj9nCtRfxqGIbvFccAIjWKC8supUHA2Xk0')
        request.onload = function() {
            var data = JSON.parse(this.response)
            var total = data.total
            if (total >= 50) {
                total = 49
            }
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
                url.innerHTML = "Click to visit the website."
                directionsUrl.setAttribute('href', data.data[i].url)
                directionsUrl.innerHTML = "Link to directions"

                body.appendChild(div)
                div.appendChild(title)
                div.appendChild(description)
                div.appendChild(url)
                div.appendChild(br)
            }
        }
        request.send()
    }
}
