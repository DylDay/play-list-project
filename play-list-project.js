/**
 * Copyright 2026 Dylan Dayrit
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "./lib/play-list-slide.js";
import "./lib/slide-arrow.js";
import "./lib/slide-indicator.js";

/**
 * `play-list-project`
 * 
 * @demo index.html
 * @element play-list-project
 */
export class PlayListProject extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "play-list-project";
  }

  constructor() {
    super();
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        color: var(--ddd-theme-default-beaverBlue);
        background-color: var(--ddd-theme-default-slateMaxLight);
        font-family: var(--ddd-font-navigation);
        border-radius: var(--ddd-radius-sm);
        position: relative;
        width: 960px;
        height: 480px;
      }
      .wrapper {
        position: relative;
        display: flex;
        align-items: center;
        height: 100%;
        margin: var(--ddd-spacing-2);
        padding-left: var(--ddd-spacing-4);
        padding-right: var(--ddd-spacing-4);
      }
      .wrapper > slot {
        flex: 1 1 auto;
        display: block;
      }
      h3 span {
        font-size: var(--ddd-font-size-s);
      }
    `];
  }

  // change function to a better name
  // needs to be kept in sync with information update when either button or dot is clicked
  handleEvent(e) {
    this.currentIndex = e.detail.index;
    this.updateSlides();
  }

  // Lit render the HTML
  render() {
    return html`
      <div class="wrapper">
        <slide-arrow direction="previous"></slide-arrow>
        <slot></slot>
        <slide-arrow direction="next"></slide-arrow>
      </div>`;
  }
}

// todo: add proper padding, add slide indicators, add slide arrows
globalThis.customElements.define(PlayListProject.tag, PlayListProject);