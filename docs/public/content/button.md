---
title: 'Button Component'
tagline: 'How to use the button component in Tailframe CSS'
lastUpdated: '2023-15-23'
href: 'button'
keywords: ['tailframe', 'tailframe css', 'tailframe css button', 'tailframe button', 'tailframe css buttons', 'tailframe buttons']
---

# Button Component

<div class="flex flex-wrap gap-4">
<button>
  Button Default
</button>

<button outline>
  Button Outline
</button>

<button hasring>
  Button with Ring
</button>

<button disabled>
  Button Disabled
</button>

<button bold>
  Button Bold
</button>

<button elegant>
  Button Elegant
</button>

<button success>
  Button Success
</button>

<button error>
  Button Error
</button>

<button warn>
  Button Warn
</button>
</div>

Tailframe comes with 3 types of buttons: `default`, `outline` and `elegant`. Instead of using classes to change the button type, tailframe uses attributes. This will make it much more simple to read. Here is an example:

```html
<button md hasRing outline>Button Outline</button>
```

You can see the: `hasRing`, `outline` & `md` attributes. The `hasRing` attribute will add a ring to the button on focus. The `outline` attribute will make the button type outline. The `md` attribute will make the button medium sized.

Read about all sizes here: [Libary Sizes](/docs/libary-sizes)

## Button Attributes

Here is a list of all the attributes you can use on buttons:

Types: - `default`, `outline`, `elegant`, `success`, `error`, `warn`

Utilities - `hasRing`, `disabled`, `bold`
