# Keyboard Navigation

## Features Added

- **Focus Indicators**: 3px dark pink outline on all interactive elements (Tab key)
- **Skip Link**: "Skip to main content" link appears when you press Tab
- **Logical Tab Order**: Based on proper HTML structure

## How to Test

- Press **Tab** to navigate forward
- Press **Shift + Tab** to navigate backward
- Press **Enter** to activate links
- Press **Space** to activate buttons/checkboxes

## Changes Made

**CSS** (`styles/style.css`):
- Added `:focus-visible` styles for links, buttons, inputs
- Added `.skip-link` styles

**HTML** (all pages):
- Added `<a href="#main-content" class="skip-link">Skip to main content</a>`
- Added `id="main-content"` to `<main>` elements

## WCAG 2.1 Level AA Compliant
