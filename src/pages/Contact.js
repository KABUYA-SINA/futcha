import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FormInput from '../components/Form/FormInput';
import TextArea from '../components/Form/TextArea';
import { motion } from "framer-motion";
import '../sass/base/_base.scss';
import '../sass/base/_font.scss';
import '../sass/layout/_container.scss';
import '../sass/pages/_contact.scss';

const Contact = () => {

    const [textareaValues, setTextAreaValues] = useState('')
    const [values, setValues] = useState({
        nom: "",
        prenom: "",
        mail: "",
        phone: "",
    })

    const inputs = [
        {
            id: "Nom",
            label: 'Nom',
            name: 'Nom',
            type: 'text',
            maxLength: '15',
            errorMessage: " The last name should be 3-15 characters, allow spaces between words and shouldn't include any special character or a nummber !",
            required: true,
            pattern: '^[A-Za-z ]{3,15}$'
        },
        {
            id: "Prénom",
            label: 'Prénom',
            name: 'Prénom',
            type: 'text',
            maxLength: '10',
            errorMessage: "The last name should be 3-10 characters and shouldn't include any special character !",
            required: true,
            pattern: '^[A-Za-z0-9]{3,10}$'
        }, {
            id: "Email",
            name: 'email',
            label: 'Email',
            type: 'email',
            errorMessage: "The email must be valable",
            maxLength: '15',
            required: true,
            pattern: '/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i'
        }, {
            id: "Téléphone",
            name: 'Téléphone',
            label: 'Téléphone',
            type: 'tel',
            errorMessage: "10 number allowed !",
            minLength: "3",
            maxLength: "10",
            required: true,
            pattern: '^[0-9]{3,10}$'
        }

    ]
    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }
    function refreshPage() {
        window.location.reload(true);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Votre message a bien été envoyé")
        refreshPage()
    }

    return (
        <motion.div
            className='container'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: .4 } }}
            exit={{ opacity: 0 }}
        >
            <Header />
            <main className='main-contact'>
                <div className="contact-menu">
                    <div className="contact-img">
                    </div>
                    <div className="form">
                        <h1>Contactez nous !</h1>
                        <form className='for-form' onSubmit={handleSubmit}>
                            {
                                inputs.map((input) => (
                                    <FormInput key={input.id} {...input} value={values[input.name] || ''} onChange={onChange} className="form-input" />
                                ))
                            }
                            <TextArea placeholder="Laissez-nous un message !" setTextAreaValues={setTextAreaValues} value={textareaValues} />
                            <button type="submit" >Envoyer</button>
                        </form>
                        <div className="map">
                            <iframe
                                aria-label="google map"
                                title="google-map"
                                width="100%" height="200" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"
                                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=rue%20felix%20brun,%2069000%20lyon+(futcha)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                                <a href="https://www.maps.ie/population/">Population map</a>
                            </iframe>
                        </div>
                        <div className="adress">
                            <p>help-contact@futcha.com</p>
                            <p>101 Rue Félix Brun, 69000 Lyon</p>
                            <p>Ouvert de 6h à 21h, du lundi
                                au vendredi
                            </p>
                            <p>SIRET: 123 456 789 12345</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </motion.div>
    )
}

export default Contact;