import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { insertContactMessageSchema, type InsertContactMessage } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function Contact() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      const response = await apiRequest('POST', '/api/contact', data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "I'll get back to you as soon as possible.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ['/api/contact'] });
    },
    onError: (error: any) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactMessage) => {
    contactMutation.mutate(data);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('kevokeka6@gmail.com');
      toast({
        title: "Email copied!",
        description: "kevokeka6@gmail.com has been copied to your clipboard.",
      });
    } catch (err) {
      toast({
        title: "Failed to copy email",
        description: "Please copy manually: kevokeka6@gmail.com",
        variant: "destructive",
      });
    }
  };

  return (
    <div id="contact" className="glass-panel p-6 reveal">
      <h3 className="text-lg font-semibold text-accent-custom mb-5 flex items-center gap-2">
        <i className="fas fa-envelope"></i>
        Get In Touch
      </h3>
      
      <p className="text-muted-custom mb-5 text-sm">
        Ready to collaborate or discuss opportunities? Let's connect!
      </p>
      
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Label htmlFor="name" className="text-sm font-medium text-blue-100">
            Name
          </Label>
          <Input
            id="name"
            {...form.register("name")}
            className="mt-2 bg-white/5 border-white/10 text-blue-100 placeholder:text-muted-custom focus:border-accent-custom"
            placeholder="Your name"
          />
          {form.formState.errors.name && (
            <p className="text-red-400 text-xs mt-1">{form.formState.errors.name.message}</p>
          )}
        </div>
        
        <div>
          <Label htmlFor="email" className="text-sm font-medium text-blue-100">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            {...form.register("email")}
            className="mt-2 bg-white/5 border-white/10 text-blue-100 placeholder:text-muted-custom focus:border-accent-custom"
            placeholder="you@example.com"
          />
          {form.formState.errors.email && (
            <p className="text-red-400 text-xs mt-1">{form.formState.errors.email.message}</p>
          )}
        </div>
        
        <div>
          <Label htmlFor="subject" className="text-sm font-medium text-blue-100">
            Subject
          </Label>
          <Input
            id="subject"
            {...form.register("subject")}
            className="mt-2 bg-white/5 border-white/10 text-blue-100 placeholder:text-muted-custom focus:border-accent-custom"
            placeholder="What's this about?"
          />
          {form.formState.errors.subject && (
            <p className="text-red-400 text-xs mt-1">{form.formState.errors.subject.message}</p>
          )}
        </div>
        
        <div>
          <Label htmlFor="message" className="text-sm font-medium text-blue-100">
            Message
          </Label>
          <Textarea
            id="message"
            {...form.register("message")}
            className="mt-2 bg-white/5 border-white/10 text-blue-100 placeholder:text-muted-custom focus:border-accent-custom min-h-[120px]"
            placeholder="Tell me about your project..."
          />
          {form.formState.errors.message && (
            <p className="text-red-400 text-xs mt-1">{form.formState.errors.message.message}</p>
          )}
        </div>
        
        <Button
          type="submit"
          disabled={contactMutation.isPending}
          className="w-full bg-gradient-to-r from-accent-custom to-accent2 text-slate-900 hover:shadow-lg hover:shadow-purple-500/30"
        >
          {contactMutation.isPending ? (
            <>
              <i className="fas fa-spinner fa-spin mr-2"></i>
              Sending...
            </>
          ) : (
            <>
              <i className="fas fa-paper-plane mr-2"></i>
              Send Message
            </>
          )}
        </Button>
      </form>
      
      <div className="mt-6 text-center">
        <div className="mb-4 text-sm text-muted-custom">
          <strong>Email:</strong>{" "}
          <button
            onClick={handleCopyEmail}
            className="text-accent-custom hover:underline"
          >
            kevokeka6@gmail.com
          </button>
        </div>
        
        <div className="flex justify-center gap-3">
          <a
            href="https://github.com/kevinboattt"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-lg bg-panel flex items-center justify-center text-accent-custom border border-white/5 transition-all duration-300 hover:bg-panel-hover hover:-translate-y-0.5"
            title="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
          
          <a
            href="https://wa.me/2348160729143"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-lg bg-panel flex items-center justify-center text-accent-custom border border-white/5 transition-all duration-300 hover:bg-panel-hover hover:-translate-y-0.5"
            title="WhatsApp"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
          
          <a
            href="https://linkedin.com/in/kevin-abele"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-lg bg-panel flex items-center justify-center text-accent-custom border border-white/5 transition-all duration-300 hover:bg-panel-hover hover:-translate-y-0.5"
            title="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          
          <a
            href="https://twitter.com/kevin_abele"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-lg bg-panel flex items-center justify-center text-accent-custom border border-white/5 transition-all duration-300 hover:bg-panel-hover hover:-translate-y-0.5"
            title="Twitter"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
