class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  constructor() {
    //instantiate elements
    this.templateElement = document.getElementById(
      "project-input"
    )! as HTMLTemplateElement;
    this.hostElement = document.getElementById("app")! as HTMLDivElement;

    //import child elements from node
    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );

    //create form element and attach to host element
    this.element = importedNode.firstElementChild as HTMLFormElement;
    this.element.id = "user-input";

    //access all classes within the object
    this.titleInputElement = this.element.querySelector(
      "#title"
    ) as HTMLInputElement;

    this.descriptionInputElement = this.element.querySelector(
      "#description"
    ) as HTMLInputElement;

    this.peopleInputElement = this.element.querySelector(
      "#people"
    ) as HTMLInputElement;

    //add listener to inputs and attach to host element
    this.configure();
    this.attach();
  }
  //attach form element to host element
  private attach() {
    this.hostElement.insertAdjacentElement("afterbegin", this.element);
  }

  //add listener to inputs
  private configure() {
    this.element.addEventListener("submit", this.submitHandler.bind(this));
  }

  private submitHandler(event: Event) {
    event.preventDefault();
    console.log(this.titleInputElement.value);
  }
}
//instantiate project input class
const prjInput = new ProjectInput();
