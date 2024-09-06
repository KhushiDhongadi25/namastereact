// const heading = document.createElement("h1");
// heading.innerHTML = "Namaste js";
// const root= document.getElementById("root");
// root.appendChild(heading);

const heading1 = React.createElement("h1", {id:"title"}, "namaste everyoneee");
const heading2 = React.createElement("h2", {id:"title"}, "namaste everyone again");
const container = React.createElement("div", {id:"container"}, [heading1, heading2]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);

// const heading1 = React.createElement{
//     "h1",
//     {
//         id:"title",
//     },
//     "heading1"
// };

// const heading2 = React.createElement{
//     "h2",
//     {
//         id:"title",
//     },
//     "heading2"
// };

// const container = React.createElement{
//     "div",
//     {
//         id:"container",
//     },
//     [heading1, heading2]
// };