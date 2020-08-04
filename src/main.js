import List from './lib/List.jsx'

export {
  List
}

// Define a Standard on window.render[ComponentName]
window.renderList = (containerId, path) => {
  ReactDOM.render(
    <List path={path} />,
    document.getElementById(containerId),
  );
};

window.unmountDetail = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};
