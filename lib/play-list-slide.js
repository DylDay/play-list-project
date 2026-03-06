import { LitElement, html, css } from 'lit';

export class PlayListSlide extends LitElement {
  static get tag() {
    return 'play-list-slide';
  }

  constructor() {
    super();
    this.topHeading = "top line heading";
    this.secondHeading = "Slide 1, sub-heading";
  }

  static get properties() {
    return {
      ...super.properties,
      topHeading: { type: String, reflect: true},
      secondHeading: { type: String, reflect: true},
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
        position: relative;
        overflow: hidden;
        padding-left: var(--ddd-spacing-4);
        padding-right: var(--ddd-spacing-4);
      }
      .top-heading {
        font-size: var(--ddd-font-size-xs);
        font-weight: var(--ddd-font-weight-bold);
        text-transform: uppercase;
        color: var(--ddd-theme-default-link);
        
      }
      .second-heading {
        font-size: var(--ddd-font-size-3xl);
        font-weight: var(--ddd-font-weight-bold);
        color: var(--ddd-theme-default-beaverBlue);
      }
      /* need to align hr to the right */
      hr {
        background-color: var(--ddd-theme-default-skyBlue);
        height: 2px;
        width: 60px;
        margin-left: 0;
      }
      .slide-description {
        max-width: 480px;
        max-height: 200px;
        overflow-y: auto;
        color: var(--ddd-theme-default-nittanyNavy);
      }
    `;
  }

  render() {
    return html`
      <div class="top-heading">${this.topHeading}</div>
      <div class="second-heading">${this.secondHeading}</div>
      <hr>
      <div class="slide-description">
        <slot></slot>
      </div>
      <slot name="indicator"></slot>
    `;
}
}
// todo: add correct styles, add small line between second-heading and description
// also updating top-heading in index.html does nothing, needs to be fixed eventually
globalThis.customElements.define(PlayListSlide.tag, PlayListSlide);