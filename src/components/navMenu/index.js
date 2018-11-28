import BaseElement from '../../utils/baseElement.js';

class NavMenu extends BaseElement {
  render() {
    this.html`
      <style>
        :host {
          display: flex;
          flex: 1;
        }
        ul, li {
          margin: 0;
          padding: 0;
        }
        ul {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          flex: 1;
          padding-right: 30px;
        }
        li {
          display: block;
          list-style: none;
          position: relative;
        }
        li a {
          line-height: 72px;
          padding: 0 16px;
          display: inline-block;
          font-size: 20px;
          text-decoration: none;
        }
        li a, li a:active {
          color: #9e9e9e;
        }
        li.active a {
          color: #fff;
        }
        li span.menuitem-border {
          position: absolute;
          display: block;
          height: 4px;
          left: 16px;
          right: 16px;
          bottom: 0;
          background: #fff;
          transform: scaleY(0);
          transition: all 250ms cubic-bezier(.4,0,.2,1);
        }
        li.active span.menuitem-border {
          transform: scaleY(1)
        }
      </style>
      <ul>
        <li class="active">
          <a href="#">Collection</a>
          <span class="menuitem-border"></span>
        </li>
        <li>
          <a href="#">Practice</a>
          <span class="menuitem-border"></span>
        </li>
      </ul>
    `;
  }
}

customElements.define('v-nav-menu', NavMenu);
