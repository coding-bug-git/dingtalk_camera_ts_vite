import vue from '@vitejs/plugin-vue'
import createAutoImport from './createAutoImport'

export function createPlugins (viteEnv: Record<string, string>, isBuild = false) {
  const plugins = [vue()]
  plugins.push(...createAutoImport())
  return plugins
}
