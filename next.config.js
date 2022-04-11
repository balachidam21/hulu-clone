const debug = process.env.NODE_ENV !== 'production'
module.exports = {
  assetPrefix: debug ? '/hulu-clone/' : '',
  images :{
    loader: 'akamai',
    domains: ["image.tmdb.org"],
  },
};
