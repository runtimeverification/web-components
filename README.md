# RV Shared Components Library

This is a shared components library built with `React` and `TypeScript`, optimized for use with modern web applications.
The library is bundled using `Rollup` for bundle library and comes with built-in support for `Storybook`
and `Tailwind CSS`.

## Installation

To install the `shared-components` library, run the following command:

```

    yarn add https://github.com/runtimeverification/shared-components#master

```

## Usage

To use the `shared-components` library, import the components you need from the library:

```

    import { Button } from 'shared-components';

    function App() {
      return (
        <div>
          <Button />
        </div>
      );
    }

    export default App;

```

## Development

To develop new components in library, first clone the repository and install the required dependencies:

```

git clone https://github.com/runtimeverification/shared-components.git
cd shared-components
yarn install

```

### Building the library

To build the library, run the following command:

```

    yarn build

```

This command generates the **CommonJS**, **ESM**, and **TypeScript** declaration files in the `dist` directory.

### Running Storybook

To start the Storybook development server, run:

```
    yarn storybook
```

## Adding new components

To add a new component to the library,

- create a new directory in the `src/components` directory and add the component.
- use `src/components/MyComponent/index.ts` as the entry point for the component.
- add the component to the `src/index.ts` file.

### Developing new components

Import the component you want to develop in the `pages/index.ts` file and start the development server with command:

```
    yarn dev
```

```
import Footer from "../src/components/Footer";

export default function Home() {
  return (
    <div>
      <Footer />
    </div>
  );
}
```

After you finished changes remove the import from `pages/index.ts` and save changes.

### Adding new stories

Once you created component, you can add stories for it in `<ComponentName>.stories.ts` file. And run the storybook server with command:

```
    yarn storybook
```


## Deploying new version

To deploy new version of the library, run the following command:

```
    yarn build
```

After that commit and push `dist` folder to main branch.