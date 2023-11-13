function render(element, container) {
  const domElement = document.createElement(element.type);
  domElement.innerHTML = element.children;
  domElement.setAttribute("class", element.props.className);
  domElement.setAttribute("href", element.props.href);
  domElement.setAttribute("target", element.props.target);

  container.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    className: "container",
    href: "http://www.baidu.com",
    target: "_blank",
  },
  children: "Hello World",
};

const mainContainer = document.getElementById("root");

render(reactElement, mainContainer);
