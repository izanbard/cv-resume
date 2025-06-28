function getImageUrl(name: string) {
  return new URL('/images/' + name, import.meta.url).href
}
export { getImageUrl }
