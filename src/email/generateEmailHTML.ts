import fs from 'fs'
import path from 'path'
import Handlebars from 'handlebars'
import inlineCSS from 'inline-css'

const template = fs.readFileSync
  ? fs.readFileSync(path.join(__dirname, './template.html'), 'utf8')
  : ''

// Compile the template
const getHTML = Handlebars.compile(template)

const generateEmailHTML = async (data: object): Promise<string> => {
  const preInlinedCSS = getHTML(data)

  return await inlineCSS(preInlinedCSS, {
    url: ' ',
    removeStyleTags: false,
  })
}

export default generateEmailHTML
