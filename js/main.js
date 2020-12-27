const list = document.getElementsByTagName("li");
let info = {};
let active;
const value = document.getElementById("user_value");
const label = document.getElementById("user_title");
const photo = document.getElementsByClassName("user_img")[0];

const handleMouseOver = () => {};
const useAPI = async () => {
  await fetch("https://randomuser.me/api/")
    .then(async (data) => await data.json())
    .then((data) => {
      console.log(data.results[0]);

      info = data.results[0];
      info.picture = info.picture.large;
      info.name = info.name.first + " " + info.name.last;
      info.birthday = String(info.dob.age);
      info.location =
        info.location.street.number + " " + info.location.street.name;
      info.pass = info.login.password;
      photo.src = info.picture;

      active = list[0];
      active.classList.toggle("active");
      value.innerText = info[active.dataset.label];
      label.innerText = active.dataset.title;
    });
};

useAPI();

[...list].forEach((elem) => {
  elem.onmouseover = () => {
    console.log(elem);
    if (active) {
      active.classList.toggle("active");
    }
    value.innerText = info[elem.dataset.label];
    label.innerText = elem.dataset.title;

    elem.classList.toggle("active");
    active = elem;
  };
});

function refreshPage() {
  location.reload();
  return false;
}
