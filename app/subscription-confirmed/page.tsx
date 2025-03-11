import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function SubscriptionConfirmed() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50" aria-labelledby="confirmation-title">
      <Card className="w-full max-w-md p-8 shadow-lg">
        <article className="flex flex-col items-center">
          <header>
            <h1 id="confirmation-title" className="text-2xl font-semibold text-center mb-2">
              Subscription Confirmed!
            </h1>
          </header>
          <section className="text-center">
            <p className="text-gray-600 mb-6">
              Thank you for subscribing. We are excited to have you onboard and look forward to keeping you updated.
            </p>
          </section>
          <footer>
            <Link href="/" passHref legacyBehavior>
              <Button className="w-full cursor-pointer" aria-label="Return to home page">
                Go Home
              </Button>
            </Link>
          </footer>
        </article>
      </Card>
    </main>
  )
}

