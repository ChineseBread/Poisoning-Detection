import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'url'
import postToRem from 'postcss-pxtorem'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css:{
    preprocessorOptions:{
      less:{
        javascriptEnabled:true
      }
    },
    postcss:{
      plugins:[
        postToRem({
          rootValue:16,
          propsList:['*'],
          exclude:file => {
            return false
          }
        })
      ]
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src/', import.meta.url)),
    },
    extensions: ['.js', '.ts', '.json','.tsx']
  },
})
