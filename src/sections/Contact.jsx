
const Contact = () => {
  return (
    <section className="relative flex items-center c-space section-spacing">
        <div className="flex flex-col items-center justify-center max-w-md p-5
            mx-auto border border-white/10 rounded-2xl bg-primary">

            <div className="flex flex-col items-start w-full gap-5 mb-10">
                <h2 className="text-heading">Get in Touch</h2>
               
                <p>Whether you're looking to build a new website, 
                    improve your existing platform, or bring a unique project to life,
                    I'm here to help.
                </p>
           
            </div>
            
            <form className="w-full ">

                <div className="mb-5">
                    <label htmlFor="name" className="field-label">Full Name</label>
                    <input 
                        id="name"
                        name="name"
                        type="text"
                        className="field-input field-input-focus"
                        placeholder="John Doe"
                        autoComplete="name"
                        required

                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="field-label">Email</label>
                    <input 
                        id="email"
                        name="email"
                        type="email"
                        className="field-input field-input-focus"
                        placeholder="JohnDoe@example.com"
                        autoComplete="email"
                        required

                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="message" className="field-label">Message</label>
                    <textarea 
                        id="message"
                        name="message"
                        type="text"
                        rows="4"
                        className="field-input field-input-focus"
                        placeholder="Your message here..."
                        autoComplete="message"
                        required

                    />
                </div>

                <button className="w-full px-1 py-3 text-lg text-center
                    rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation    
                ">
                    Send
                </button>
                    
            </form>
        
        </div>
    </section>
  )
}

export default Contact;