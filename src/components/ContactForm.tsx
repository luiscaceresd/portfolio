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
  firstName: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  type: z.string().optional(),
  comment: z.string().min(1, "Message is required"),
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
      firstName: "",
      email: "",
      type: "hireMe",
      comment: "",
    },
  })

  // Handle form submission
  const onSubmit = (values: FormValues) => {
    submit("https://example.com/contactme", values)
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
    <div className="bg-white dark:bg-slate-900/80 rounded-xl p-6 sm:p-8 shadow-xl border 
                    border-slate-200 dark:border-slate-800/80 backdrop-blur-sm backdrop-filter transition-colors duration-300">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">
          <div className="grid gap-5 md:grid-cols-2">
            <NameField control={form.control} />
            <EmailField control={form.control} />
          </div>

          <EnquiryTypeField control={form.control} />
          <MessageField control={form.control} />

          <Button 
            type="submit" 
            className="w-full rounded-lg py-6 !text-base font-medium transition-all duration-300 
                      bg-gradient-to-r from-blue-600 to-blue-500 dark:bg-blue-500 dark:hover:bg-blue-400
                      hover:shadow-lg hover:shadow-blue-300/20 dark:hover:shadow-blue-500/20 hover:translate-y-[-2px] 
                      text-white focus:ring-2 focus:ring-blue-500/50"
            disabled={isLoading}
          >
            {isLoading ? 
              <span className="flex items-center justify-center gap-2">
                <LoadingSpinner />
                Submitting...
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