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
        <FormItem className="transition-all duration-200 hover:translate-y-[-2px]">
          <FormLabel className="font-medium text-slate-700 dark:text-blue-100">
            Type of Enquiry
          </FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger className="h-14 p-6 w-full rounded-lg shadow-sm
                                      bg-slate-50 dark:bg-slate-800/50 
                                      border-slate-200 dark:border-slate-700/80
                                      text-slate-900 dark:text-white
                                      focus-visible:ring-blue-400/70">
                <SelectValue placeholder="Select type of enquiry" />
              </SelectTrigger>
            </FormControl>
            <SelectContent className="rounded-lg border 
                                    bg-white dark:bg-slate-800
                                    border-slate-200 dark:border-slate-700
                                    text-slate-900 dark:text-white
                                    shadow-md">
              <SelectItem value="freelance">Freelance project proposal</SelectItem>
              <SelectItem value="opportunity">Job opportunity</SelectItem>
              <SelectItem value="question">General question</SelectItem>
            </SelectContent>
            <FormMessage className="text-xs text-red-400" />
          </Select>
        </FormItem>
      )}
    />
  )
} 