import React from 'react';

export default {
  route: '/',
  view: LandingPage,
  title: 'Welcome',

  // This page is non-interactive; we can render it to HTML
  renderToDom: false,
  renderToHtml: true,
};

function LandingPage() {
  return <>
    This landing page is fully static:
    <ul>
      <li>Its HTML is rendered at build time</li>
      <li>It has no browser-side JavaScript (expect for some autoreload code in dev)</li>
    </ul>
    Other pages:<br/>
    <a href={'/counter'}>/counter</a>
  </>;
}
