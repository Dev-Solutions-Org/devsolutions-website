import ContactForm from './../components/contact-form/ContactForm'

export default () => (
  <>
    <h1 className='text-center'><b>CONTACT</b></h1>
    <div className='row my-3'>
      <ContactForm />
      <div className='col-12 col-lg-6 mb-3'>
        <img src='/static/contact-data.png' className='p-3 img-contact' />
      </div>
    </div>
  </>
)
