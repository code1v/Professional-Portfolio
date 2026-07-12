import ContactForm from "./ContactForm";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#090909] py-32 px-6 lg:px-10"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">

        {/* Left */}

        <div>

          <p className="uppercase tracking-[8px] text-blue-500 text-sm">
            Contact
          </p>

          <h2 className="heading text-7xl md:text-8xl mt-3">
            LET'S TALK
          </h2>

          <p className="mt-8 text-gray-400 leading-8 max-w-lg">
            Whether you have a project, internship opportunity,
            or just want to connect, feel free to send me a message.
          </p>

        </div>

        {/* Right */}

        <ContactForm />

      </div>
    </section>
  );
}

export default Contact;