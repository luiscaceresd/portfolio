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
            Type of enquiry
          </FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger 
                className="rounded-lg shadow-sm border bg-slate-50 dark:bg-slate-800/50 
                           border-slate-200 dark:border-slate-700/80 text-slate-900 dark:text-white 
                           focus:ring-blue-400/50 focus-visible:ring-blue-400/70"
              >
                <SelectValue placeholder="Select the type of your enquiry" />
              </SelectTrigger>
            </FormControl>
            <SelectContent className="rounded-lg bg-white dark:bg-slate-900 
                                     border-slate-200 dark:border-slate-800 dark:text-white 
                                     backdrop-blur-sm backdrop-filter">
              <SelectItem value="hireMe" className="focus:bg-blue-50 dark:focus:bg-blue-500/20 hover:bg-slate-50 dark:hover:bg-slate-800">
                Freelance project proposal
              </SelectItem>
              <SelectItem value="openSource" className="focus:bg-blue-50 dark:focus:bg-blue-500/20 hover:bg-slate-50 dark:hover:bg-slate-800">
                Open source consultancy session
              </SelectItem>
              <SelectItem value="other" className="focus:bg-blue-50 dark:focus:bg-blue-500/20 hover:bg-slate-50 dark:hover:bg-slate-800">
                Other
              </SelectItem>
            </SelectContent>
          </Select>
          <FormMessage className="text-xs text-red-400" />
        </FormItem>
      )}
    />
  )
} 