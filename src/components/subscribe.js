import React, { useState } from "react"
import EmailValidator from "email-validator"

const Subscribe = () => {
  const [email, setEmail] = useState("")
  const [subscribeState, setLogInState] = useState("Subscribe")
  const [emailMessage, setEmailMessage] = useState({
    error: true,
    message: "",
    submitted: false,
  })

  const onEmailChange = e => {
    setEmail(e.target.value)

    const email = e.target.value

    if (email.length === 0) {
      setEmailMessage({
        error: true,
        message: "Empty Field",
      })
    } else if (!EmailValidator.validate(email)) {
      setEmailMessage({
        error: true,
        message: "Invalid Input",
      })
    } else {
      setEmailMessage({
        error: false,
        message: "",
      })
    }
  }

  return (
    <div id="subscribe" className="section-subscribe">
      <div className="container">
        <h2 className="heading-md">Get notified when we launch</h2>
        <p className="text-thin">
          Be the first to know when our books and ebooks are available. As a
          pre-launch subscriber, you'll receive exclusive discounts, so sign up
          to save.
        </p>
        <form
          method="POST"
          action="https://api.formcake.com/api/form/1f75af29-c219-4635-b5f2-5bbe7c4e7968/submission"
          // action="https://api.formcake.com/api/form/c911be9a-7ff5-4c64-89d6-d3f7c8e27b37/submission"
        >
          <p className="error-message">{emailMessage.message}</p>
          <div className="form-content-wrapper">
            <label>
              Enter Your Email
              <input
                type="Email"
                className="text-thin input-field"
                name="email"
                onChange={onEmailChange}
                placeholder="Enter Your Email"
              />
            </label>
            <button
              type="submit"
              className={`btn-green text-sm ${
                emailMessage.error ? "btn-disabled" : ""
              }`}
              disabled={emailMessage.error ? true : false}
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Subscribe