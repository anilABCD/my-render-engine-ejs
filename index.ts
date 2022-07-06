import ejs from "./ejs/ejs";

let item = { path: "some url", text: "some text" };

let html = ejs.render(
  '<a href="<%= path %>" target="_blank"><%= text %> <%= path %></a>',
  {
    path: item.path,
    text: item.text,
  }
);

// const parser = new DomParser();
// var dom = parser.parseFromString(html);

window.onload = function (e) {
  let root = document.getElementById("root");
  debugger;
  if (root) {
    root.innerHTML = html;
  }
};

export {};
