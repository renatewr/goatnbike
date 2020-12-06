import React from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'


const CustomForm = ({ status, message, onValidated }) => {
  let email, name;
  const dispMessage = status === 'success' || status === 'error' ;

  const submit = () =>
    email &&    
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value
    });

  return (
    <div>
      {status === "sending" && <div>sending...</div>}
      { 
        dispMessage && 
        <div dangerouslySetInnerHTML={ { __html: message } }></div>
      }      
      {
        status !== "success" && 
        <div className="signup">
        <input 
        style={{ display: "none" }}     
        ref={node => (name = node)}
        type="text"
        placeholder="Your name"
      />
      <h3>Sign up for updates!</h3>
      <div className="signup-form"><input
        ref={node => (email = node)}
        type="email"
        placeholder="Your email"
      />
      <br />
      <button onClick={submit} className="special">
        Submit
      </button>
      </div>
        </div>
      }
    </div>
  );
};

class SignUp extends React.Component {
  
  render() {
    const url = 'https://goatnbike.us12.list-manage.com/subscribe/post?u=d0d83b49d8fcb13f79207dfc6&amp;id=f6b4838105'

    return (        
        <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }) => (
            <CustomForm 
              status={status}
              message={message}
              onValidated={formData => subscribe(formData)}
            />
          )}
        />
    )
  }
}





export default SignUp
