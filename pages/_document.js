import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import Reset from '~/general/Reset'

export default class MyDocument extends Document {
  render () {
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()
    Reset()
    return (
      <html>
        <Head>
          <meta charset='utf-8' />
          <link rel='canonical' href='/' />
          <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0' />
          <link rel='icon' href='/static/favicon.ico' type='image/x-icon' />
          <meta name='theme-color' content='#13A54E' />
          <title>MarketCheck</title>
          <link href='https://fonts.googleapis.com/css?family=Roboto:400,500,700' rel='stylesheet' />
          {styleTags}
        </Head>
        <body>
          <div className='root'>{main}</div>
          <NextScript />
        </body>
      </html>
    )
  }
}
