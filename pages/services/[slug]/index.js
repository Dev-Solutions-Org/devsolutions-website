import { useRouter } from 'next/router'

export default () => {
  const router = useRouter()
  const { slug } = router.query
  console.log(slug)

  return (
    <div style={{
      display: 'flex',
      height: 'calc(100vh - 91px)',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <h1 style={{
        textAlign: 'center',
        padding: '0 16px'
      }}>Hi, soon we going to have content for this page, stay tuned 💪</h1>
    </div>
  )
}