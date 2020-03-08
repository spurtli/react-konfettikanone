<div align="center">
  <img src="./docs/assets/logo.png" alt="react-konfettikanone" width="500px" />
</div>

<div align="center">
  <img src="https://travis-ci.org/spurtli/react-konfettikanone.svg?branch=master" alt="Travis CI"/>
</div>
<br />

`react-konfettikanone` is a light-weight and hardware accelerated React package that lets you celebrate with confetti 🎉🎊
<br />

### ✨ What it looks like

![react-konfettikanone](./docs/assets/demo.png)

<br />

### 🚀 Setup

```bash
yarn add react-konfettikanone
```

<br />

### 👩🏼‍💻 How to use `<Konfettikanone />`

#### `className`

Extend custom styles

#### `colors`

Array of Strings
`["#F6F0FD", "#E3D0FF", "#9C6ADE", "#50248F", "#230051"]`

#### `particles`

Number

#### `duration`

Number

#### `launch`

Boolean

#### `onLaunchEnd`

Function

<br />

### 👷🏼‍♀️ Example

```jsx
import { Konfettikanone } from "react-konfettikanone";
```

```jsx
function CelebrationCard() {
  return (
    <Konfettikanone launch={this.state.launch}>
      <div>
        <h2>🎊 Hooray, hooray! 🎊</h2>
        <p>Let's celebrate and throw some confetti!</p>
      </div>
      <button type="button" onClick={() => this.setLaunched(true)}>
        Confetti!
      </button>
    </Konfettikanone>
  );
}
```

<br />

### 🎫 License

Licensed under the MIT License, Copyright © 2018 Neele Barthel.<br>
See [LICENSE](./LICENSE) for more information.
