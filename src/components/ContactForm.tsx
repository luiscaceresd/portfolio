import * as React from "react"
import { useEffect } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import useSubmit from "@/hooks/useSubmit"
import { useAlertContext } from "@/context/alertContext"

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
    <div className="rounded-xl bg-card p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <div className="grid gap-5 md:grid-cols-2">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="transition-all duration-200 hover:translate-y-[-2px]">
                  <FormLabel className="font-medium text-primary">Name</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="John Doe" 
                      className="rounded-md bg-muted/30 focus-visible:ring-primary focus-visible:border-primary shadow-sm" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="transition-all duration-200 hover:translate-y-[-2px]">
                  <FormLabel className="font-medium text-primary">Email Address</FormLabel>
                  <FormControl>
                    <Input 
                      type="email" 
                      placeholder="your-email@example.com" 
                      className="rounded-md bg-muted/30 focus-visible:ring-primary focus-visible:border-primary shadow-sm" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem className="transition-all duration-200 hover:translate-y-[-2px]">
                <FormLabel className="font-medium text-primary">Type of enquiry</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="rounded-md bg-muted/30 focus:ring-primary shadow-sm">
                      <SelectValue placeholder="Select the type of your enquiry" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="rounded-md border-primary/20">
                    <SelectItem value="hireMe">Freelance project proposal</SelectItem>
                    <SelectItem value="openSource">Open source consultancy session</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="comment"
            render={({ field }) => (
              <FormItem className="transition-all duration-200 hover:translate-y-[-2px]">
                <FormLabel className="font-medium text-primary">Your message</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Your message here..." 
                    className="min-h-32 md:min-h-60 resize-none rounded-md bg-muted/30 focus-visible:ring-primary focus-visible:border-primary shadow-sm"
                    {...field} 
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            className="w-full rounded-md py-6 text-base font-medium transition-all duration-300 
                      hover:brightness-105 hover:shadow-md hover:translate-y-[-2px] 
                      bg-primary text-primary-foreground focus:ring-2"
            disabled={isLoading}
          >
            {isLoading ? 
              <span className="flex items-center justify-center gap-2">
                <span className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full"></span>
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