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
        width: 1080px;
        height: 510px;
        overflow: hidden;
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
      .slide-description {
        max-width: 480px;
        max-height: 240px;
        overflow-y: auto;
        overflow-x: hidden;
      }
    `;
  }

  render() {
    return html`
      <div class="top-heading">${this.topHeading}</div>
      <div class="second-heading">${this.secondHeading}</div>
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