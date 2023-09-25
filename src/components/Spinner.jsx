import HashLoader from 'react-spinners/HashLoader'

const override = {
  display: 'block',
  margin: '0 auto',
  borderColor: '#0d6efd'
}

const Spinner = () => {
  return (
    <>
      <div className='container-spinner'>
        <HashLoader
          color='#0d6efd'
          cssOverride={override}
          size={150}
          aria-label='Loading Spinner'
          data-testid='loader'
        />
      </div>

    </>

  )
}

export default Spinner
