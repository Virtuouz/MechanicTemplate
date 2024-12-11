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
        highlightEyebrow: false
        eyebrow: ''
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
