import { LitElement, html, css } from "lit";

export class SlideIndicator extends LitElement {
    static get tag() {
        return "slide-indicator";
    }

    render() {
        return html`
            . . . .
        `;
    }
}
// todo: add circles, add colors
// js functionality when project (or whatever works best) updated, get slide index, update indicator to reflect that
globalThis.customElements.define(SlideIndicator.tag, SlideIndicator);