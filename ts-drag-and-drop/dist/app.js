"use strict";
class ProjectInput {
    constructor() {
        this.templateElement = document.getElementById("project-input");
        this.hostElement = document.getElementById("app");
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        this.element.id = "user-input";
        this.titleInputElement = this.element.querySelector("#title");
        this.descriptionInputElement = this.element.querySelector("#description");
        this.peopleInputElement = this.element.querySelector("#people");
        this.configure();
        this.attach();
    }
    attach() {
        this.hostElement.insertAdjacentElement("afterbegin", this.element);
    }
    configure() {
        this.element.addEventListener("submit", this.submitHandler.bind(this));
    }
    submitHandler(event) {
        event.preventDefault();
        console.log(this.titleInputElement.value);
    }
}
const prjInput = new ProjectInput();
//# sourceMappingURL=app.js.map