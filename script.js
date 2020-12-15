// select all the links
var allLinks = document.querySelectorAll("a");

// select object
var object = document.querySelector(
  "div.views-field.views-field-nothing > span > p:nth-child(6) > font > font"
);

// select bidding date
var biddingDate = document.querySelector(
  "div.views-field.views-field-nothing > span > span:nth-child(19) > font > font"
);

// select publication date
var publicationDate = document.querySelector(
  "div.views-field.views-field-nothing > span > span:nth-child(1) > font > font"
);

// print all the values
console.log(allLinks);
console.log(publicationDate.innerText);
console.log(object.innerText);
console.log(biddingDate.innerText);
