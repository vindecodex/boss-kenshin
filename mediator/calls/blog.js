const getBlog = async (slug) => {
	const blog = await fetch(`https://i7s1kv7l.api.sanity.io/v1/data/query/production?query=*%5B_type%3D%3D%22post%22%20%26%26%20slug.current%20%3D%3D%20%22${slug}%22%5D%7B%0A%20%20body%2C%0A%20%20title%0A%7D`);
	return blog.json();
}

export default getBlog;
