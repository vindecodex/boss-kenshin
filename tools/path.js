export const isHome = (currentPath) => currentPath === '/';
export const isPathOf = (currentPath, path) => path.includes(currentPath.split('/')[1]);
export const isPath = (currentPath, path) => path === currentPath;
