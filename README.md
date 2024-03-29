# react-native-x-draggable-list

A cross platform compatible draggable list component for React-Native

## Installation
1. Follow installation instructions for [reanimated](https://github.com/kmagiera/react-native-reanimated) and [react-native-gesture-handler](https://github.com/kmagiera/react-native-gesture-handler). RNGH may require you to make changes to `MainActivity.java`. Be sure to [follow all Android instructions!](https://docs.swmansion.com/react-native-gesture-handler/docs/#android)
2. Install this package using `npm` or `yarn`

with `npm`:

```
npm install --save react-native-x-draggable-list
```

with `yarn`:

```
yarn add react-native-x-draggable-list
```

3. `import DraggableList from 'react-native-x-draggable-list';`

## Usage
The example usage is avaiable in the `/example` directory.

```js
import DraggableList from 'react-native-x-draggable-list';

// ...

<DraggableList />
```

## Supported props

| Name                       | Type                                                                                      | Description
| :------------------------- | :---------------------------------------------------------------------------------------- | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| `data`                     | `T[]`                                                                                     | Items to be rendered.                                                                                                                                                                                              |                                                        |
| `renderItem`               | `(params: { item: T, getIndex: () => number \| undefined, drag: () => void, isActive: boolean}) => JSX.Element` | Call `drag` when the row should become active (i.e. in an `onLongPress` or `onPressIn`).                                                                                                                           |
| `keyExtractor`             | `(item: T, index: number) => string`                                                      | Unique key for each item (required)                                                                                                                                                                                          |
| `onDragBegin`              | `(index: number) => void`                                                                 | Called when row becomes active.                                                                                                                                                                              |
| `onDragEnd`                | `(params: { data: T[], from: number, to: number }) => void`                               | Called after animation has completed. Returns updated ordering of `data`                                                                                                                                           |
| `onPlaceholderIndexChange` | `(index: number) => void`                                                                 | Called when the index of the placeholder changes                                                                                                                                                                   |

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
