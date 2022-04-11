import { reactive, watchEffect } from 'vue'
import { compileFile, File, ReplStore } from '@vue/repl'

const defaultMainFile = 'PdfSdkMain.vue'
const defaultAppFile = 'App.vue'
const ELEMENT_PLUS_FILE = 'element-plus.js'

const preloadPdfCssCode =  `
await loadStyle()
export function loadStyle() {
  console.log('loadStyle');
  return new Promise((resolve, reject) => {
    const link = document.createElement('link')
  	link.rel = 'stylesheet'
  	link.href = '../pdf-document-viewer/dist/style.css'
    link.onload = resolve
    link.onerror = reject
  	document.body.appendChild(link)
  })
}
`

const isHidden = !import.meta.env.DEV

export class CustomReplStore extends ReplStore {
  
   constructor(){
     super()
   }
    

  async init() {
    this.state.files['preloadPdfCss'] = new File(
      'preloadPdfCss',
      preloadPdfCssCode,
      false
    )
    console.log( this.state.files, ' this.state.files');
    for (const file of Object.values(this.state.files)) {
      compileFile(this, file)
    }
    watchEffect(() => compileFile(this, this.state.activeFile))
  }
}