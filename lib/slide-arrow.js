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
                display: inline-flex;
                align-items: center;
            }
            .wrapper {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: var(--ddd-spacing-2);
            }
            button {
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 100%;
                border: 2px solid var(--ddd-theme-default-beaverBlue);
                background-color: transparent;
                color: var(--ddd-theme-default-beaverBlue);
                font-size: var(--ddd-font-size-2xl);
                cursor: pointer;
            }
            :host[direction="previous"] {
                // want button to be 50% out of the project container
                left: var(--ddd-spacing-2);
            }
            :host[direction="next"] {
                right: var(--ddd-spacing-2);
            }
        `;
    }

    render() {
        const direction = this.direction === "previous" ? "<" : ">";
        return html`
        <div class="wrapper">
            <!-- right now two buttons appear for each <button> tag, need to fix so only one appears -->
            <button direction="${this.direction}">${direction}</button>
        </div>
        `;
    }
}
// todo: make the button a circle border radius if possible, position "next" button on the right instead of left
globalThis.customElements.define(SlideArrow.tag, SlideArrow);