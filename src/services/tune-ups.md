---
_schema: default
draft: false
eleventyExcludeFromCollections: false
disableNav: false
title: Tune Ups
metaDesc:
customCode:
  headCode: ''
  bodyCode: ''
serviceImage: /assets/uploads/tune-up.jpg
imageAltText:
category: Maintenance
summary:
permalink: >-
  /services/{% assign title = title | slugify %}{{ page.filePathStem |
  fileSubstringFilter | append: title | downcase }}/index.html
layout: layouts/page.html
id: 111fed76-3de4-4508-94d4-a698953a26e9
hero:
content_blocks: []
_inputs:
  headCode:
    type: code
    comment: Add code at the end of the <head> tag
  bodyCode:
    type: code
    comment: Add code before the </body> tag
---
