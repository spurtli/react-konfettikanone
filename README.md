<div align="center">
  <img src="./docs/assets/logo.png" alt="react-konfettikanone" width="500px" />
</div>

<div align="center">
  <img src="https://travis-ci.org/spurtli/react-konfettikanone.svg?branch=master" alt="Travis CI"/>
</div>

## What it looks like

![react-konfettikanone](./docs/assets/demo.png)

## Install

**npm**

```bash
npm i -S react-konfettikanone
```

**yarn**

```bash
yarn add react-konfettikanone
```

## Example

```js
import {Konfettikanone, Launcher} from "react-konfettikanone";
```

```JSX
render() {
  <div>
    <Konfettikanone launch={this.state.launch}>
      <div>
        <h2>🎊 Hooray, hooray! 🎊</h2>
        <p>Let's celebrate and throw some confetti!</p>
      </div>
      <Launcher onClick={() => this.setState({launch: true}))} />
    </Konfettikanone>
  </div>
}
```

## Props

### `<Konfettikanone />`

#### `className`

Extend custom styles

#### `colors`

Array of Strings
`["#F6F0FD", "#E3D0FF", "#9C6ADE", "#50248F", "#230051"]`

#### `density` – coming soon

#### `duration` – coming soon

#### `launch`

Boolean

#### `onLaunchEnd`

Function

#### `shape` – coming soon

#### `size` – coming soon

Object
`{'10px', '8px'}`

---

### `<Launcher />`

#### `onClick`

Function

## License

Licensed under the MIT License, Copyright © 2018 Neele Barthel.<br>
See [LICENSE](./LICENSE) for more information.
