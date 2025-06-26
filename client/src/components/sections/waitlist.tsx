import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { insertContactSubmissionSchema, type InsertContactSubmission } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

export default function Waitlist() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSubmissionSchema.pick({
      firstName: true,
      lastName: true,
      email: true,
      message: true,
    }).extend({
      firstName: insertContactSubmissionSchema.shape.firstName,
      lastName: insertContactSubmissionSchema.shape.lastName,
      email: insertContactSubmissionSchema.shape.email,
      message: insertContactSubmissionSchema.shape.message.optional(),
    })),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "MVP Waitlist",
      role: "waitlist",
      storeCount: "tbd",
      message: "",
    },
  });

  const submitWaitlistMutation = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      const response = await apiRequest("POST", "/api/contact", {
        ...data,
        company: "MVP Waitlist",
        role: "waitlist",
        storeCount: "tbd",
      });
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Welcome to the waitlist!",
        description: "We'll be in touch soon with MVP testing details.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/contact"] });
    },
    onError: (error: any) => {
      console.error("Waitlist form error:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactSubmission) => {
    submitWaitlistMutation.mutate(data);
  };

  return (
    <section id="waitlist" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-6">
            Join the <span className="gradient-text">MVP Testing</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-muted-foreground mb-6">
              Want to test Aurorix.Retail or become an early investor?
            </p>
            <p className="text-lg text-muted-foreground">
              Join our waitlist and be the first to experience the future of AI-powered retail.
            </p>
          </div>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <div className="bg-card rounded-2xl p-6">
                <h3 className="text-xl font-bold font-poppins mb-4 flex items-center">
                  <svg className="w-6 h-6 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Early Partners
                </h3>
                <p className="text-muted-foreground">
                  Get exclusive access to test Aurorix.Retail MVP with your real data. 
                  Provide feedback and help shape the final product.
                </p>
              </div>
              
              <div className="bg-card rounded-2xl p-6">
                <h3 className="text-xl font-bold font-poppins mb-4 flex items-center">
                  <svg className="w-6 h-6 text-secondary mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                  </svg>
                  Investors
                </h3>
                <p className="text-muted-foreground">
                  Interested in investing in the Aurorix ecosystem? 
                  Learn about our vision and get early access to investment opportunities.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-6 border border-accent/20">
                <h4 className="font-semibold text-accent mb-2">MVP Status</h4>
                <p className="text-muted-foreground text-sm">
                  Aurorix.Retail is currently under active development. This is not a public launch, 
                  but a pre-release waitlist for early testing partners and potential investors.
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-card rounded-2xl p-8 shadow-xl">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>  
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Smith" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="john@company.com" {...field} />
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
                        <FormLabel>Message (Optional)</FormLabel>
                        <FormControl>
                          <Textarea
                            rows={4}
                            placeholder="Tell us about your interest in testing or investing..."
                            className="resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4 text-lg"
                    disabled={submitWaitlistMutation.isPending}
                  >
                    {submitWaitlistMutation.isPending ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Joining Waitlist...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        Join MVP Waitlist
                      </div>
                    )}
                  </Button>
                  
                  <p className="text-sm text-muted-foreground text-center">
                    By joining the waitlist, you'll receive updates about MVP testing availability and investment opportunities.
                  </p>
                </form>
              </Form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}