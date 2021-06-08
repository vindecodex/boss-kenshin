const getTitles = async () => {
  const titles = await fetch('https://i7s1kv7l.api.sanity.io/v1/data/query/production?query=*%5B_type%3D%3D%22post%22%5D%7B%0A%20%20title%2C%0A%20%20_id%2C%0A%20%20slug%0A%7D');
  return titles.json();
}

export default getTitles;
