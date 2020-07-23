@trenskow/buffered-promise
----

A simple promise for buffering results. Useful for when you want to add `await` or `then`/`catch` handlers at a later point and want to prevent the `uncaughtPromiseRejected` event.

# Usage

````javascript
const BufferedPromise = require('buffered-promise');

const promise = new BufferedPromise(new Promise((resolve, reject) => {
	/* Your promise */
}))
````

# License

See LICENSE
