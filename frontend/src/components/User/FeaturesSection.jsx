// import React from 'react';
import FeaSection from '../../assets/img 9.svg';



const FeaturesSection = () => {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 px-4 mb-8 md:mb-0">
          <img src={FeaSection} alt="Features" className="w-full rounded" />
        </div>
        <div className="md:w-1/2 px-4 text-left">
          <h2 className="text-4xl font-bold mb-4 text-purple-100">WHAT SETS US APART</h2>
          <p className="text-lg  text-justify w-11/12 leading-relaxed">
            Expertise: Nos instructeurs sont des professionnels de l'industrie avec des années d'expérience pratique.
            Ils apportent des connaissances réelles et des compétences applicables immédiatement. Notre programme
            couvre tout, des concepts fondamentaux aux techniques avancées en conception web, développement,
            marketing digital, et plus encore. Nous offrons une expérience d'apprentissage interactive avec des cours vidéo,
            des quiz, des projets pratiques et des discussions entre pairs. Rejoignez notre communauté dynamique et bénéficiez
            du soutien dédié de notre équipe.
          </p>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
