export abstract class CustomWebComponent extends HTMLElement {

  public static register(name: string, constructor: CustomElementConstructor, options?: ElementDefinitionOptions) {
    window.customElements.define(name, constructor, options);
  }
}
