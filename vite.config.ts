import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import ElementPlus from 'unplugin-element-plus/vite'

const elementPlusResolver = ElementPlusResolver()

// https://vitejs.dev/config/
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  console.log(env.VITE_APP_BASE_API)
  return defineConfig({
    plugins: [
      vue(),
      ElementPlus(), // 解决 elmessage 无样式
      AutoImport({
        resolvers: [elementPlusResolver],
        imports: ['vue', 'vue-router'],
        eslintrc: {
          enabled: true, // Default `false`
          filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
          globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
        }
      }),
      Components({
        resolvers: [elementPlusResolver]
      })
    ],
    server: {
      host: '0.0.0.0',
      port: 9123,
      open: true,
      proxy: {
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
