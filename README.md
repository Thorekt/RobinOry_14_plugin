# ro_oc_14_plugin_modal

A library to create modal with react.
[GitHub](https://github.com/Thorekt/RobinOry_14_plugin_modal)

## Instalation

```
npm install ro_oc_14_plugin_modal
```

```
yarn add ro_oc_14_plugin_modal
```

## Usage

```JS
import { Modal } from 'ro_oc_14_plugin_modal';

...

const modalClassNames = {
    container: "example-modal-container",
    content: "example-modal-content",
    header: "example-modal-header",
    title: "example-modal-title",
    close: "example-modal-close",
    body: "example-modal-body",
};

<Modal title="Modale title example" isModalOpen={showModal} onClickClose={closeModal} classNames={modalClassNames}>
    <p>A child component</p>
    <span>A span</span>
</Modal>

```

- title : a string representing the title of the modal
- isModalOpen : a boolean to open or close the modal
- onClickClose : a function to call when the close button of the modal is clicked
- classNames : a js object to add class to nodes of modal
  - container : class for the container of the modal
  - content : class for the content of the modal
  - header : class for the header of the modal
  - title : class for the title of the modal
  - close : class for the close of the modal
  - body : class for the body of the modal
- children : not added in props but directly under modal's node, represant nodes to show in modal's body

[Example](https://github.com/Thorekt/RobinOry_14_plugin_modal/blob/main/src/examples/App.js)
