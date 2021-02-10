const GOOGLEMAPS_LATLONG = (address) => {
  if (address == "") {
    return "";
  }
  const { results: [data = null] = [] } = Maps.newGeocoder().setRegion("ru").geocode(address);
  if (data === null) {
    throw new Error('Address not found!');
  }
  const { geometry: { location: { lat, lng } } = {} } = data;
  return `${lat}, ${lng}`;
};
