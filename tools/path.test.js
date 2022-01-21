import { isHome, isPath, isPathOf } from './path';

test('Check if / is home', () => {
	expect(isHome('/')).toBe(true);
});
test('Check if /about is not home', () => {
	expect(isHome('/about')).toBe(false);
});

test('Should return true if exact path', () => {
	expect(isPath('/about', '/about')).toBe(true)
});
test('Should return false if not exact path', () => {
	expect(isPath('/about', '/about/addon')).toBe(false)
});

test('Should return true if contains parent path', () => {
	expect(isPathOf('/blog/test', '/blog')).toBe(true)
});
test('Should return false if not contains parent path', () => {
	expect(isPathOf('/blog/test', '/about')).toBe(false)
});


