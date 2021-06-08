const getTitles = async () => {
  const titles = await fetch('sanity.titles');
  return titles.json();
}

export default getTitles;
