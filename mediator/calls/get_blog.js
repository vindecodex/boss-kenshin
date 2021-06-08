const getBlog = async (slug) => {
  const blog = await fetch(`sanity${slug}`);
  return blog.json();
}

export default getBlog;
