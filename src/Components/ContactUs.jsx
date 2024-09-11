import React from 'react';

const ContactUs = ({ contactRef }) => {
  return (
    <section ref={contactRef}>
      <div className="py-10">
        <div className="relative flex items-center justify-center overflow-hidden transition-all">
          {/* Use headings for proper semantics */}
          <h2 className="font-bold HeroBold text-[9vw] right-[5vw] -top-[3vw] scale-[0.9] opacity-[1%]">
            Contact!
          </h2>
          <h1 className="font-bold HeroBold text-[10vw] right-[5vw] top-[5vw] shine">
            Contact!
          </h1>
          <h2 className="font-bold HeroBold text-[9vw] right-[5vw] top-[13vw] scale-[0.9] opacity-[1%]">
            Contact!
          </h2>
        </div>
      </div>
      <div className="w-full grid place-items-center mb-20">
        <div className="form-container w-[90vw] md:w-[50vw] lg:w-[30vw]">
          <form
            className="form"
            role="form"
            aria-labelledby="form-title"
            onSubmit={(e) => {
              e.preventDefault();
              alert('We will get back to you soon');
            }}
          >
            <div className="form-group">
              <label htmlFor="email">Company Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                aria-required="true"
                aria-label="Enter your company email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="textarea">How Can We Help You?</label>
              <textarea
                name="textarea"
                id="textarea"
                rows="10"
                cols="50"
                required
                aria-required="true"
                aria-label="Describe how we can help"
              ></textarea>
            </div>
            <button
              className="form-submit-btn"
              type="submit"
              aria-label="Submit the contact form"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
