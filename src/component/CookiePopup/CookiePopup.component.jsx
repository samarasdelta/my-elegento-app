import {
  CookiePopupComponent as SourceCookiePopupComponent,
} from 'SourceComponent/CookiePopup/CookiePopup.component';

import './CookiePopup.override.style';

/** @namespace myElegentoApp/Component/CookiePopup/Component */
export class CookiePopupComponent extends SourceCookiePopupComponent {
  renderCTA() {
      return (
          <div
            block="CookiePopup"
            elem="CTA"
            onClick={ this.acceptCookies }
            onKeyDown={ this.acceptCookies }
            role="button"
            tabIndex={ 0 }
          >
              { __('accept and continue') }
          </div>
      );
  }
}

export default CookiePopupComponent;
