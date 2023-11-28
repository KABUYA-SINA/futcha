import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../sass/base/_base.scss';
import '../sass/base/_font.scss';
import '../sass/layout/_container.scss';
import '../sass/pages/_about.scss';

const About = () => {
    return (
        <div className='container'>
            <Header />
            <main className='main-about'>
                <div className="box-element">
                    <div className="about-img">
                    </div>
                    <div className="about-txt">
                        <h1>À Propos de FUTCHA</h1>
                        <p>Bienvenue sur <span className='futcha-heading'>FUTCHA</span>, votre destination incontournable pour explorer les dernières avancées en science, technologie et les perspectives fascinantes sur le futur.
                            Notre plateforme est dédiée à fournir des articles informatifs, stimulants et diversifiés, destinés à éclairer et inspirer nos lecteurs.
                        </p>
                        <h2>Ce que Nous Offrons</h2>
                        <h3>1. Articles de Qualité</h3>
                        <p>
                            Nous nous engageons à fournir des articles de la plus haute qualité rédigés par des experts dans leurs domaines respectifs.
                            De la robotique à la biotechnologie, en passant par l'intelligence artificielle et les avancées spatiales, nos contenus sont conçus pour informer et intriguer.
                        </p>
                        <h3>2. Exploration du Futur</h3>
                        <p>
                            Plongez dans le futur avec nos analyses approfondies des tendances émergentes et des technologies révolutionnaires.
                            Découvrez les innovations qui façonneront notre monde de demain et explorez les scénarios futuristes qui pourraient devenir réalité.
                        </p>
                        <h3>3. Diversité des Sujets</h3>
                        <p>
                            Notre curiosité n'a pas de limites. De la science-fiction à la psychologie, des découvertes scientifiques aux réflexions philosophiques sur l'avenir, nous abordons une variété de sujets pour satisfaire votre soif de connaissance.
                        </p>
                        <h2>Notre Équipe</h2>
                        <p>
                            Notre équipe est composée de passionnés de la science, de rédacteurs expérimentés et d'experts dans divers domaines.
                            Chacun d'entre nous partage la conviction que la science et la technologie sont des forces puissantes qui peuvent transformer le monde.
                        </p>
                        <h2>Restons Connectés</h2>
                        <p>
                            Rejoignez-nous dans cette exploration passionnante du savoir scientifique et technologique.
                            Suivez-nous sur les réseaux sociaux pour rester à jour avec nos dernières publications, et n'hésitez pas à partager vos réflexions et idées. <br />
                        </p>
                        <p><span className='futcha-heading'>FUTCHA</span> est plus qu'un site web – c'est une communauté de penseurs curieux qui partagent une fascination commune pour le monde qui nous entoure.</p>
                        <p>Merci de faire partie de notre voyage !</p>
                        <p>L'équipe de <span className='futcha-heading'>FUTCHA</span></p>
                    </div>
                </div>

            </main>
            <Footer />
        </div>
    )
}
export default About;
