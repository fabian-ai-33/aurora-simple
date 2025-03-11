import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function SubscriptionConfirmed() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50">
            <Card className="w-full max-w-md p-8 shadow-lg">
                <div className="flex flex-col items-center">
                    <h1 className="text-2xl font-semibold text-center mb-2">
                        Subscription Confirmed!
                    </h1>
                    <p className="text-gray-600 text-center mb-6">
                        Thank you for subscribing. We're excited to have you onboard and look forward to keeping you updated.
                    </p>
                    <Link href="/">
                        <Button className="w-full cursor-pointer">
                            Go Home
                        </Button>
                    </Link>
                </div>
            </Card>
        </div>
    )
}
