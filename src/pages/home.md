---
_schema: default
draft: false
title: Professional Mechanic
eleventyExcludeFromCollections: false
disableNav: false
removeFromNavigation: false
eleventyNavigation:
  key: Home
  order: 1
  title:
  parent:
  url:
pageLink: /
permalink: >-
  {% if pageLink == 'blog' or pageLink == 'Blog' %}/{{pageLink | slugify}}{% if
  pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif
  %}/index.html{% elsif pageLink %}/{% assign pagelink = pageLink | slugify
  %}{{  page.filePathStem | fileSubstringFilter | append: pagelink | downcase
  }}/index.html{% else %}/{% assign title = title | slugify %}{{
  page.filePathStem | fileSubstringFilter | append: title | downcase
  }}/index.html{%endif %}
metaDesc:
customCode:
  headCode: ''
  bodyCode: ''
layout: layouts/page.html
hero:
  _bookshop_name: sections/leftRightHero
  content:
    sectionId:
    heading:
      _bookshop_name: generic/heading
      content:
        highlightEyebrow: true
        eyebrow: \[\[st.name\]\] \| serving \[\[tk.area\]\]
        headline: Fast, Reliable Auto Repairs You Can Trust!
        description: Serving the community with honest pricing and top-notch service.
        buttons:
          - _bookshop_name: generic/button
            url: '#'
            openInNewTab: false
            text: Schedule your service now
            color_group: primary
            colorFromGroup: primary
            ghostButton: false
            formSubmit: false
        headingHierarchy: h2
      styles:
        contentAlignment: left
        textAlignment: left
        visualInterest: none
        visualInterestColor: '#000000'
        highContrast: false
        contrastColorGroup:
        contrastAgainst:
        textClassOverride:
    image:
      _bookshop_name: generic/image
      imagePath: /assets/uploads/home/mechanic-crossed-arms.jpg
      imageAlt:
      yAxisPosition:
      imageSizes:
      class:
  styles:
    color_group: primary
    headingRight: false
