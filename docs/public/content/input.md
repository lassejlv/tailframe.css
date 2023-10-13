# Input Component

Like any other of our components, the input component also uses attributes to define its behavior. Example:

```html
<input type="text" placeholder="Enter value" />
```

You see, nothing special here. Just a clean HTML input field. But what if we want to add some validation to it? Or maybe we want to add a label to it? We gotchu covered! Use the attributes below to add some extra functionality to your input fields.

### Using invalid="true"

```html
<input type="text" placeholder="Enter value" invalid="true" />
```

Will have a red border around it. And with a CSS animation, it will shake a little bit. This is a nice way to show the user that the input is invalid. Also with an icon inside the input field, it will be shown in red. To get the same result as above, you can also use the attribute invalid="false". This will have a green border around it and a green icon inside the input field.
