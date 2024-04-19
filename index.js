

function fetchText(){
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data => {
      document.getElementById("output").textContent = data.activity
    })
}

document.getElementById("btn").addEventListener('click', fetchText)