const baseURL = () => {
  const host = window.location.hostname
  if (host === "localhost" || host === "127.0.0.1") {
    return `https://tranquil-peak-82064.herokuapp.com`
  } else {
    return `https://tranquil-peak-82064.herokuapp.com`
  }

}

module.exports = {
  baseURL
}
