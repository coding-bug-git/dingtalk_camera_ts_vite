import { defineConfig, loadEnv } from 'vite'
import * as path from 'path'
import { createPlugins } from './vite'

// https://vitejs.dev/config/
export default ({ mode, command }) => {
  const env = loadEnv(mode, process.cwd())
  const proxy = {
    [env.VITE_APP_BASE_API]: {
      target: env.VITE_APP_APIURL,
      changeOrigin: true,
      rewrite: (path) => path.replace(env.VITE_APP_BASE_API, '')
    }
    // '/dev-api': {
    //   target: 'http://localhost:8080/dev-api',
    //   changeOrigin: true,
    //   rewrite: (path) => path.replace(/^\/dev-api/, '')
    // }
  }
  return defineConfig({
    plugins: createPlugins(env, command),

    server: {
      host: '0.0.0.0',
      port: 9123,
      // open: true,
      proxy: mode === 'dev' ? proxy : {}
    },
    resolve: {
      alias: [
        {
          find: '@',
          replacement: path.resolve(__dirname, 'src')
        }
      ]
    }
  })
}
