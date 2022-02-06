function get_last_commmit(repo, element) {
  console.log("Function ran");
  //return "Test";

  fetch("https://api.github.com/repos/".concat(repo))
  .then(response => {
    return response.json();
  }).then(data => {
    last_push = data.pushed_at.replace("T"," ").replace("Z","")
    console.log(last_push)
    append_last_commit(element,last_push)
  }).catch(err => {
    //Do nothing
  })
}

function append_last_commit(element, last_push) {
  var container = document.getElementById(element);
  var span = document.createElement(element.concat("_span"));
  span.innerHTML = last_push;
  container.appendChild(span);
}
