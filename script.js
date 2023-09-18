


window.onload = function () {
  setTimeout(function () {
    document.querySelector('.loading-screen').style.display = 'none';
  });
}
var sidebar = document.querySelector(".sidebar"),
  flesh = document.querySelector(".flesh");
(sidebar.onmouseover = function () {
  "sidebar" == sidebar.className && sidebar.classList.add("open");
}),
  (sidebar.onmouseout = function () {
    "sidebar open" == sidebar.className && sidebar.classList.remove("open");
  });
let a1 = document.getElementById("a1"),
  a2 = document.getElementById("a2"),
  a3 = document.getElementById("a3");
-1 < document.location.pathname.indexOf("index")
  ? a1.classList.add("act")
  : -1 < document.location.pathname.indexOf("Profile")
    ? a2.classList.add("act")
    : -1 < document.location.pathname.indexOf("courses") &&
    a3.classList.add("act");
let login = document.getElementById("login"),
  blr = document.getElementById("blur"),
  signup = document.getElementById("signup"),
  msg = document.getElementById("msg");
function login_open() {
  login.classList.add("popup"),
    blr.classList.add("blur"),
    signup.classList.remove("popup");
}
function login_close() {
  login.classList.remove("popup"), blr.classList.remove("blur");
}
function signup_open() {
  signup.classList.add("popup"),
    blr.classList.add("blur"),
    login.classList.remove("popup");
}
function signup_close() {
  signup.classList.remove("popup"), blr.classList.remove("blur");
}
function sign_log_ok() {
  signup.classList.remove("popup"),
    login.classList.remove("popup"),
    blr.classList.add("blur"),
    msg.classList.add("message");
}
function ok_click() {
  blr.classList.remove("blur"), msg.classList.remove("message");
}
document.querySelector("#search_input").addEventListener("input", filterlist);
var data_list = document.getElementById("data_list");
function filterlist() {
  var a = document.querySelector("#search_input"),
    b = a.value.toLowerCase(),
    c = document.querySelectorAll(".search_data_list");
  c.forEach((a) => {
    let c = a.textContent;
    c.toLowerCase().includes(b.toLowerCase())
      ? ((a.style.display = ""), data_list.classList.add("show"))
      : (a.style.display = "none");
  }),
    "" == document.getElementById("search_input").value &&
    data_list.classList.remove("show");
}
function open_pop() {
  document.getElementById("pop").classList.add("show"),
    (document.getElementById("overp").style.visibility = "visible");
}
function close_pop() {
  document.getElementById("pop").classList.remove("show"),
    (document.getElementById("overp").style.visibility = "hidden");
}
document.getElementById("about-link").addEventListener("click", open_pop);
let currentYear = new Date().getFullYear(),
  yearElement = document.querySelector("#cp .copyright p");
yearElement.innerHTML = `&copy; ${currentYear} TI104 Copyrights`;













