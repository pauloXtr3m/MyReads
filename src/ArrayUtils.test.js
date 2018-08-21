import React from 'react'
import * as ArrayUtils from './ArrayUtils'

describe('[Utils] Arrays functions', () => {

	it('group books from api correctly', () => {
		const books = [
			{name:'Creating react apps', shelf:'reading'},
			{name:'Creating Rails apps', shelf:'toRead'},
			{name:'Creating Angular apps', shelf:'reading'},
		];

		const byShelf = item => {return item.shelf;};
		const result = ArrayUtils.groupBy(books, byShelf).get('reading');

		expect(result).toHaveLength(2);
	});
});