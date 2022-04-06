import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const crossOriginIsolation = () => ({
  name: 'configure-server',

  configureServer(server) {
    server.middlewares.use((_req, res, next) => {
      res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
      res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
      next();
    });
  }

});
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 4001,
    open: true,
    proxy: {
      '/autodoc/api': {
        target: 'http://bj.cheftin.cn:55650/',
        rewrite: (url) => url.replace('/autodoc/api', 'api'),
      },
    },
  },
  plugins: [vue(), crossOriginIsolation()],
})
