export default () => (
  <div
    style={{
      display: 'flex',
      height: '100vh',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    <form action='https://www.paypal.com/cgi-bin/webscr' method='post' target='_top'>
      <input type='hidden' name='cmd' value='_s-xclick' />
      <input type='hidden' name='hosted_button_id' value='TZB5Y4GHLQW3C' />
      <input type='image' src='https://www.paypalobjects.com/es_XC/i/btn/btn_subscribeCC_LG.gif' border='0' name='submit' alt='PayPal, la forma más segura y rápida de pagar en línea.' />
      <img alt='' border='0' src='https://www.paypalobjects.com/es_XC/i/scr/pixel.gif' width='1' height='1' />
    </form>
  </div>
)
