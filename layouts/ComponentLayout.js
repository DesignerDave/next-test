import Link from 'next/link'
import {useRouter} from 'next/router'

export default function Layout({children}) {
	const {pathname} = useRouter()
	const componentName = pathname.split('/').filter(subStr => !!subStr)[1];

	return (
		<div>
			<h1>Component Sub Layout</h1>
			<Link href={`/component/${componentName}/guidelines`}>guidelines</Link>
			<Link href={`/component/${componentName}/documentation`}>documentation</Link>
			<Link href={`/component/${componentName}/live-example`}>live example</Link>
			{children}
		</div>
	)
}
