import * as React from "react"
import { Control } from "react-hook-form"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"

interface MessageFieldProps {
  control: Control<any>
}

export function MessageField({ control }: MessageFieldProps) {
  return (
    <FormField
      control={control}
      name="message"
      render={({ field }) => (
        <FormItem className="transition-all duration-200 hover:translate-y-[-2px]">
          <FormLabel className="font-medium text-slate-700 dark:text-blue-100">
            Message
          </FormLabel>
          <FormControl>
            <Textarea
              placeholder="Your message"
              className="min-h-32 md:min-h-60 p-6 rounded-lg shadow-sm border 
                          bg-slate-50 dark:bg-slate-800/50
                          border-slate-200 dark:border-slate-700/80
                          text-slate-900 dark:text-white
                          focus-visible:ring-blue-400/70
                          placeholder:text-slate-500 dark:placeholder:text-slate-400"
              {...field}
            />
          </FormControl>
          <FormMessage className="text-xs text-red-400" />
        </FormItem>
      )}
    />
  )
} 