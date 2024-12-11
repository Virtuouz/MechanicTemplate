---
_schema: default
draft: false
eleventyExcludeFromCollections: false
disableNav: false
title: Engine Diagnostics
metaDesc:
customCode:
  headCode: ''
  bodyCode: ''
serviceImage: /assets/uploads/engine-diagnostic.jpg
imageAltText:
category: Repair
summary:
permalink: >-
  /services/{% assign title = title | slugify %}{{ page.filePathStem |
  fileSubstringFilter | append: title | downcase }}/index.html
layout: layouts/page.html
id: dd65b9c8-9f3c-4786-a1d6-f1f84c2d1b0a
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
