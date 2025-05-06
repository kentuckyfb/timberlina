import React, { useState } from 'react';
import MainLayout from '../components/layout/MainLayout';
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage 
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import CurveDecoration from '../components/ui/curve-decoration';
import emailjs from 'emailjs-com';

// Form schema
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  // Form definition
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
  
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          reply_to: data.email,
          message: data.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
  
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
  
      form.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Failed to send",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  
    setIsSubmitting(false);
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-[#0a0a0a] text-theme-light py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block text-[#e6b980] text-sm font-medium tracking-wider mb-3">GET IN TOUCH</span>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 font-poppins gradient-text">Contact Us</h1>
            <p className="text-base md:text-lg text-white/80">
              Have questions about our dollhouses? We'd love to hear from you.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 opacity-30 bg-grain bg-repeat"></div>
        <CurveDecoration position="bottom" fillColor="#121212" height="md" />
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-16 bg-[#121212] relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div>
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-3 text-white font-poppins">Send Us a <span className="gradient-text">Message</span></h2>
                <p className="text-white/70 text-sm">Have questions about our dollhouses? Fill out the form below and we'll get back to you as soon as possible.</p>
              </div>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Your Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your name"
                            className="bg-[#1a1a1a] border-[#333] text-white placeholder-white/40"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Your Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your email address"
                            className="bg-[#1a1a1a] border-[#333] text-white placeholder-white/40"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Your Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="How can we help you?"
                            className="bg-[#1a1a1a] border-[#333] text-white placeholder-white/40 min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="bg-[#e6b980] hover:bg-[#eacda3] text-[#121212] w-auto"
                    disabled={isSubmitting}
                    size="sm"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </div>
            
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-white font-poppins">Contact <span className="gradient-text">Information</span></h2>
              
              <div className="bg-[#1a1a1a] p-4 md:p-6 rounded-lg mb-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-[#e6b980]/10 p-2 rounded-md mr-4">
                      <Mail className="w-5 h-5 text-[#e6b980]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white text-base mb-1">Email</h3>
                      <a href="mailto:info@timberlina.com" className="text-[#e6b980] hover:text-[#eacda3] transition-colors text-sm">timberlina@timberconcepts.lk</a>
                    </div>
                  </div>
                  
                  
                  
                  
                </div>
              </div>
              
             
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Contact;
