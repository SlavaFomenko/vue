export default {
    install(app) {
        app.config.globalProperties.$copyToClipboard = function(text) {
            if (!text) return false

            try {
                if (navigator.clipboard && window.isSecureContext) {
                    navigator.clipboard.writeText(text)
                    return true
                } else {
                    const textArea = document.createElement('textarea')
                    textArea.value = text
                    textArea.style.position = 'fixed'
                    textArea.style.left = '-999999px'
                    document.body.appendChild(textArea)
                    textArea.select()

                    try {
                        document.execCommand('copy')
                        document.body.removeChild(textArea)
                        return true
                    } catch (error) {
                        document.body.removeChild(textArea)
                        return false
                    }
                }
            } catch (error) {
                console.error('Copy failed:', error)
                return false
            }
        }

        app.provide('copyToClipboard', app.config.globalProperties.$copyToClipboard)
    }
}