import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {

    console.log('log from _document page - this shows in terminal console as this file is rendered on the server')

    return (
      <Html lang='en'>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument