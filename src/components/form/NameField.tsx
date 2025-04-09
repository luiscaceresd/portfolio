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

interface NameFieldProps {
  control: Control<any>
}

export function NameField({ control }: NameFieldProps) {
  return (
    <FormField
      control={control}
      name="firstName"
      render={({ field }) => (
        <FormItem className="transition-all duration-200 hover:translate-y-[-2px]">
          <FormLabel className="font-medium text-slate-700 dark:text-blue-100">
            Name
          </FormLabel>
          <FormControl>
            <Input 
              placeholder="John Doe" 
              className="rounded-lg shadow-sm border bg-slate-50 dark:bg-slate-800/50 
                        border-slate-200 dark:border-slate-700/80 text-slate-900 dark:text-white 
                        dark:placeholder:text-slate-500 
                        focus-visible:ring-blue-400/70 focus-visible:border-blue-400/50" 
              {...field} 
            />
          </FormControl>
          <FormMessage className="text-xs text-red-400" />
        </FormItem>
      )}
    />
  )
} 