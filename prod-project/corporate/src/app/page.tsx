import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <div>
        <Link href="/performance">Performance</Link>
        <Link href="/scale">Scale</Link>
        <Link href="/reliability">Reliability</Link>
      </div>
      Home
    </div>
  )
}
