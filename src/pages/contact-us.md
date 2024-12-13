---
_schema: default
draft: false
title: Contact Us
eleventyExcludeFromCollections: false
disableNav: false
removeFromNavigation: false
eleventyNavigation:
  key: Contact
  order: 1
  title:
  parent:
  url:
pageLink: contact
permalink: >-
  {% capture varPagePath %}{% if pageLink%}{% assign pageLink = pageLink |
  slugify%}{{  page.filePathStem |fileSubstringFilter | append: pageLink }}{%
  else %}{% assign title = title | slugify%}{{  page.filePathStem
  |fileSubstringFilter | append: title }}{% endif %}{% endcapture %}{% if
  pagination.pageNumber > 0 %}/{{varPagePath | strip}}{% if
  pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}{%
  else %}/{{varPagePath | strip}}{% endif %}/index.html
metaDesc: ''
customCode:
  headCode: ''
  bodyCode: ''
layout: layouts/page.html
hero:
content_blocks:
  - _bookshop_name: sections/largeEmbed
    content:
      sectionId:
      showNote: true
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
      embed:
        _bookshop_name: generic/customEmbed
        embed:
        ratio: auto
      buttons: []
    styles:
      color_group: primary
  - _bookshop_name: sections/5050ImageForm
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
  - _bookshop_name: sections/coloredCTA
    content:
      sectionId:
      CallToAction:
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
    styles:
      color_group: primary
      card_color_group: primary
      colorFromGroup: primary
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
