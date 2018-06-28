const baseURL = () => {
  const host = window.location.hostname
  if (host === "localhost" || host === "127.0.0.1") {
    return `http://localhost:3000`
  } else {
    return `http://quantified-self-rails.us-west-2.elasticbeanstalk.com/`
  }

}

module.exports = {
  baseURL
}
