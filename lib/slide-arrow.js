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
                border: 2px solid var(--ddd-theme-default-link);
                background-color: transparent;
                color: var(--ddd-theme-default-link);
                font-size: var(--ddd-font-size-2xl);
                cursor: pointer;
            }
        `;
    }

    handleClick(e) {
        // bubble a simple navigation event so parent can react
        this.dispatchEvent(new CustomEvent('navigate', {
            detail: { direction: this.direction },
            bubbles: true,
            composed: true
        }));
    }

    render() {
        const direction = this.direction === "previous" ? "<" : ">";
        return html`
        <div class="wrapper">
            <!-- right now two buttons appear for each <button> tag, need to fix so only one appears -->
            <button @click="${this.handleClick}" direction="${this.direction}">${direction}</button>
        </div>
        `;
    }
}

globalThis.customElements.define(SlideArrow.tag, SlideArrow);