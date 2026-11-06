/**
 * Snap Pixel base installation: https://developers.snap.com/marketing-api/Ads-API/snap-pixel
 * Sends PAGE_VIEW only; no customer identifiers or purchase events are added.
 * Uses the same initial marketing-permission checks as nancy-triplewhale.js.
 */
(function (w, d) {
  'use strict';
  if (w.NancySnapchatPixel) return;

  var PIXEL_ID = '87bd92cb-92fc-4d5b-8e1a-f46a989cea9e';
  var started = false;
  var consentOverride;

  function consentAllowed() {
    if (w.navigator && w.navigator.globalPrivacyControl === true) return false;
    if (consentOverride !== undefined) return consentOverride;
    try {
      if (w.Cookiebot && w.Cookiebot.consent && w.Cookiebot.consent.marketing === false) return false;
      var privacy = w.Shopify && w.Shopify.customerPrivacy;
      if (privacy && typeof privacy.marketingAllowed === 'function' && !privacy.marketingAllowed()) return false;
    } catch (_) { return false; }
    return true;
  }

  function install() {
    if (started || !consentAllowed()) return;

    // Official asynchronous loader, with a local script variable and duplicate guard.
    (function (e, t, n) {
      if (e.snaptr) return;
      var a = e.snaptr = function () {
        a.handleRequest ? a.handleRequest.apply(a, arguments) : a.queue.push(arguments);
      };
      a.queue = [];
      var r = t.createElement('script');
      r.async = true;
      r.src = n;
      var u = t.getElementsByTagName('script')[0];
      u.parentNode.insertBefore(r, u);
    })(w, d, 'https://sc-static.net/scevent.min.js');

    started = true;
    w.snaptr('init', PIXEL_ID, {});
    w.snaptr('track', 'PAGE_VIEW');
  }

  w.NancySnapchatPixel = {
    pixelId: PIXEL_ID,
    setConsent: function (allowed) {
      consentOverride = allowed === true;
      install();
    }
  };
  w.addEventListener('CookiebotOnAccept', install);
  w.addEventListener('CookiebotOnDecline', install);
  d.addEventListener('visitorConsentCollected', install);
  d.addEventListener('nancy:tracking-consent', function (event) {
    if (event.detail && typeof event.detail.marketing === 'boolean') {
      w.NancySnapchatPixel.setConsent(event.detail.marketing);
    }
  });
  install();
})(window, document);
