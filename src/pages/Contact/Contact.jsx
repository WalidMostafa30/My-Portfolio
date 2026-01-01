import PageTitle from "@/components/common/PageTitle";
import ContactInfoSection from "./sections/ContactInfoSection";
import FormSection from "./sections/FormSection";

const Contact = () => {
  return (
    <div className="pageContainer">
      <PageTitle title="Contact" subtitle="Get in touch with me" />

      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        <ContactInfoSection />

        <FormSection />
      </div>
    </div>
  );
};

export default Contact;
