// ==UserScript==
// @name         Github UI theme
// @namespace    http://github.com
// @match        https://github.com/**
// @version      0.1
// @description  github dark theme
// @author       leyoonafr(https://github.com/codeacme17)
// @require      https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js
// ==/UserScript==

var synCss = `
:root {
	--border-primary: #5c5c5c;
	--color-canvas-default: #010409 !important;
    --color-canvas-subtle: #010409 !important;
    --color-accent-fg: #fff !important;
    --color-accent-emphasis: transparent !important;
    --color-canvas-subtle: #030712 !important;
    --color-timeline-badge-bg: #1d4ed8 !important;
`

var head = document.getElementsByTagName('head')[0]
var stylesheet = document.createElement('style')
stylesheet.type = 'text/css'
stylesheet.innerText = synCss
stylesheet.className = 'synCss'
head.appendChild(stylesheet)
