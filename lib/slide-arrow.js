import { LitElement, html, css } from "lit";

export class SlideArrow extends LitElement {
    static get tag() {
        return "slide-arrow";
    }

    static get properties() {
        return {
            ...super.properties,
            direction: { type: String },
        };
    }

    static get styles() {
        return css`
            :host {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
            }
            :host[direction="previous"] {
                left: var(--ddd-spacing-2);
            }
            :host[direction="next"] {
                right: var(--ddd-spacing-2);
            }
        `;
    }

    render() {
        return html`
            <button direction="previous"><</button>
            <button direction="next">></button>
        `;
    }
}
// todo: transparent circles w/ arrow inside
globalThis.customElements.define(SlideArrow.tag, SlideArrow);