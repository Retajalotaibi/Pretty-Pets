// -----SIDE BAR---------

function onClick() {
  let button = document.getElementById("button");
  button.classList.toggle("is-visible-mobile");
  console.log(button);
  // Showing the side bar
  document.getElementById("sideBar").style.width = "250px";
}
function closeBar() {
  // hiding and toggle
  document.getElementById("sideBar").style.width = "0";
  document.getElementById("button").classList.toggle("is-visible-mobile");
}

// ---------MEET YOUR MATCH--------

function findData() {
  let container, petName, petInfo, petCity, petImage, fillteredData, searchBar;
  // all ot the needed element
  container = document.querySelectorAll(".is-searchResults .widget");
  searchBar = document.getElementById("searchBar");
  petName = document.querySelectorAll(
    ".is-searchResults .widget .widget__desc h4"
  );
  petInfo = document.querySelectorAll(
    ".is-searchResults .widget .widget__desc .info "
  );
  petCity = document.querySelectorAll(
    ".is-searchResults .widget .widget__desc .city "
  );
  petImage = document.querySelectorAll(".widget__image img");
  console.log(petImage);
  // saving the input of the user
  const searchString = searchBar.value.toLowerCase();
  // filtering the data to the user need
  fillteredData = pets.filter((pet) => {
    return pet.city.includes(searchString);
  });

  if (fillteredData.length === 0) {
    // ckeck if there is no data then sent a message to the user

    // 1 -create message
    let noDataMessage = document.createElement("h2");

    // 1.5-set every thing
    noDataMessage.setAttribute("class", "noDataMessage");
    noDataMessage.textContent = "no data";

    // remove carts
    container.forEach((cart) => (cart.style.display = "none"));

    // show the message
    document.querySelector(".is-searchResults").appendChild(noDataMessage);
  } else {
    // make sure the "no data" message is no longer here & show the carts again
    container.forEach((cart) => (cart.style.display = "block"));
    document.querySelector(".noDataMessage").style.display = "none";
    // changing the HTML and showing the filtered data
    for (i = 0; i < fillteredData.length; i++) {
      petInfo[
        i
      ].innerHTML = `${fillteredData[i].info} | ${fillteredData[i].gender}`;
      petName[i].innerHTML = fillteredData[i].name;
      petCity[i].innerHTML = fillteredData[i].city;
      petImage[i].src = fillteredData[i].image;
      petImage[i].style.width = "200px";
    }
  }
}

// -----STORIES-------
document.body.addEventListener("load", showMore());
function showMore() {
  let showMoreButtons, container, theStory, storyContainer, ShowLessButton;
  container = document.querySelectorAll(".stories .widget__desc");
  showMoreButtons = document.querySelectorAll(".link");

  // adding event listeners to the buttons
  showMoreButtons.forEach((button) => {
    console.log("i run");
    button.addEventListener("click", function (event) {
      event.preventDefault();
      // the index needed to know which story the user want
      let index = Array.from(showMoreButtons).indexOf(event.target);
      showMoreButtons[index].style.display = "none";
      theStory = stories[index];

      // 1- creating the story
      storyContainer = document.createElement("p");
      // 1.5- seting every thing
      storyContainer.innerHTML = theStory;
      storyContainer.setAttribute("id", `${index}`);
      storyContainer.style.paddingBottom = "10px";

      // 2- creating show less button
      ShowLessButton = document.createElement("a");
      // 2.5- seting every thing
      ShowLessButton.setAttribute("class", "link");
      ShowLessButton.setAttribute("href", "#");
      ShowLessButton.innerHTML = "Show less";
      console.log(ShowLessButton);

      // 3- appending to the dom
      container[index].appendChild(storyContainer);
      container[index].appendChild(ShowLessButton);

      // handling the (Show less) event
      ShowLessButton.addEventListener("click", (event) => {
        event.preventDefault();
        //showing the button
        showMoreButtons[index].style.display = "block";
        // finding the right element and removing it
        let story = document.getElementById(index);
        story.remove();
        event.target.remove();
      });
    });
  });
}

// DATA :(
let stories = [
  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit repellat esse
nostrum sed id. Sequi sunt sapiente esse nisi quas nulla voluptates est
ducimus commodi. Non harum voluptatibus facere praesentium.`,
  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit repellat esse
nostrum sed id. Sequi sunt sapiente esse nisi quas nulla voluptates est
ducimus commodi. Non harum voluptatibus facere praesentium.`,
  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit repellat esse
nostrum sed id. Sequi sunt sapiente esse nisi quas nulla voluptates est
ducimus commodi. Non harum voluptatibus facere praesentium.`,
];

let pets = [
  {
    name: "ARIES",
    info: "Young",
    city: "kuwait",
    gender: "Female",
    type: "Cat",
    image: "https://images.indianexpress.com/2020/03/cat.jpg",
  },
  {
    name: "momo",
    info: "Young",
    city: "kuwait",
    gender: "Male",
    type: "Cat",
    image:
      "https://static.scientificamerican.com/blogs/cache/file/94F6C309-D83C-4982-99DB682A42B0ABA0_source.jpg?w=590&h=800&3CC992B4-0893-4276-847B101B5677329A",
  },
  {
    name: "BOSCO",
    info: "old",
    city: "kuwait",
    gender: "Male",
    type: "dog",
    image: "https://scx2.b-cdn.net/gfx/news/hires/2018/2-dog.jpg",
  },
  {
    name: "HOMER",
    info: "Young",
    city: "kuwait",
    gender: "Female",
    type: "dog",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRuBoet01IONv0IZANnBNUsIEoNTYgD_EgFlg&usqp=CAU",
  },
  {
    name: "MONTY",
    info: "Young",
    city: "los angeles",
    gender: "female ",
    type: "Cat",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQbx89VZWpdkbuKq7-qiEvZ_b2Dq22qfl7BeA&usqp=CAU",
  },
  {
    name: "SPARKLE",
    info: "old",
    city: "los angeles",
    gender: "Male ",
    type: "Cat",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRmSO2U7XOvrkAwUijVuleUDHWhNOeXprqECw&usqp=CAU",
  },
  {
    name: "PRETTY",
    info: "old",
    city: "los angeles",
    gender: "female ",
    type: "dog",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR4O6OX-wdo2x0DsmFy406YSgvji1I0n8ER5w&usqp=CAU",
  },
  {
    name: "TARA",
    info: "Young",
    city: "los angeles",
    gender: "Male ",
    type: "dog",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4GCtZMzmnVwuqdgNzniwrRQhYuPHXziD8TQ&usqp=CAU",
  },
  {
    name: "YODA",
    info: "Young",
    city: "london",
    gender: "Male",
    type: "Cat",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS7rnkiur4YfWUbStwNchFEiZ5R9az2WKAd5A&usqp=CAU",
  },
  {
    name: "TRUFFLES",
    info: "old",
    city: "london",
    gender: "Female",
    type: "dog",
    image:
      "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2019/04/931/524/white-pomeranian-dog-istock.jpg?ve=1&tl=1",
  },
  {
    name: "roro",
    info: "Young",
    city: "london",
    gender: "Male",
    type: "dog",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR7OwW3v8BH3CP3aAvKPODpS8RCnWjtBsPIuw&usqp=CAU",
  },
  {
    name: "fofo",
    info: "old",
    city: "london",
    gender: "Male",
    type: "Cat",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTXF3cKxWbDDh6cUWoM85YPebK5vySK_mVVaA&usqp=CAU",
  },
];
