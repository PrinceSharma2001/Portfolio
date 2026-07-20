import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="section-pad text-center !py-32">
      <p className="eyebrow mb-4">Error 404</p>
      <h1 className="font-display text-5xl text-parchment mb-4">
        Page not found
      </h1>
      <p className="text-parchment-dim mb-8">
        The page you're looking for doesn't exist or has moved.
      </p>
      <Link
        to="/"
        className="inline-block px-6 py-3 btn-gradient rounded-md"
      >
        Back to Home
      </Link>
    </div>
  )
}
