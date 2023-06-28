import ReactHtmlParser from 'react-html-parser'

import Favicons from '../../html/index.html'

export function Favicon() {
  return <>{ReactHtmlParser(Favicons)}</>
}
