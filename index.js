import CustomPromise from '@trenskow/custom-promise';

export default class BufferedPromise extends CustomPromise {

	constructor(promise) {

		if (typeof promise !== 'object' || typeof promise.then !== 'function') throw new SyntaxError('Promise not provided.');

		super();

		promise
			.then(
				(result) => this._resolve(result),
				(error) => this._reject(error)
			);

	}

};
