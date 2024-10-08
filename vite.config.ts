import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src/'),
      components: `${path.resolve(__dirname, './src/components/')}`,
      public: `${path.resolve(__dirname, './public/')}`,
      pages: path.resolve(__dirname, './src/pages'),
      configs: `${path.resolve(__dirname, './src/configs')}`,
      constants: `${path.resolve(__dirname, './src/configs/constants')}`,
      libs: `${path.resolve(__dirname, './src/libs')}`,
      images: `${path.resolve(__dirname, './src/assets/images')}`,
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        additionalData: `
          @import "${__dirname}/src/styles/_global.style.less";
          @import "${__dirname}/src/styles/_variables.style.less";
          @import "${__dirname}/src/styles/fonts.less";
          `,
      },
    },
  },
  server: {
    open: true,
    watch: {
      usePolling: true,
    },
    host: true,
    strictPort: true,
    port: 3000,
  }
});
