import { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const FormSection = () => {
  const formRef = useRef(null);

  const [values, setValues] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState(null);

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  // manual validation
  const validate = () => {
    const newErrors = {};

    if (!values.user_name.trim()) {
      newErrors.user_name = "Name is required";
    }

    if (!values.user_email.trim()) {
      newErrors.user_email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.user_email)) {
      newErrors.user_email = "Invalid email address";
    }

    if (!values.message.trim()) {
      newErrors.message = "Message is required";
    } else if (values.message.length < 5) {
      newErrors.message = "Message must be at least 5 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setIsLoading(true);

    try {
      await emailjs.sendForm(
        "service_pop6u9e",
        "template_1fec5m9",
        formRef.current,
        {
          publicKey: "gPai4MdxZYKC_X1r0",
        }
      );

      toast.success("Message sent successfully");

      setValues({
        user_name: "",
        user_email: "",
        message: "",
      });
    } catch (error) {
      toast.error("Failed to send message");

      setServerError(error || "Failed to send message");

      console.error("EmailJS Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="lg:col-span-2">
      <h3 className="text-2xl font-bold mb-2">Contact Me</h3>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="space-y-4 cardBG hover:border-border p-4 lg:p-6 rounded-lg"
      >
        {/* Name */}
        <div>
          <Label htmlFor="user_name" className="mb-2">
            Name
          </Label>
          <Input
            type="text"
            name="user_name"
            id="user_name"
            placeholder="Your Name"
            value={values.user_name}
            onChange={handleChange}
            className="bg-popover!"
          />
          {errors.user_name && (
            <p className="text-sm text-red-400 mt-1">{errors.user_name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <Label htmlFor="user_email" className="mb-2">
            Email
          </Label>
          <Input
            type="email"
            name="user_email"
            id="user_email"
            placeholder="Your Email"
            value={values.user_email}
            onChange={handleChange}
            className="bg-popover!"
          />
          {errors.user_email && (
            <p className="text-sm text-red-400 mt-1">{errors.user_email}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <Label htmlFor="message" className="mb-2">
            Message
          </Label>
          <Textarea
            name="message"
            id="message"
            placeholder="Your Message"
            rows={5}
            value={values.message}
            onChange={handleChange}
            className="min-h-[100px] max-h-[200px] bg-popover!"
          />
          {errors.message && (
            <p className="text-sm text-red-400 mt-1">{errors.message}</p>
          )}
        </div>

        {/* Submit */}
        <Button type="submit" disabled={isLoading} className="w-full lg:w-auto">
          {isLoading ? "Sending..." : "Send Message"}
          <Send className="ml-2" />
        </Button>

        {serverError && (
          <p className="w-full text-sm text-center bg-red-100 text-red-500 border border-red-500 rounded-md p-2">
            {serverError}
          </p>
        )}
      </form>
    </div>
  );
};

export default FormSection;
