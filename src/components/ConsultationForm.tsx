import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export const ConsultationForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    gender: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const { toast } = useToast();

  const totalSteps = 3;

  const handleNext = () => {
    if (step === 1 && !formData.gender) {
      toast({
        title: "Please select your gender",
        variant: "destructive",
      });
      return;
    }
    if (step < totalSteps) setStep(step + 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'generate_lead', {
        event_label: 'Ethnic Rhinoplasty Consultation',
        value: 1
      });
    }
    toast({
      title: "Consultation Request Received!",
      description: "Our team will contact you soon.",
    });
    console.log("Form submitted:", formData);
  };

  return (
    <Card className="bg-white p-8 shadow-[0_20px_50px_rgba(8,_112,_184,_0.3)] w-full max-w-md">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-[#0e1c2a] mb-2">
          GET FREE CONSULTATION
        </h2>
        <p className="text-sm text-gray-700">
          Get in touch with us for your free consultation with an expert. Please fill in the form
          below and we will contact you very soon.
        </p>
      </div>

      {/* Progress Indicator */}
      <div className="flex gap-2 mb-6">
        {[...Array(totalSteps)].map((_, i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full flex-1 transition-all ${
              i + 1 <= step ? "bg-accent" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Step 1: Gender Selection */}
        {step === 1 && (
          <div className="space-y-4 animate-in fade-in slide-in-from-right-5 duration-300">
            <Label className="text-base font-semibold text-[#0e1c2a]">Select your gender</Label>
            <RadioGroup
              value={formData.gender}
              onValueChange={(value) => setFormData({ ...formData, gender: value })}
              className="grid grid-cols-2 gap-4"
            >
              <Label
                htmlFor="male"
                className={`flex items-center justify-center gap-3 border-2 rounded-lg p-4 cursor-pointer transition-all bg-white ${
                  formData.gender === "male"
                    ? "border-[#0e1c2a] bg-[#0e1c2a]/5"
                    : "border-gray-300 hover:border-[#0e1c2a]"
                }`}
              >
                <RadioGroupItem value="male" id="male" className="text-[#0e1c2a]" />
                <span className="font-medium text-[#0e1c2a]">Male</span>
              </Label>
              <Label
                htmlFor="female"
                className={`flex items-center justify-center gap-3 border-2 rounded-lg p-4 cursor-pointer transition-all bg-white ${
                  formData.gender === "female"
                    ? "border-[#0e1c2a] bg-[#0e1c2a]/5"
                    : "border-gray-300 hover:border-[#0e1c2a]"
                }`}
              >
                <RadioGroupItem value="female" id="female" className="text-[#0e1c2a]" />
                <span className="font-medium text-[#0e1c2a]">Female</span>
              </Label>
            </RadioGroup>
            <Button
              type="button"
              onClick={handleNext}
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
              size="lg"
            >
              Next
            </Button>
          </div>
        )}

        {/* Step 2: Contact Information */}
        {step === 2 && (
          <div className="space-y-4 animate-in fade-in slide-in-from-right-5 duration-300">
            <div>
              <Label htmlFor="name" className="text-[#0e1c2a]">Full Name *</Label>
              <Input
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="John Doe"
                className="mt-1.5"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-[#0e1c2a]">Email *</Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="john@example.com"
                className="mt-1.5"
              />
            </div>
            <div>
              <Label htmlFor="phone" className="text-[#0e1c2a]">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+44 (0) 20 7946 0958"
                className="mt-1.5"
              />
            </div>
            <div className="flex gap-3">
              <Button
                type="button"
                onClick={() => setStep(step - 1)}
                variant="outline"
                className="flex-1"
                size="lg"
              >
                Back
              </Button>
              <Button
                type="button"
                onClick={handleNext}
                className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground"
                size="lg"
              >
                Next
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Additional Information */}
        {step === 3 && (
          <div className="space-y-4 animate-in fade-in slide-in-from-right-5 duration-300">
            <div>
              <Label htmlFor="message" className="text-[#0e1c2a]">Tell us about your goals (Optional)</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="What would you like to improve about your nose?"
                className="mt-1.5 min-h-[120px]"
              />
            </div>
            <div className="flex gap-3">
              <Button
                type="button"
                onClick={() => setStep(step - 1)}
                variant="outline"
                className="flex-1"
                size="lg"
              >
                Back
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground"
                size="lg"
              >
                Submit
              </Button>
            </div>
          </div>
        )}
      </form>
    </Card>
  );
};

