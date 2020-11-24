import {useRouter} from 'next/router'
import BaseLayout from '../layouts/BaseLayout'
import DefaultSubLayout from '../layouts/DefaultSubLayout'
import ComponentLayout  from '../layouts/ComponentLayout'

function MyApp({ Component, pageProps }) {
  console.log(Object.keys(Component))
  const router = useRouter()
  const layout = router.pathname.split('/').filter(substr => !!substr)[0]

  let SubLayout;

  switch(layout) {
    case "component":
      SubLayout = ComponentLayout
      break;
    
    default:
      SubLayout = DefaultSubLayout
  }

  return (
    <BaseLayout>
      <SubLayout>
        <Component {...pageProps} />
      </SubLayout>
    </BaseLayout>
  )
}

export default MyApp
