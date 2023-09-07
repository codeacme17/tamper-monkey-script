// ==UserScript==
// @name         Github UI theme
// @namespace    http://github.com
// @match        https://github.com/**
// @version      0.1
// @description  github dark theme
// @author       leyoonafr(https://github.com/codeacme17)
// @require      https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js
// ==/UserScript==

const SYN_CSS = `
:root {
	--border-primary: #5c5c5c;
	--color-canvas-default: #010409 !important;
	--color-canvas-subtle: #010409 !important;
	--color-accent-fg: #bfdbfe !important;
	--color-canvas-subtle: #030712 !important;
	--color-timeline-badge-bg: #1d4ed8 !important;
	--color-accent-emphasis: #d946ef !important;
	--color-success-emphasis: #4ade80 !important;
`
const head = document.getElementsByTagName('head')[0]
const stylesheet = document.createElement('style')
stylesheet.type = 'text/css'
stylesheet.innerText = SYN_CSS
stylesheet.className = 'SYN_CSS'
head.appendChild(stylesheet)

