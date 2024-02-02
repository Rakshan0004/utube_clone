const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://echo.paw.cloud/?part=snippet&order=date&q=music&maxResults=50");
xhr.setRequestHeader("X-RapidAPI-Key", "6dcaf33012msh01b03d1e427a5d4p192f43jsn812b1d0d37ca");
xhr.setRequestHeader("X-RapidAPI-Host", "youtube-v31.p.rapidapi.com");

xhr.send(data);