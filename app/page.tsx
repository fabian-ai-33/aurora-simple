"use client";

import { redirect } from 'next/navigation'
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import QRCode from "react-qr-code"

export default function Home() {
  const confirmSubscription = () => {
    redirect(`/subscription-confirmed`)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <Card className="w-full max-w-sm p-4">
        <form className="space-y-4">
          <Input
            placeholder="Enter email or phone number"
            type="text"
          />

          <QRCode
            value="/subscription-confirmed"
            width={150}
            height={150}
            className="mx-auto"
          />

          <Button type='button' onClick={confirmSubscription} className="w-full cursor-pointer">
            Subscribe
          </Button>
        </form>
      </Card>
    </div>
  )
}