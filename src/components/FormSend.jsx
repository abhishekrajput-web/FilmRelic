import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
const FormSend = () => {
    const [state, handleSubmit] = useForm('xeqbjdnd');
    if (state.succeeded) {
        return <div>
            <h2 className='font-bold text-2xl'>Thank You For Signup !</h2>
        </div>
    }
    return (
        <div>
            <span className="footer-title">Newsletter</span>
            <div className="form-control w-80">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email" className="label">
                        <span className="label-text">Enter your email address</span>
                    </label>
                    <div className="relative">
                        <input id="email" type="email" pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/" name="email" placeholder="username@site.com" required="required" className="input input-bordered w-full pr-16" />
                        <ValidationError field="email" prefix="Email" errors={state.errors} />
                        <button type="submit" disabled={state.submitting} className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormSend;