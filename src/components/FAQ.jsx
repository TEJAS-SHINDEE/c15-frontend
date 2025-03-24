import React from 'react';
import './FAQ.css';
const FAQ = () => {
  return (
    <section className="faqs">
      <h2 style={{ color: 'rgb(98, 95, 95)' }}>
        Frequently Asked Questions
      </h2>
      <div className="container faqs__container">
        <article className="faq">
          <div className="faq__icon">
            <i className="uil uil-plus"></i>
          </div>
          <div className="question__answer">
            <h4>Will I actually get 90% of my course fee back?</h4>
            <p>
              Yes, to qualify for the refund, you must complete 90% of the course content within 90 days from the date of purchase.
            </p>
          </div>
        </article>

        <article className="faq">
          <div className="faq__icon">
            <i className="uil uil-plus"></i>
          </div>
          <div className="question__answer">
            <h4>Is there any number to contact for queries?</h4>
            <p>
              You may call us on +91-7982906637 in case of any query.
            </p>
          </div>
        </article>

        <article className="faq">
          <div className="faq__icon">
            <i className="uil uil-plus"></i>
          </div>
          <div className="question__answer">
            <h4>How can I enroll for this program?</h4>
            <p>
              You need to fill out an application form post-initial registration. After that, your application will be reviewed by our team to assess your eligibility for this program.
            </p>
          </div>
        </article>

        <article className="faq">
          <div className="faq__icon">
            <i className="uil uil-plus"></i>
          </div>
          <div className="question__answer">
            <h4>What if I am not selected?</h4>
            <p>
              You will be able to re-apply to the program based on your eligibility criteria.
            </p>
          </div>
        </article>

        <article className="faq">
          <div className="faq__icon">
            <i className="uil uil-plus"></i>
          </div>
          <div className="question__answer">
            <h4>Once I am enrolled in the program, for how long will the course content be available for?</h4>
            <p>
              The course content will be available for a period of 1 year from the date of purchase.
            </p>
          </div>
        </article>

        <article className="faq">
          <div className="faq__icon">
            <i className="uil uil-plus"></i>
          </div>
          <div className="question__answer">
            <h4>Can I make the payment through PayPal?</h4>
            <p>
              Yes. Mail us with your details at courses@instacampus.org.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default FAQ;
