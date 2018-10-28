![react-konfettikanone](./docs/assets/logo.png)
![Travis CI](https://travis-ci.org/spurtli/react-konfettikanone.svg?branch=master)

## What it looks like

![react-konfettikanone](./docs/assets/demo.png)

## Install

```bash
npm i -S react-konfettikanone
```

## Example

```js
import {Konfettikanone} from "react-konfettikanone";
```

```js
render() {
  <div className={wrapper}>
    <Konfettikanone className={customStyles}>
      <div className={card}>
        <h2>🎊 Hooray, hooray! 🎊</h2>
        <p>Let's celebrate and throw some confetti!</p>
      </div>
    </Konfettikanone>
  </div>
}
```

## Props

`<Konfettikanone />` accepts the following props

### `className`

Extend custom styles

### `colors`

Array of Strings
`["#F6F0FD", "#E3D0FF", "#9C6ADE", "#50248F", "#230051"]`

### `density` – coming soon

### `duration` – coming soon

### `shape` – coming soon

### `size` – coming soon

Object
`{'10px', '8px'}`

## License

Licensed under the MIT License, Copyright © 2018 Neele Barthel.

See [LICENSE](./LICENSE) for more information.
