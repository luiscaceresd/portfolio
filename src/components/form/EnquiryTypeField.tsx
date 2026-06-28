import * as React from "react"
import { Control } from "react-hook-form"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface EnquiryTypeFieldProps {
  control: Control<any>
}

export function EnquiryTypeField({ control }: EnquiryTypeFieldProps) {
  return (
    <FormField
      control={control}
      name="type"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-sm font-medium text-slate-700 dark:text-slate-200">
            Project type
          </FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger className="h-11 w-full rounded-lg border-slate-300 bg-white px-3 text-slate-950 focus-visible:border-blue-500 focus-visible:ring-blue-500/25 dark:border-white/15 dark:bg-white/[0.06] dark:text-white dark:focus-visible:border-blue-400 dark:focus-visible:ring-blue-400/30">
                <SelectValue placeholder="What type of project are you building?" />
              </SelectTrigger>
            </FormControl>
            <SelectContent className="rounded-lg border border-slate-200 bg-white text-slate-950 shadow-md dark:border-slate-700 dark:bg-slate-950 dark:text-white">
              <SelectItem value="product-build">Product build</SelectItem>
              <SelectItem value="ai-automation">AI automation</SelectItem>
              <SelectItem value="ecommerce">Ecommerce</SelectItem>
              <SelectItem value="consulting">Consulting</SelectItem>
            </SelectContent>
            <FormMessage className="text-xs text-red-400" />
          </Select>
        </FormItem>
      )}
    />
  )
} 
