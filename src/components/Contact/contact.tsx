import './contact.scss'

const Contact = () => {
  return (
    <>
    <div className={'styles container'}>
      Contact Me
    </div>

   <div className='contact-form'>
        <form>
            <ul>
                <li className='half'>
                        <input 
                        type="text" 
                        name="name" 
                        placeholder="name" 
                        required />
                </li>
                <li className='half'>
                        <input 
                        type="email" 
                        name="email" 
                        placeholder="email" 
                        required />
                </li>
                <li>
                        <input 
                        placeholder="Subject" 
                        type="text" 
                        name="Subject"  
                        required />
                </li>
                    <li>
                        <textarea 
                        placeholder="Message" 
                        name="Message" required 
                        ></textarea>
                    </li>
                <li>
                        <input 
                        type="submit" 
                        className="flat-button" 
                        value="SEND" />
                </li>
            </ul>
        </form>
   </div> 
   </>
  )
}

export default Contact
