import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import Reset from '~/general/Reset'
import { colors } from '%/styles'

export default class MyDocument extends Document {
  componentWillMount () {
    Reset()
  }

  render () {
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()
    return (
      <html>
        <Head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel='icon' href='/static/favicon.ico' type='image/x-icon' />
          <meta name='theme-color' content={colors.blue} />
          <title>MarketCheck</title>
          <link href='https://fonts.googleapis.com/css?family=Roboto:400,500,700,900' rel='stylesheet' />
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
