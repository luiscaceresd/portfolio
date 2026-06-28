import * as React from "react"
import { useEffect } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import {
  Form,
} from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import useSubmit from "@/hooks/useSubmit"
import { useAlertContext } from "@/context/alertContext"
import { NameField } from "@/components/form/NameField"
import { EmailField } from "@/components/form/EmailField"
import { EnquiryTypeField } from "@/components/form/EnquiryTypeField"
import { MessageField } from "@/components/form/MessageField"
import { LoadingSpinner } from "@/components/ui/LoadingSpinner"

// Define form schema with Zod
const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  type: z.string().optional(),
  message: z.string().min(1, "Message is required"),
})

// Infer the type from the schema
type FormValues = z.infer<typeof formSchema>

function ContactForm() {
  const { isLoading, response, submit } = useSubmit()
  const { onOpen } = useAlertContext()

  // Initialize form with react-hook-form and zod validation
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      type: "product-build",
      message: "",
    },
  })

  // Handle form submission
  const onSubmit = async (values: FormValues) => {
    await submit("https://formsubmit.co/ajax/luiscaceresd97@gmail.com", values)
  }

  // Handle API response
  useEffect(() => {
    if (response) {
      onOpen(response.type, response.message)
      if (response.type === "success") {
        form.reset()
      }
    }
  }, [response, onOpen, form])

  return (
    <div className="rounded-lg border border-slate-200 bg-slate-50 p-5 shadow-[0_24px_80px_-58px_rgba(15,23,42,0.5)] transition-colors duration-300 dark:border-white/10 dark:bg-white/[0.04] dark:shadow-black/20 sm:p-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <div className="grid gap-5 md:grid-cols-2">
            <NameField control={form.control} />
            <EmailField control={form.control} />
          </div>

          <EnquiryTypeField control={form.control} />
          <MessageField control={form.control} />

          <Button 
            type="submit" 
            className="h-12 w-full rounded-lg bg-blue-700 text-sm font-semibold text-white transition hover:bg-blue-600 active:translate-y-px"
            disabled={isLoading}
          >
            {isLoading ? 
              <span className="flex items-center justify-center gap-2">
                <LoadingSpinner />
                Sending...
              </span> : 
              "Submit"
            }
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default ContactForm 
