import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import images from '../assets/pages/futcha.webp';
import '../sass/base/_base.scss';
import '../sass/base/_font.scss';
import '../sass/layout/_container.scss';
import '../sass/pages/_futcha.scss';

const Future = () => {
    const [img, setImg] = useState([])
    useEffect(() => (
        setImg(images)
    ), [])
    return (
        <div className='container'>
            <Header />
            <main className='fut-main'>
                <div className="backg-main">
                    <div className="fit--img">
                        <img src={img} alt='future' />
                    </div>
                    <div className="fit--text">
                        <h1>Future</h1>
                        <p>
                            Il est difficile de prédire l'avenir avec certitude, car de nombreux facteurs peuvent influencer le cours des événements.
                            Cependant, on peut s'attendre à ce que plusieurs tendances et développements actuels continuent à façonner l'avenir. <br />
                            Voici quelques domaines clés qui pourraient jouer un rôle important dans le futur :
                        </p>
                        <div className='text-fut'>
                            <ul>
                                <li>
                                    <span className="heading">
                                        <img width="100" height="100"
                                            src="https://img.icons8.com/external-parzival-1997-flat-parzival-1997/100/external-technology-digital-globalization-parzival-1997-flat-parzival-1997-1.png"
                                            alt="external-technology-digital-globalization-parzival-1997-flat-parzival-1997-1"
                                        />
                                        <p>Technologie</p>
                                    </span>
                                    <span className='heading--text'>
                                        Les avancées rapides dans les domaines tels que l'intelligence artificielle, l'informatique quantique, la biotechnologie et l'automatisation continueront probablement à façonner notre façon de vivre et de travailler.
                                    </span>
                                </li>
                                <li>
                                    <span className="heading">
                                        <img width="100" height="100"
                                            src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/100/external-sustainability-circular-economy-flaticons-lineal-color-flat-icons.png"
                                            alt="external-sustainability-circular-economy-flaticons-lineal-color-flat-icons"
                                        />
                                        <p>Durabilité</p>
                                    </span>
                                    <span className='heading--text'>
                                        La prise de conscience croissante des enjeux environnementaux pourrait conduire à des changements significatifs dans la façon dont nous produisons et consommons des biens et des services, avec un accent accru sur la durabilité.
                                    </span>
                                </li>
                                <li>
                                    <span className="heading">
                                        <img width="100" height="100"
                                            src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/100/external-health-hygiene-flaticons-lineal-color-flat-icons-5.png"
                                            alt="external-health-hygiene-flaticons-lineal-color-flat-icons-5"
                                        />
                                        <p>Santé</p>
                                    </span>
                                    <span className='heading--text'>
                                        Les progrès dans la médecine, les soins de santé personnalisés et la recherche sur les maladies pourraient améliorer la qualité de vie et prolonger l'espérance de vie.
                                    </span>
                                </li>
                                <li>
                                    <span className="heading">
                                        <img width="100" height="100"
                                            src="https://img.icons8.com/cotton/100/bank-building--v2.png"
                                            alt="bank-building--v2"
                                        />
                                        <p>Économie</p>
                                    </span>
                                    <span className='heading--text'>
                                        Les modèles économiques peuvent évoluer en réponse aux changements technologiques, aux perturbations industrielles et aux défis mondiaux, tels que les pandémies.
                                    </span>
                                </li>
                                <li>
                                    <span className="heading">
                                        <img width="100" height="100"
                                            src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/100/external-climate-plants-flaticons-lineal-color-flat-icons-3.png"
                                            alt="external-climate-plants-flaticons-lineal-color-flat-icons-3"
                                        />
                                        <p>Climat</p>
                                    </span>
                                    <span className='heading--text'>
                                        Les efforts pour atténuer le changement climatique et s'adapter à ses effets pourraient devenir des priorités majeures à l'échelle mondiale.
                                    </span>
                                </li>
                                <li>
                                    <span className="heading">
                                        <img width="100" height="100"
                                            src="https://img.icons8.com/plasticine/100/business-buildings.png"
                                            alt="business-buildings"
                                        />
                                        <p>Société</p>
                                    </span>
                                    <span className='heading--text'>
                                        Les questions liées à l'équité, à la diversité et à l'inclusion pourraient devenir de plus en plus importantes, influençant les politiques, les normes sociales et les relations interpersonnelles.
                                    </span>
                                </li>
                                <li>
                                    <span className="heading">
                                        <img width="100" height="100"
                                            src="https://img.icons8.com/officel/100/geography.png"
                                            alt="geography"
                                        />
                                        <p>Géopolitique</p>
                                    </span>
                                    <span className='heading--text'>
                                        Les relations entre les nations, les alliances et les conflits pourraient évoluer en réponse à des facteurs tels que les changements économiques, les évolutions technologiques et les défis mondiaux.
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <p>
                            Il est important de noter que ces points sont généraux, et les événements réels peuvent être influencés par une combinaison complexe de facteurs.
                            L'avenir dépendra également des choix que nous faisons en tant que société et de notre capacité à résoudre les défis auxquels nous sommes confrontés.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
export default Future;
