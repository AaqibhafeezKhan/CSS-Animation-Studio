import { useCallback } from 'react'
import useStore from '../store/useStore.js'

export function useLocalFile() {
  const { pushNotification } = useStore()

  const downloadFile = useCallback((content, filename, mimeType = 'text/plain') => {
    const blob = new Blob([content], { type: mimeType })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }, [])

  const downloadJson = useCallback((data, filename) => {
    downloadFile(JSON.stringify(data, null, 2), filename, 'application/json')
  }, [downloadFile])

  const downloadCss = useCallback((css, filename = 'animation.css') => {
    downloadFile(css, filename, 'text/css')
  }, [downloadFile])

  const downloadHtml = useCallback((html, filename = 'animation.html') => {
    downloadFile(html, filename, 'text/html')
  }, [downloadFile])

  const readJsonFile = useCallback((file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = (e) => {
        try {
          resolve(JSON.parse(e.target.result))
        } catch (err) {
          reject(new Error('Invalid JSON file'))
        }
      }
      reader.onerror = () => reject(new Error('Failed to read file'))
      reader.readAsText(file)
    })
  }, [])

  const readTextFile = useCallback((file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = (e) => resolve(e.target.result)
      reader.onerror = () => reject(new Error('Failed to read file'))
      reader.readAsText(file)
    })
  }, [])

  const triggerFileInput = useCallback((accept, onFile) => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = accept
    input.onchange = (e) => {
      const file = e.target.files[0]
      if (file) onFile(file)
    }
    input.click()
  }, [])

  return { downloadFile, downloadJson, downloadCss, downloadHtml, readJsonFile, readTextFile, triggerFileInput }
}
