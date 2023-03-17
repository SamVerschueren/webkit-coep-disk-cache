module.exports = {
    files: ['./src/**/*.{html,js,css}'],
    server: {
      baseDir: './src',
    },
    middleware: [
      function (req, res, next) {
        if (req.url === '/') {
            res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
        }
  
        if (req.url === '/iframe.html') {
            res.setHeader('Cache-Control', 'public, max-age: 3600');

            res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin');
            res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
        }

        next();
      },
    ],
  };
  