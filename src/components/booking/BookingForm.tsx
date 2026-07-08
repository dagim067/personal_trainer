"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import {
  Check,
  User,
  Dumbbell,
  ClipboardCheck,
  ChevronLeft,
  ChevronRight,
  Loader2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useBooking } from "@/lib/supabase/hooks";

type BookingFormData = {
  fullName: string;
  phone: string;
  age: string;
  gender: string;
  weight: string;
  level: string;
  goal: string;
  program: string;
  notes: string;
};

const steps = [
  {
    title: "Personal",
    icon: User,
  },
  {
    title: "Fitness",
    icon: Dumbbell,
  },
  {
    title: "Review",
    icon: ClipboardCheck,
  },
];

const fieldStyles =
  "h-14 w-full rounded-none border-0 border-b border-border bg-transparent px-0 shadow-none focus-visible:ring-0 focus-visible:border-primary";

export default function BookingForm() {
  const [step, setStep] = useState(1);
  const bookingMutation = useBooking();
  const [feedback, setFeedback] = useState<string | null>(null);
  const [feedbackType, setFeedbackType] = useState<
    "success" | "warning" | "error" | null
  >(null);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    trigger,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<BookingFormData>({
    defaultValues: {
      fullName: "",
      phone: "",
      age: "",
      gender: "",
      weight: "",
      level: "",
      goal: "",
      program: "",
      notes: "",
    },
  });

  const nextStep = async () => {
    let valid = false;

    if (step === 1) {
      valid = await trigger(["fullName", "phone", "age", "gender", "program"]);
    }

    if (step === 2) {
      valid = await trigger(["weight", "level", "goal"]);
    }

    if (valid) {
      setStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  const onSubmit = (data: BookingFormData) => {
    // Only allow submission on step 3 (review step)
    if (step !== 3) {
      return;
    }

    setFeedback(null);
    setFeedbackType(null);

    const bookingPayload = {
      full_name: data.fullName.trim(),
      phone: data.phone.trim(),
      age: data.age.trim(),
      gender: data.gender,
      weight: data.weight.trim(),
      fitness_level: data.level,
      fitness_goal: data.goal,
      program: data.program,
      notes: data.notes.trim() || null,
    };

    bookingMutation.mutate(bookingPayload, {
      onSuccess: (result) => {
        if (result.status === "created") {
          sessionStorage.setItem("bookingComplete", "true");
          void router.push("/booked-success");
        } else {
          setFeedbackType("warning");
          setFeedback(
            "It looks like you already have a booking with this phone number. Please call +251911477218 or email pixelnoah8@gmail.com for help.",
          );
        }
      },
      onError: (error) => {
        setFeedbackType("error");
        setFeedback(
          error.message ||
            "Something went wrong while processing your booking. Please try again or contact us.",
        );
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-5xl mx-auto">
      <div className="mb-16">
        <div className="flex items-center justify-between">
          {steps.map((item, index) => {
            const Icon = item.icon;
            const currentStep = index + 1;

            return (
              <div key={item.title} className="flex items-center flex-1">
                <div className="flex flex-col items-center w-full">
                  <div
                    className={`h-12 w-12 flex items-center justify-center rounded-full transition-all duration-300
                    ${
                      step > currentStep
                        ? "bg-primary text-primary-foreground"
                        : step === currentStep
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {step > currentStep ? (
                      <Check className="h-5 w-5" />
                    ) : (
                      <Icon className="h-5 w-5" />
                    )}
                  </div>

                  <span className="mt-3 text-sm font-medium">{item.title}</span>
                </div>

                {index !== steps.length - 1 && (
                  // Track: always-visible border, filled progress on top
                  <div className="flex-1 h-1.5 mx-4 bg-border rounded-full relative overflow-hidden">
                    <div
                      className={`absolute inset-y-0 left-0 rounded-full bg-primary transition-all duration-500 ${
                        step > currentStep ? "w-full" : "w-0"
                      }`}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="space-y-10">
        {feedback ? (
          <div
            className={`rounded-3xl border p-5 text-sm shadow-sm shadow-black/5 ${
              feedbackType === "success"
                ? "border-emerald-200 bg-emerald-50 text-emerald-900"
                : feedbackType === "warning"
                  ? "border-amber-200 bg-amber-50 text-amber-900"
                  : "border-destructive/20 bg-destructive/10 text-destructive"
            }`}
          >
            {feedback}
          </div>
        ) : null}

        {step === 1 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            <div>
              <Input
                placeholder="Full Name"
                {...register("fullName", {
                  required: "Full name is required",
                })}
                className={fieldStyles}
              />

              {errors.fullName && (
                <p className="mt-2 text-sm text-destructive">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            <div>
              <Input
                placeholder="Phone Number"
                {...register("phone", {
                  required: "Phone number is required",
                })}
                className={fieldStyles}
              />

              {errors.phone && (
                <p className="mt-2 text-sm text-destructive">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div>
              <Input
                type="text"
                placeholder="Age"
                {...register("age", {
                  required: "Age is required",
                })}
                className={fieldStyles}
              />

              {errors.age && (
                <p className="mt-2 text-sm text-destructive">
                  {errors.age.message}
                </p>
              )}
            </div>

            <div>
              <Select
                onValueChange={(value) =>
                  setValue("gender", value, {
                    shouldValidate: true,
                  })
                }
              >
                <SelectTrigger className={fieldStyles}>
                  <SelectValue placeholder="Gender" />
                </SelectTrigger>

                <SelectContent className="rounded-none">
                  <SelectItem value="male" className="rounded-none">
                    Male
                  </SelectItem>

                  <SelectItem value="female" className="rounded-none">
                    Female
                  </SelectItem>

                  <SelectItem value="other" className="rounded-none">
                    Other
                  </SelectItem>
                </SelectContent>
              </Select>

              <input
                type="hidden"
                {...register("gender", {
                  required: true,
                })}
              />
            </div>

            <div>
              <Select
                onValueChange={(value) =>
                  setValue("program", value, {
                    shouldValidate: true,
                  })
                }
              >
                <SelectTrigger className={fieldStyles}>
                  <SelectValue placeholder="Choose a package" />
                </SelectTrigger>

                <SelectContent className="rounded-none">
                  <SelectItem value="group" className="rounded-none">
                    Group Programs
                  </SelectItem>

                  <SelectItem value="1on1" className="rounded-none">
                    Premium 1-on-1 Coaching
                  </SelectItem>
                </SelectContent>
              </Select>

              <input
                type="hidden"
                {...register("program", {
                  required: true,
                })}
              />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            <div>
              <Input
                placeholder="Weight (kg)"
                {...register("weight", {
                  required: true,
                })}
                className={fieldStyles}
              />
            </div>

            <div>
              <Select
                onValueChange={(value) =>
                  setValue("level", value, {
                    shouldValidate: true,
                  })
                }
              >
                <SelectTrigger className={fieldStyles}>
                  <SelectValue placeholder="Fitness Level" />
                </SelectTrigger>

                <SelectContent className="rounded-none">
                  <SelectItem value="beginner" className="rounded-none">
                    Beginner
                  </SelectItem>

                  <SelectItem value="intermediate" className="rounded-none">
                    Intermediate
                  </SelectItem>

                  <SelectItem value="advanced" className="rounded-none">
                    Advanced
                  </SelectItem>
                </SelectContent>
              </Select>

              <input
                type="hidden"
                {...register("level", {
                  required: true,
                })}
              />
            </div>

            <div className="md:col-span-2">
              <Select
                onValueChange={(value) =>
                  setValue("goal", value, {
                    shouldValidate: true,
                  })
                }
              >
                <SelectTrigger className={fieldStyles}>
                  <SelectValue placeholder="Primary Fitness Goal" />
                </SelectTrigger>

                <SelectContent className="rounded-none">
                  <SelectItem value="weight-loss" className="rounded-none">
                    Weight Loss
                  </SelectItem>

                  <SelectItem value="muscle-gain" className="rounded-none">
                    Muscle Gain
                  </SelectItem>

                  <SelectItem
                    value="strength-training"
                    className="rounded-none"
                  >
                    Strength Training
                  </SelectItem>

                  <SelectItem value="general-fitness" className="rounded-none">
                    General Fitness
                  </SelectItem>

                  <SelectItem
                    value="athletic-performance"
                    className="rounded-none"
                  >
                    Athletic Performance
                  </SelectItem>

                  <SelectItem
                    value="body-recomposition"
                    className="rounded-none"
                  >
                    Body Recomposition
                  </SelectItem>
                </SelectContent>
              </Select>

              <input
                type="hidden"
                {...register("goal", {
                  required: true,
                })}
              />
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-10">
            <Textarea
              placeholder="Tell us about your fitness history, injuries, schedule, expectations, or anything important..."
              {...register("notes")}
              className="min-h-40 rounded-none border-0 border-b border-border bg-transparent px-0 shadow-none resize-none focus-visible:ring-0 focus-visible:border-primary"
            />

            {(() => {
              const values = getValues();

              return (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                  <div>
                    <span className="text-muted-foreground">Full Name</span>
                    <p className="mt-1 font-medium">{values.fullName}</p>
                  </div>

                  <div>
                    <span className="text-muted-foreground">Phone</span>
                    <p className="mt-1 font-medium">{values.phone}</p>
                  </div>

                  <div>
                    <span className="text-muted-foreground">Age</span>
                    <p className="mt-1 font-medium">{values.age}</p>
                  </div>

                  <div>
                    <span className="text-muted-foreground">Gender</span>
                    <p className="mt-1 font-medium">{values.gender}</p>
                  </div>

                  <div>
                    <span className="text-muted-foreground">Package</span>
                    <p className="mt-1 font-medium">{values.program}</p>
                  </div>

                  <div>
                    <span className="text-muted-foreground">Weight</span>
                    <p className="mt-1 font-medium">{values.weight} kg</p>
                  </div>

                  <div>
                    <span className="text-muted-foreground">Fitness Level</span>
                    <p className="mt-1 font-medium">{values.level}</p>
                  </div>

                  <div className="md:col-span-2">
                    <span className="text-muted-foreground">Goal</span>
                    <p className="mt-1 font-medium">{values.goal}</p>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        <div className="flex items-center justify-between pt-10">
          <div>
            {step > 1 && (
              <Button type="button" variant="ghost" onClick={prevStep}>
                <ChevronLeft className="h-4 w-4" />
                Previous
              </Button>
            )}
          </div>

          <div>
            {step < 3 ? (
              <Button type="button" className="rounded-none" onClick={nextStep}>
                Next
                <ChevronRight className="h-4 w-4" />
              </Button>
            ) : (
              <Button
                type="button"
                className="rounded-none"
                onClick={handleSubmit(onSubmit)}
                disabled={
                  bookingMutation.isPending ||
                  bookingMutation.data?.status === "created"
                }
              >
                {bookingMutation.isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Booking...
                  </>
                ) : bookingMutation.data?.status === "created" ? (
                  "Booked"
                ) : (
                  "Complete Booking"
                )}
              </Button>
            )}
          </div>
        </div>
      </div>
    </form>
  );
}
