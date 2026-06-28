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
        <FormItem>
          <FormLabel className="text-sm font-medium text-slate-700 dark:text-slate-200">
            Email
          </FormLabel>
          <FormControl>
            <Input
              type="email"
              placeholder="you@company.com"
              autoComplete="email"
              className="h-11 rounded-lg border-slate-300 bg-white px-3 text-slate-950 placeholder:text-slate-500 focus-visible:border-blue-500 focus-visible:ring-blue-500/25 dark:border-white/15 dark:bg-white/[0.06] dark:text-white dark:placeholder:text-slate-400 dark:focus-visible:border-blue-400 dark:focus-visible:ring-blue-400/30"
              {...field}
            />
          </FormControl>
          <FormMessage className="text-xs text-red-400" />
        </FormItem>
      )}
    />
  )
} 
