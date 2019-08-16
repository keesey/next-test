# Overview

Start the app by running `yarn dev` and poiniting your browser to `http://localhost:3000`.

Open `pages/index.js`.

# Linking

1. Find the `Popular Events` anchor and use Next.js' `Link` component to link it to `/popular`.
2. Follow the link in the browser.

# Displaying Asynchronously-Loaded Data

Open `pages/popular/index.js` and `src/services/popularEvents.js`.

1. Find the `URL` constant in `src/services/popularEvents.js` and open it to see the data structure.
2. Alter the `popularEvents()` function so that it extracts an array of event objects and returns that instead the raw data.
3. In `getInitialProps()` in `pages/popular/index.js`, use `popularEvents()` to load the events into the properties.
4. In `render()`, use the component in `src/components/EventItem` to render the event objects.
