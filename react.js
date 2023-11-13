function render(element, container) {
  const domElement = document.createElement(element.type);
  domElement.innerHTML = element.children;
  for(let prop in element.props) {
    if(prop === "children") continue;
    domElement.setAttribute(prop, element.props[prop]);
  }

  container.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    className: "container",
    href: "https://aws.amazon.com/",
    target: "_blank",
  },
  children: "Hello World",
};

const mainContainer = document.getElementById("root");

render(reactElement, mainContainer);
