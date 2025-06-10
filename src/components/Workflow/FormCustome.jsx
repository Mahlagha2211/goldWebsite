import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { IoMdClose } from "react-icons/io";

const schema = Yup.object({
  name: Yup.string()
    .matches(/^[\p{L}]{2,}$/u, "Only letters, min 2")
    .required("Required"),
  lastname: Yup.string()
    .matches(/^[\p{L}]{2,}$/u, "Only letters, min 2")
    .required("Required"),
  phone: Yup.string()
    .matches(/^09\d{9}$/, "Must start with 09 and be 11 digits")
    .required("Required"),
  service: Yup.string().required("Please select a category"),
  color: Yup.string().required("Please select a color"),
});

export default function FormCustome({setIsOpen}) {
  return (
    <Formik
      initialValues={{
        name: "",
        lastname: "",
        phone: "",
        service: "",
        color: "",
        message: "",
      }}
      validationSchema={schema}
      onSubmit={(values, actions) => {
        console.log(values);
        actions.resetForm();
      }}
      validateOnChange={false}
      validateOnBlur={false}
    >
      {({ isSubmitting }) => (
        <Form className="min-[550px]:p-10 p-5    mx-auto rounded-lg max-w-lg space-y-4">
          <div className="flex items-center gap-x-3">
          
            <IoMdClose
              className="cursor-pointer  "
              
              onClick={() => setIsOpen(false)}
            />
            <p className="text-2xlk max-[550px]:text-[20px] max-[400px]:font-bold max-[400px]:text-[15px]">
              Order your custom gold
            </p>
          </div>

          {/* NAME */}
          <label className="flex items-start gap-3">
            <span className="max-[400px]:text-sm  font-medium w-14">Name</span>
            <div className="flex-1">
              <Field
                name="name"
                type="text"
                className="w-full rounded-lg border px-3 py-1 text-[12px] shadow-sm outline-0"
              />
              <ErrorMessage
                name="name"
                component="p"
                className="mt-1 text-xs text-red-500"
              />
            </div>
          </label>

          {/* LASTNAME */}
          <label className="flex items-start gap-3">
            <span className="text-sm font-medium w-14">Lastname</span>
            <div className="flex-1">
              <Field
                name="lastname"
                type="text"
                className="w-full rounded-lg border px-3 py-1 text-[12px] shadow-sm outline-0"
              />
              <ErrorMessage
                name="lastname"
                component="p"
                className="mt-1 text-xs text-red-500"
              />
            </div>
          </label>

          {/* PHONE */}
          <label className="flex items-start gap-3">
            <span className="text-sm font-medium  w-14">Phone</span>
            <div className="flex-1">
              <Field
                name="phone"
                type="tel"
                inputMode="numeric"
                className="w-full rounded-lg border px-3 py-1 text-[12px] shadow-sm outline-0"
              />
              <ErrorMessage
                name="phone"
                component="p"
                className="mt-1 text-xs text-red-500"
              />
            </div>
          </label>

          {/* CATEGORY */}
          <label className="flex items-start gap-3">
            <span className="text-sm font-medium w-14">Category</span>
            <div className="flex-1">
              <Field
                as="select"
                name="service"
                className="w-full rounded-lg border px-3 py-1 text-[13px] shadow-sm outline-0"
              >
                <option value="">-- Select a category --</option>
                <option value="Ring">Ring</option>
                <option value="Necklace">Necklace</option>
                <option value="Set">Set</option>
                <option value="Bracelet">Bracelet</option>
                <option value="Earring">Earring</option>
              </Field>
              <ErrorMessage
                name="service"
                component="p"
                className="mt-1 text-xs text-red-500"
              />
            </div>
          </label>

          {/* COLOR */}
          <label className="flex items-start gap-3">
            <span className="text-sm font-medium  w-14">Color</span>
            <div className="flex-1">
              <Field
                as="select"
                name="color"
                className="w-full rounded-lg border px-3 py-1 text-[13px] shadow-sm outline-0"
              >
                <option value="">-- Select a color --</option>
                <option value="gold">Gold</option>
                <option value="silver">Silver</option>
                <option value="rosegold">Rose-Gold</option>
              </Field>
              <ErrorMessage
                name="color"
                component="p"
                className="mt-1 text-xs text-red-500"
              />
            </div>
          </label>

          {/* MESSAGE */}
          <label className="flex items-start gap-3">
            <span className="text-sm font-medium  w-14">Message</span>
            <div className="flex-1">
              <Field
                as="textarea"
                name="message"
                rows={4}
                placeholder="Describe your custom design..."
                className="w-full rounded-lg border px-3 py-2 text-[12px] shadow-sm outline-0 resize-none"
              />
            </div>
          </label>

          {/* SUBMIT */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-lg bg-primary-600 py-1 text-white shadow-md transition hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Ordering…" : "Order"}
          </button>
        </Form>
      )}
    </Formik>
  );
}
