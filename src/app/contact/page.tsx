"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Container from "@/components/container/Container";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import toast, { Toaster } from "react-hot-toast";
import { use } from "react";

const formSchema = z
  .object({
    name: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    email: z.string().email({
      message: "Please enter a valid email address.",
    }),
    accountType: z.enum(["personal", "company"]),
    companyName: z.string().optional(),
    textArea: z.string().min(10, {
      message: "Message must be at least 10 characters.",
    }),
  })
  .refine(
    (data) => {
      if (data.accountType === "company") {
        return !!data.companyName;
      }
      return true;
    },
    {
      message: "Company name is required for company client",
      path: ["companyName"],
    }
  );
export default function ContactPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      companyName: "",
      textArea: "",
    },
  });

  const accountType = form.watch("accountType");
  const { reset } = form;

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("submit button", { values });
    const submitButton = document.querySelector("#contactFromButton");
    if (submitButton) {
      submitButton.textContent = "Success!";
      submitButton.classList.add(
        "animate-bounce",
        "bg-green-500",
        "duration-1000"
      );
      toast.success("Form submitted successfully!");
      setTimeout(() => {
        reset({ name: "", email: "", companyName: "", textArea: "" });
        submitButton.textContent = "Submit";
        submitButton.classList.remove(
          "animate-bounce",
          "bg-green-500",
          "duration-1000"
        );
      }, 5000);
    }
  };
  return (
    <div>
      <Container>
        <div className="flex flex-col mx-auto max-w-xl items-center gap-4 py-10">
          <h1 className="text-4xl">We would love to hear from you!</h1>
          <p className="text-center">
            Send us an email and we will get back to you as soon as possible.
          </p>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="flex flex-col gap-4 max-w-2xl mx-auto">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Name" type="name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Email address</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Email Address"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />

            <FormField
              control={form.control}
              name="accountType"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Account type</FormLabel>
                    <Select onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="personal">Personal</SelectItem>
                        <SelectItem value="company">Company</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            {accountType === "company" && (
              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Company Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Company Name"
                          type="text"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
            )}

            <FormField
              control={form.control}
              name="textArea"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Send Message</FormLabel>
                    <Textarea placeholder="Your message..." {...field} />
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <Button id="contactFromButton" type="submit" className="w-full ">
              Submit
            </Button>
          </form>
        </Form>
        <Toaster />
      </Container>
    </div>
  );
}
function preventDefault() {
  throw new Error("Function not implemented.");
}
