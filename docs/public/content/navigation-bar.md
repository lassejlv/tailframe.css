# Navigation Bar

Tailframe provides a simple navigation bar component, wich can be customzied as you like. Example:

```html
<nav class="!flex-col md:!flex-row !space-y-3 md:space-y-0" navbar>
  <h1 class="logo">My Navbar</h1>
  <ul class="list">
    <li class="item">
      <a href="#" class="link">Home</a>
    </li>
  </ul>
</nav>
```

**NOTE** This example also contains classes from [Tailwind CSS](https://tailwindcss.com). You can ofcourse style the navbar as you like.

In the example we add the attribute `navbar` to the `nav` element. This comes with classes to style the navbar: `list` and `item`
