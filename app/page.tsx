"use client"

import { useRouter } from "next/navigation"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { parsePhoneNumberFromString, isValidPhoneNumber } from "libphonenumber-js"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import QRCode from "react-qr-code"

const formSchema = z.object({
  phoneNumber: z
    .string()
    .min(1, { message: "Phone number is required" })
    .refine(
      (value) => {
        try {
          return isValidPhoneNumber(value) || !!parsePhoneNumberFromString(value)?.isValid()
        } catch (error) {
          return false
        }
      },
      { message: "Please enter a valid phone number" },
    ),
})

type FormValues = z.infer<typeof formSchema>

export default function Home() {
  const router = useRouter()

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phoneNumber: "",
    },
  })

  function onSubmit() {
    router.push(`/subscription-confirmed`)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <Card className="w-full max-w-sm p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter phone number (e.g. +1 555 123 4567)" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-center py-2">
              <QRCode value="/subscription-confirmed" size={150} className="mx-auto" />
            </div>

            <Button type="submit" className="w-full cursor-pointer">
              Subscribe
            </Button>
          </form>
        </Form>
      </Card>
    </div>
  )
}
