import { LitElement, html, css } from "lit";

export class SlideIndicator extends LitElement {
    static get tag() {
        return "slide-indicator";
    }

    static get properties() {
        return {
            ...super.properties,
            total: { type: Number },
            currentIndex: { type: Number }
        };
    }

    static get styles() {
        return css`
            :host {
                display: block;
            }
            .dots {
                display: flex;
                justify-content: center;
                gap: var(--ddd-spacing-2);
                padding: var(--ddd-spacing-2);
            }
            .dot {
                // change to dd sizes if possible
                width: 12px;
                height: 12px;
                border-radius: 50%;
                background-color: var(--ddd-theme-default-beaverBlue);
                opacity: 0.5;
                cursor: pointer;
            }
            .dots.active {
                opacity: 1;
            }
            `;
    }

    render() {
        for (let i = 0; i < this.total; i++) {
            dots.push(html`
                <span @click="${this._handleDotClick}" class="dot ${i === this.currentIndex ? 'active' : ''}"></span>`);

        }
        return html`
            <div class="dots">
                ${dots}
            </div>
        `;
    }
}
// todo: add dots, add colors
// js functionality when project (or whatever works best) updated, get slide index, update indicator to reflect that
// also add functionality when someone clicks on the dots, update the slide to reflect that
globalThis.customElements.define(SlideIndicator.tag, SlideIndicator);