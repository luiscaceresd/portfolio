import * as React from "react"
import { Control } from "react-hook-form"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

interface EmailFieldProps {
  control: Control<any>
}

export function EmailField({ control }: EmailFieldProps) {
  return (
    <FormField
      control={control}
      name="email"
      render={({ field }) => (
        <FormItem className="transition-all duration-200 hover:translate-y-[-2px]">
          <FormLabel className="font-medium text-slate-700 dark:text-blue-100">
            Email
          </FormLabel>
          <FormControl>
            <Input
              placeholder="your.email@example.com"
              className="h-14 p-6 rounded-lg shadow-sm
                        bg-slate-50 dark:bg-slate-800/50 
                        border-slate-200 dark:border-slate-700/80
                        text-slate-900 dark:text-white
                        focus-visible:ring-blue-400/70"
              {...field}
            />
          </FormControl>
          <FormMessage className="text-xs text-red-400" />
        </FormItem>
      )}
    />
  )
} 