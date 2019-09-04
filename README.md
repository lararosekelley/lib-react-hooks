# lib-react-hooks

> General purpose React hooks library

---

[![npm version](https://badge.fury.io/js/lib-react-hooks.svg)](https://badge.fury.io/js/lib-react-hooks)
[![build status](https://travis-ci.org/tylucaskelley/lib-react-hooks.svg?branch=master)](https://travis-ci.org/tylucaskelley/lib-react-hooks)

## Installation

Install with `yarn`:

```bash
$ yarn add lib-react-hooks
```

Or, `npm` if you prefer:

```bash
$ npm install --save lib-react-hooks
```

## Usage

Simply import any hooks you want to use in your React component. Example using `useAsync`:

```js
import React from 'react';
import { useAsync } from 'lib-react-hooks';

const Component = () => {
  const request = useAsync(async () => {
    const response = await fetch('https://api.example.com/users/123');
    return response.json();
  });

  return (
    <div>
      {request.complete ? (
        <p>{`Name: ${request.data.name}`}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
```

## Available hooks

See the [documentation site](https://lib-react-hooks.tlk.codes) for more.

## License

MIT License. See [LICENSE](./LICENSE) file for details.
