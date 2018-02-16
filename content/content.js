const main = `<main id="content" role="main">

<div class="grid-row">
  <div class="column-two-thirds">

    <h1 class="heading-xlarge">
      <span class="heading-secondary">GOV.UK elements</span>
      Example: Grid layout
    </h1>
    <a class="button button-start" href="#" role="button">Start now</a>
  </div>
</div>

<div class="grid-row">
  <div class="column-two-thirds">
    <h2 class="bold-medium">Two thirds</h2>
    <div class="text">
      <p>
        This guide shows how to make your service look consistent with the rest of GOV.UK. It includes example code and guidance for layout, typography, colour, images, icons, forms, buttons and data.
      </p>
      <p>
        This guide shows how to make your service look consistent with the rest of GOV.UK. It includes example code and guidance for layout, typography, colour, images, icons, forms, buttons and data.
      </p>
    </div>
  </div>
  <div class="column-one-third">
    <h2 class="bold-medium">One third</h2>
    <p>
      This guide shows how to make your service look consistent with the rest of GOV.UK. It includes example code and guidance for layout, typography, colour, images, icons, forms, buttons and data.
    </p>
  </div>
</div>

<div class="grid-row">
  <div class="column-one-third">
    <h2 class="bold-medium">One third</h2>
    <p>
      This guide shows how to make your service look consistent with the rest of GOV.UK. It includes example code and guidance for layout, typography, colour, images, icons, forms, buttons and data.
    </p>
  </div>
  <div class="column-one-third">
    <h2 class="bold-medium">One third</h2>
    <p>
      This guide shows how to make your service look consistent with the rest of GOV.UK. It includes example code and guidance for layout, typography, colour, images, icons, forms, buttons and data.
    </p>
  </div>
  <div class="column-one-third">
    <h2 class="bold-medium">One third</h2>
    <p>
      This guide shows how to make your service look consistent with the rest of GOV.UK. It includes example code and guidance for layout, typography, colour, images, icons, forms, buttons and data.
    </p>
  </div>
</div>

<div class="grid-row">
  <div class="column-one-half">
    <h2 class="bold-medium">One half</h2>
    <p>
      This guide shows how to make your service look consistent with the rest of GOV.UK. It includes example code and guidance for layout, typography, colour, images, icons, forms, buttons and data.
    </p>
  </div>
  <div class="column-one-half">
    <h2 class="bold-medium">One half</h2>
    <p>
      This guide shows how to make your service look consistent with the rest of GOV.UK. It includes example code and guidance for layout, typography, colour, images, icons, forms, buttons and data.
    </p>
  </div>
</div>

<div class="grid-row">
  <div class="column-one-half">
    <h2 class="bold-medium">One half</h2>
    <p>
      This guide shows how to make your service look consistent with the rest of GOV.UK. It includes example code and guidance for layout, typography, colour, images, icons, forms, buttons and data.
    </p>
  </div>
  <div class="column-one-quarter">
    <h2 class="bold-medium">One quarter</h2>
    <p>
      This guide shows how to make your service look consistent with the rest of GOV.UK. It includes example code and guidance for layout, typography, colour, images, icons, forms, buttons and data.
    </p>
  </div>
  <div class="column-one-quarter">
    <h2 class="bold-medium">One quarter</h2>
    <p>
      This guide shows how to make your service look consistent with the rest of GOV.UK. It includes example code and guidance for layout, typography, colour, images, icons, forms, buttons and data.
    </p>
  </div>
</div>

<div class="grid-row">
  <div class="column-one-quarter">
    <h2 class="bold-medium">One quarter</h2>
    <p>
      This guide shows how to make your service look consistent with the rest of GOV.UK. It includes example code and guidance for layout, typography, colour, images, icons, forms, buttons and data.
    </p>
  </div>
  <div class="column-one-quarter">
    <h2 class="bold-medium">One quarter</h2>
    <p>
      This guide shows how to make your service look consistent with the rest of GOV.UK. It includes example code and guidance for layout, typography, colour, images, icons, forms, buttons and data.
    </p>
  </div>
  <div class="column-one-quarter">
    <h2 class="bold-medium">One quarter</h2>
    <p>
      This guide shows how to make your service look consistent with the rest of GOV.UK. It includes example code and guidance for layout, typography, colour, images, icons, forms, buttons and data.
    </p>
  </div>
  <div class="column-one-quarter">
    <h2 class="bold-medium">One quarter</h2>
    <p>
      This guide shows how to make your service look consistent with the rest of GOV.UK. It includes example code and guidance for layout, typography, colour, images, icons, forms, buttons and data.
    </p>
  </div>
</div>

</main>`;

// just a string of markup to inject into the page template when it gets built
const templateContent = 
{
  topOfPage: '<!-- topOfPage -->',
  htmlLang: 'en',
  assetPath: './assets/',
  pageTitle: 'Title',
  head: '<!-- head -->',
  bodyClasses: 'bodyClasses',
  bodyStart: '<!-- bodyStart -->',
  skipLinkMessage: 'skipLinkMessage',
  cookieMessage: '<p>GOV.UK uses cookies to make the site simpler. <a href="https://www.gov.uk/help/cookies">Find out more about cookies</a></p>',
  headerClass: 'headerClass',
  homepageUrl: 'https://gov.uk',
  logoLinkTitle: 'logoLinkTitle',
  globalHeaderText: 'GOV.UK',
  insideHeader: '<!-- insideHeader -->',
  propositionHeader: '<!-- propositionHeader -->',
  afterHeader: '<!-- afterHeader -->',
  content: main,
  footerTop: '<!-- footerTop -->',
  footerSupportLinks: 'footerSupportLinks',
  licenceMessage: '<p>All content is available under the <a href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/" rel="license">Open Government Licence v3.0</a>, except where otherwise stated</p>',
  crownCopyrightMessage: '© Crown copyright',
  bodyEnd: '<!-- BodyEnd -->'
}

exports.content = function() {
  return templateContent;
};