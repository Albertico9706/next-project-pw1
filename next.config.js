/** @type {import('next').NextConfig} */
const nextConfig = {
  /* experimental:{ppr:"incremental"} */
images:{remotePatterns:[
  {hostname:"jobicy.com",
    protocol:"https"
  }
]}
}

module.exports = nextConfig