content_blocks:
  - _bookshop_name: sections/textBreakReview
    content:
      sectionId:
      heading:
        _bookshop_name: generic/heading
        content:
          highlightEyebrow: false
          eyebrow: ''
          headline: Recent reviews
          description: ''
          buttons: []
          headingHierarchy: h2
        styles:
          contentAlignment: center
          textAlignment: center
          visualInterest: none
          visualInterestColor: '#000000'
          highContrast: false
          contrastColorGroup:
          contrastAgainst:
          textClassOverride:
      usePersonImage: true
      reviews:
        - review: 49301fcb-2c3e-4143-b164-23a71185410c
        - review: 8dd4778d-24b7-424b-96f9-63cbb2cc8d80
    styles:
      color_group: 5c9075f8-80f9-4482-b041-91cffdfe02be
  - _bookshop_name: sections/servicesSection
    content:
      sectionId:
      heading:
        _bookshop_name: generic/heading
        content:
          highlightEyebrow: false
          eyebrow: ''
          headline: Our expert services
          description: ''
          buttons: []
          headingHierarchy: h2
        styles:
          contentAlignment: center
          textAlignment: center
          visualInterest: none
          visualInterestColor: '#000000'
          highContrast: false
          contrastColorGroup:
          contrastAgainst:
          textClassOverride:
      showNote: true
    styles:
      color_group: primary
      cardStyle: defaultCard
  - _bookshop_name: sections/simpleCta
    content:
      sectionId:
      CallToAction:
        _bookshop_name: generic/heading
        content:
          highlightEyebrow: false
          eyebrow: Don't see what you need?
          headline: Give us a call and see how we can help your vehicle
          description: ''
          buttons:
            - _bookshop_name: generic/button
              url: '#'
              openInNewTab: false
              text: Book an appointment
              color_group: primary
              colorFromGroup: primary
              ghostButton: false
              formSubmit: false
          headingHierarchy: h2
        styles:
          contentAlignment: center
          textAlignment: center
          visualInterest: none
          visualInterestColor: '#000000'
          highContrast: false
          contrastColorGroup:
          contrastAgainst:
          textClassOverride:
    styles:
      color_group: primary
  - _bookshop_name: sections/sideBySideStandard
    content:
      sectionId:
      heading:
        _bookshop_name: generic/heading
        content:
          highlightEyebrow: false
          eyebrow: ''
          headline: About us
          description: ''
          buttons: []
          headingHierarchy: h2
        styles:
          contentAlignment: center
          textAlignment: center
          visualInterest: none
          visualInterestColor: '#000000'
          highContrast: false
          contrastColorGroup:
          contrastAgainst:
          textClassOverride:
      entries:
        - _bookshop_name: generic/leftRight
          content:
            heading:
              _bookshop_name: generic/heading
              content:
                highlightEyebrow: false
                eyebrow: ''
                headline: In business since 2007
                description: >-
                  Welcome to \[Mechanic Shop Name\], where quality, honesty, and
                  reliability drive everything we do. Located in the heart of
                  \[City/Area\], our shop has been proudly serving the community
                  for over \[X years\]. Whether you're here for routine
                  maintenance, complex repairs, or diagnostics, we treat every
                  vehicle like it’s our own.


                  At \[Mechanic Shop Name\], we believe in more than just fixing
                  cars—we believe in building trust. Our team of certified
                  technicians combines years of expertise with cutting-edge
                  tools to ensure your vehicle gets the care it deserves. From
                  oil changes to transmission repairs, we’re equipped to handle
                  all makes and models, providing you with the peace of mind
                  that your car is in the best hands.


                  What sets us apart? It's our commitment to transparency and
                  customer satisfaction. We take the time to explain every
                  detail of your repair, offering clear estimates with no hidden
                  fees. Our mission is to keep you safe on the road while making
                  your experience as seamless as possible.


                  When you choose \[Mechanic Shop Name\], you're choosing a
                  local business that values hard work, integrity, and
                  community. Stop by today or give us a call to see how we can
                  help keep your vehicle running smoothly.


                  *“At \[Mechanic Shop Name\], your journey is our priority.”*
                buttons: []
                headingHierarchy: h2
              styles:
                contentAlignment: center
                textAlignment: left
                visualInterest: none
                visualInterestColor: '#000000'
                highContrast: false
                contrastColorGroup:
                contrastAgainst:
                textClassOverride:
            image:
              _bookshop_name: generic/image
              imagePath: /assets/uploads/professional-mechanic/two-mechanics.jpg
              imageAlt:
              yAxisPosition:
              imageSizes:
              class:
            entryNumber: 0
          styles:
            color_group: 5c9075f8-80f9-4482-b041-91cffdfe02be
            colorFromGroup: background
    styles:
      color_group: 5c9075f8-80f9-4482-b041-91cffdfe02be
      startImageRight: false
      fullWidth: true
  - _bookshop_name: sections/mediaCards
    content:
      sectionId:
      heading:
        _bookshop_name: generic/heading
        content:
          highlightEyebrow: false
          eyebrow: ''
          headline: Current specials
          description: ''
          buttons: []
          headingHierarchy: h2
        styles:
          contentAlignment: center
          textAlignment: center
          visualInterest: none
          visualInterestColor: '#000000'
          highContrast: false
          contrastColorGroup:
          contrastAgainst:
          textClassOverride:
      cards:
        - _bookshop_name: generic/mediaCards/defaultMediaCard
          content:
            heading:
              _bookshop_name: generic/heading
              content:
                highlightEyebrow: false
                eyebrow: ''
                headline: $10 dollars off your first oil change
                description: >-
                  Keep your engine running smoothly and efficiently with this
                  special offer! New and returning customers can enjoy $10 off
                  their next oil change. Don’t miss this chance to save on
                  routine maintenance.
                buttons:
                  - _bookshop_name: generic/button
                    url: '#'
                    openInNewTab: false
                    text: Claim now
                    color_group: 57af1dbe-0f2e-43f8-8a78-3fc88e5754fe
                    colorFromGroup: accent
                    ghostButton: false
                    formSubmit: false
                headingHierarchy: h2
              styles:
                contentAlignment: left
                textAlignment: left
                visualInterest: none
                visualInterestColor: '#000000'
                highContrast: false
                contrastColorGroup:
                contrastAgainst:
                textClassOverride:
            image:
              _bookshop_name: generic/image
              imagePath: /assets/uploads/oil-change-discount.jpg
              imageAlt:
              yAxisPosition:
              imageSizes:
              class:
          styles:
            color_group: 5c9075f8-80f9-4482-b041-91cffdfe02be
            colorFromGroup: background
        - _bookshop_name: generic/mediaCards/defaultMediaCard
          content:
            heading:
              _bookshop_name: generic/heading
              content:
                highlightEyebrow: false
                eyebrow: ''
                headline: Free break inspection with any service
                description: >-
                  Your safety is our priority! Get a thorough brake inspection
                  at no extra cost when you book any service. Ensure your brakes
                  are in top condition and drive with confidence.
                buttons:
                  - _bookshop_name: generic/button
                    url: '#'
                    openInNewTab: false
                    text: Claim now
                    color_group: 57af1dbe-0f2e-43f8-8a78-3fc88e5754fe
                    colorFromGroup: accent
                    ghostButton: false
                    formSubmit: false
                headingHierarchy: h2
              styles:
                contentAlignment: left
                textAlignment: left
                visualInterest: none
                visualInterestColor: '#000000'
                highContrast: false
                contrastColorGroup:
                contrastAgainst:
                textClassOverride:
            image:
              _bookshop_name: generic/image
              imagePath: /assets/uploads/professional-mechanic/free-brake-inspection.jpg
              imageAlt:
              yAxisPosition: 50
              imageSizes:
              class:
          styles:
            color_group: 5c9075f8-80f9-4482-b041-91cffdfe02be
            colorFromGroup: background
    styles:
      color_group: primary
  - _bookshop_name: sections/reviewCards
    content:
      sectionId:
      heading:
        _bookshop_name: generic/heading
        content:
          highlightEyebrow: false
          eyebrow: ''
          headline: What the community has to say about us
          description: ''
          buttons: []
          headingHierarchy: h2
        styles:
          contentAlignment: center
          textAlignment: center
          visualInterest: none
          visualInterestColor: '#000000'
          highContrast: false
          contrastColorGroup:
          contrastAgainst:
          textClassOverride:
      usePersonImage: false
      reviews:
        - review: 49301fcb-2c3e-4143-b164-23a71185410c
          card_color_group: 5c9075f8-80f9-4482-b041-91cffdfe02be
          colorFromGroup: background
        - review: 32e413d3-3ddc-4acd-ae42-ffb13de752fc
          card_color_group: 5c9075f8-80f9-4482-b041-91cffdfe02be
          colorFromGroup: background
        - review: cf32b299-8ad1-46c9-a970-60c98b1595bc
          card_color_group: 5c9075f8-80f9-4482-b041-91cffdfe02be
          colorFromGroup: background
        - review: adbc85bd-26c5-418c-b504-4cde47466e2d
          card_color_group: 5c9075f8-80f9-4482-b041-91cffdfe02be
          colorFromGroup: background
        - review: b9353b86-3276-4bd5-9cf9-34d5113885b3
          card_color_group: 5c9075f8-80f9-4482-b041-91cffdfe02be
          colorFromGroup: background
        - review: 8dd4778d-24b7-424b-96f9-63cbb2cc8d80
          card_color_group: 5c9075f8-80f9-4482-b041-91cffdfe02be
          colorFromGroup: background
    styles:
      color_group: primary
  - _bookshop_name: sections/coloredCTA
    content:
      sectionId:
      CallToAction:
        _bookshop_name: generic/heading
        content:
          highlightEyebrow: false
          eyebrow: ''
          headline: Ready to get back on the road?
          description: ''
          buttons:
            - _bookshop_name: generic/button
              url: '#'
              openInNewTab: false
              text: Book an appointment
              color_group: primary
              colorFromGroup: background
              ghostButton: false
              formSubmit: false
          headingHierarchy: h2
        styles:
          contentAlignment: center
          textAlignment: center
          visualInterest: none
          visualInterestColor: '#000000'
          highContrast: false
          contrastColorGroup:
          contrastAgainst:
          textClassOverride:
    styles:
      color_group: 5c9075f8-80f9-4482-b041-91cffdfe02be
      card_color_group: primary
      colorFromGroup: primary
  - _bookshop_name: sections/basicFormWithImage
    content:
      sectionId:
      heading:
        _bookshop_name: generic/heading
        content:
          highlightEyebrow: false
          eyebrow: ''
          headline: heading
          description: ''
          buttons: []
          headingHierarchy: h2
        styles:
          contentAlignment: center
          textAlignment: center
          visualInterest: none
          visualInterestColor: '#000000'
          highContrast: false
          contrastColorGroup:
          contrastAgainst:
          textClassOverride:
      image:
        _bookshop_name: generic/image
        imagePath:
        imageAlt:
        yAxisPosition:
        imageSizes:
        class:
      form:
        _bookshop_name: simple/formBuilder
        formName:
        sectionId:
        successPage:
        form_elements: []
        submitButton:
          text: Submit
          color_group: primary
          colorFromGroup: primary
          ghostButton: false
          formSubmit: true
    styles:
      color_group: primary
      form_color_group: primary
_inputs:
  eleventyNavigation:
    hidden: removeFromNavigation
  headCode:
    type: code
    comment: Add code at the end of the <head> tag
  bodyCode:
    type: code
    comment: Add code before the </body> tag
---
