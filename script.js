
const filterButtons = document.querySelectorAll(".filter_buttons button");
const filterableCards = document.querySelectorAll(".filterable_cards .card");


// filterCards function
const filterCards = e => {
   document.querySelector(".active").classList.remove("active");
   e.target.classList.add("active");
   filterableCards.forEach(card => {
      card.classList.add("hide");
      if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === 'all'){
         card.classList.remove('hide');
      }
   })
};
// add event listener
filterButtons.forEach(button => button.addEventListener( "click", filterCards));


// Select relevant HTML elements
// const filterButtons = document.querySelectorAll(".filter_buttons button");
// const filterableCards = document.querySelectorAll("#filterable_cards .card");

// // Function to filter cards based on filter buttons
// const filterCards = (e) => {
//     document.querySelector(".filter-buttons .active").classList.remove("active");
//     e.target.classList.add("active");

//     filterableCards.forEach(card => {
//         // show the card if it matches the clicked filter or show all cards if "all" filter is clicked
//         if(card.dataset.name === e.target.dataset.filter || e.target.dataset.filter === "all") {
//             return card.classList.replace("hide", "show");
//         }
//         card.classList.add("hide");
//     });
// }

// filterButtons.forEach(button => button.addEventListener("click", filterCards));