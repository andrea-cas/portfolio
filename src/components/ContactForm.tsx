"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage, 
  Form 
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "./ui/button";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "is a required field."
  }),
  email: z.string().min(1, {
    message: "is a required field."
  }).email("is not a valid email."),
  message: z.string().min(5, {
    message: "should be at least 5 characters long."
  }),
});
const ContactForm = () => {
  type FormType = z.infer<typeof formSchema>;
  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: FormType) => {
    try {
      fetch("https://formsubmit.co/ajax/andrea.castro981@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          subject: 'Contact: ' + values.name,
          email: values.email,
          message: values.message,
        }),
      })

      toast.success("Successfully sent!");
      form.reset();
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong.");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col space-y-5">
      <FormField control={form.control} name="name" render={({ field }) => (
          <FormItem className="w-full flex flex-col items-start">
            <FormLabel className="flex items-center">
              Name
              <FormMessage className="ml-1" />
            </FormLabel>
            <FormControl>
              <Input type="name" disabled={isLoading} placeholder="Enter your name" className="w-full" {...field} />
            </FormControl>
          </FormItem>
        )} />
        <FormField control={form.control} name="email" render={({ field }) => (
          <FormItem className="w-full flex flex-col items-start">
            <FormLabel className="flex items-center">
              Email
              <FormMessage className="ml-1" />
            </FormLabel>
            <FormControl>
              <Input type="email" disabled={isLoading} placeholder="Enter your email" className="w-full" {...field} />
            </FormControl>
          </FormItem>
        )} />
        <FormField control={form.control} name="message" render={({ field }) => (
          <FormItem className="w-full flex flex-col items-start">
            <FormLabel className="flex items-center">
              Message
              <FormMessage className="ml-1" />
            </FormLabel>
            <FormControl>
              <Input type="message" disabled={isLoading} placeholder="Write a message..." className="w-full" {...field} />
            </FormControl>
          </FormItem>
        )} />
        <Button type="submit" className="w-full" disabled={isLoading} aria-label="Send Message">Send Message</Button>
      </form>
    </Form>
  )
}

export default ContactForm