import React from "react";
import FadeIn from "./FadeIn";
import TextInput from "./TextInput";
import RadioInput from "./RadioInput";
import Button from "./Button";

const ContactForm = () => {
  return (
    <FadeIn>
      <form>
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Work inquiries
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput label="Name" name="name" autoComplete="name" />
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
          />
          <TextInput
            label="Company"
            name="company"
            autoComplete="organization"
          />
          <TextInput label="Phone" type="tel" name="phone" autoComplete="tel" />
          <TextInput label="Message" name="message" />
          <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset>
              <legend className="text-base/6 text-neutral-500">
                Looking for
              </legend>
            </fieldset>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <RadioInput
                label="Transformer"
                name="budget"
                value="Transformer"
              />
              <RadioInput
                label="Electronic Meters"
                name="budget"
                value="Electronic Meters"
              />
              <RadioInput
                label="Solar Services"
                name="budget"
                value="Solar Services"
              />
              <RadioInput
                label="Cable Joining Kits"
                name="budget"
                value="Cable Joining Kits"
              />
              <RadioInput
                label="Supply, Installation, Testing & commitioning"
                name="budget"
                value="Supply, Installation, Testing & commitioning"
              />

              <RadioInput
                label="Oil Filteration and Dehydration"
                name="budget"
                value="Oil Filteration and Dehydration"
              />
              <RadioInput
                label="HT & LT Panels"
                name="budget"
                value="HT & LT Panels"
              />
              <RadioInput
                label="AMC for electrical equipments"
                name="budget"
                value="Cable Joining Kits"
              />
            </div>
          </div>
        </div>
        <Button type="submit" className="mt-10">
          Let’s work together
        </Button>
      </form>
    </FadeIn>
  );
};

export default ContactForm;
