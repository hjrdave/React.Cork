
# React.Cork

A React based library for hooks and utilities.

[![npm version](https://badge.fury.io/js/react-cork.svg)](https://badge.fury.io/js/react-cork) ![example workflow](https://github.com/hjrdave/React.Cork/actions/workflows/npm-publish.yml/badge.svg) 
 

### useAnimate
Do simple animations on elements.
```JSX
import React from "react";
import useAnimate, { Options } from "./useAnimate";

const MyComponent = () => {
  const options: Options = {
    type: "fadeIn",
    delay: 1,
    duration: 2,
    style: {
      backgroundColor: "#f0f0f0",
      padding: "1rem",
      borderRadius: "0.5rem",
    },
    disabled: false,
  };

  const { style } = useAnimate(options);

  return <div style={style}>Hello World!</div>;
};
```

### useCleanupEffect
Fire a cleanup effect when a component unmounts.

```JSX
import React, { useState } from "react";
import useCleanupEffect from "./useCleanupEffect";

const MyComponent = () => {
  const [count, setCount] = useState(0);

  useCleanupEffect(() => {
    console.log("Cleanup effect executed!");
  });

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>You clicked {count} times.</p>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
};
```

### useClipboard
Copy and element or string into the clipboard.

```JSX
import React from "react";
import useClipboard from "./useClipboard";

const MyComponent = () => {
  const { copyToClipboard, copyState, contentRef } = useClipboard();

  const handleCopyClick = () => {
    copyToClipboard("Hello World!");
  };

  return (
    <div>
      <p ref={contentRef}>Copy me!</p>
      <button onClick={handleCopyClick}>{copyState}</button>
    </div>
  );
};

```

### useDataAttributes
Get amd set data-attribute values and listen for changes.

```JSX
import React from "react";
import useDataAttributes from "./useDataAttributes";

const MyComponent = () => {
  const { data } = useDataAttributes("my-data-attribute");

  return (
    <div id="my-data-attribute" data-my-data-attribute="[1, 2, 3]">
      <p>Data: {JSON.stringify(data)}</p>
    </div>
  );
};

```

### useDebounce
Delay the firing of a function between key strokes.

```JSX
import React, { useState } from 'react';
import useDebounce from './useDebounce';

const Search = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const debouncedSearch = useDebounce((searchQuery) => {
    // your search logic here
    // setSearchResults(newResults)
  }, 500);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    debouncedSearch(e.target.value);
  };

  return (
    <div>
      <input type="text" value={query} onChange={handleInputChange} />
      <ul>
        {searchResults.map((result) => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
};
```

### useExports
Export data to a PDF or Excel spreadsheet.

```JSX
import React from 'react';
import useExports from './useExports';

const MyComponent = () => {
  const { exportToExcel, exportToPDF } = useExports();

  const data = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 },
    { id: 3, name: 'Bob', age: 40 },
  ];

  const columnFields = [
    { field: 'id', label: 'ID' },
    { field: 'name', label: 'Name' },
    { field: 'age', label: 'Age' },
  ];

  const handleExcelExport = async () => {
    await exportToExcel(data, columnFields);
  };

  const handlePDFExport = async () => {
    await exportToPDF(data, columnFields);
  };

  return (
    <div>
      <button onClick={handleExcelExport}>Export to Excel</button>
      <button onClick={handlePDFExport}>Export to PDF</button>
    </div>
  );
};

export default MyComponent;
```

### useIdle
Fires an event if there is inactivty after a specified time.

```JSX
import React from 'react';
import useIdle from './useIdle';

const MyComponent = () => {
  const isIdle = useIdle();

  return (
    <div>
      <h1>{isIdle ? 'Idle' : 'Active'}</h1>
      <p>{isIdle ? 'You have been idle for some time.' : 'You are currently active.'}</p>
    </div>
  );
}

export default MyComponent;

```

### useInput
Allows easy getting and setting of a form control value.

```JSX
import React from 'react';
import useInput from './useInput';

const MyForm = () => {
  const { value: name, bind: bindName, reset: resetName } = useInput('');
  const { value: email, bind: bindEmail, reset: resetEmail } = useInput('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`Submitted form with name "${name}" and email "${email}"`);
    resetName();
    resetEmail();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" {...bindName} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" {...bindEmail} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};
```

### useLocalStorage
Set and get values from local storage.

```JSX
import { useState } from 'react';
import useLocalStorage from './useLocalStorage';

const App = () => {
  const { get, set } = useLocalStorage();

  const [name, setName] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
    set('name', event.target.value);
  };

  const storedName = get('name') || '';

  return (
    <div>
      <input type="text" value={name} onChange={handleNameChange} />
      <p>Stored name: {storedName}</p>
    </div>
  );
};

export default App;

```

### useSessionStorage
Set and get values from session storage.

```JSX
import { useState } from "react";
import useSessionStorage from "./useSessionStorage";

const App = () => {
  const [name, setName] = useState("");
  const { set, get } = useSessionStorage();

  const handleNameChange = (e) => {
    setName(e.target.value);
    set("name", e.target.value);
  };

  useEffect(() => {
    const storedName = get("name");
    if (storedName) {
      setName(storedName);
    }
  }, [get]);

  return (
    <div>
      <label htmlFor="name-input">Name:</label>
      <input
        id="name-input"
        type="text"
        value={name}
        onChange={handleNameChange}
      />
    </div>
  );
};

```

### useNonInitialEffect
Life cycle function that does not fire on mount.

```JSX
import React, { useState } from 'react';
import useNonInitialEffect from './useNonInitialEffect';

const MyComponent = () => {
  const [count, setCount] = useState(0);

  useNonInitialEffect(() => {
    console.log('This does not fire on mount, only when count changes.')
    console.log(`count has changed to ${count}`);
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
};

```

### useQuerySelector
Hook alternative to document.querySelector. Easily select and element.

```JSX
import React from 'react';
import useQuerySelector from './useQuerySelector';

const ExampleComponent = () => {
  const { element } = useQuerySelector('.my-class');

  React.useEffect(() => {
    if (element) {
      // do something with the selected element
    }
  }, [element]);

  return (
    <div className="my-class">
      {/* ... */}
    </div>
  );
}

```

### useQueryString
Get query string parameters.

```JSX
import React from 'react';
import useQueryString from './useQueryString';

const MyComponent = () => {
  const [searchTerm, setSearchTerm] = React.useState('');

  // get the 'q' query parameter from the URL
  const query = useQueryString('q');

  React.useEffect(() => {
    setSearchTerm(query || '');
  }, [query]);

  const handleSearch = () => {
    // update the 'q' query parameter in the URL
    window.history.pushState({}, '', `/?q=${searchTerm}`);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

```

