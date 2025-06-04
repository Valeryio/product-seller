
import Button from "../../components/ui/button";
import { Link } from "react-router";
import Header from "../../components/header";
import Footer from "../../components/footer";


const About = () => {
	
	return (
		<>
    <Header />
		
		<section className="flex items-center w-full justify-between gap-[2rem] px-[6rem] py-[3rem]">

			<div className="flex h-fit gap-[4rem]">

				<div className=" w-[33rem]">
					<p className="text-tagline font-bold">
						Qui sommes-nous ?
					</p>

					<h1 className="text-h2 font-bold">
						 À propos de What’sell
					</h1>

					<br />
					What’sell est une plateforme qui permet aux vendeurs d’utiliser
					WhatsApp de manière plus professionnelle.

					<br />
					<br />
					Nous aidons les commerçants à créer des pages de vente simples,
					belles et efficaces pour chacun de leurs produits, 
					sans site web, sans application compliquée.

					<p className=" font-regular max-w-[33rem]">
						What’sell a été conçu par <strong>Linson DMT</strong>, développeur
						web formé chez <strong>Simplon Bénin</strong>, avec une envie simple : créer 
						un outil concret pour les vendeurs du quotidien.
						<br />
						<br />
						Ce projet est né d’un constat simple : il fallait un outil 
						intuitif, design, et accessible à tous. Sans application à 
						télécharger. Sans complication. Juste un lien.
					</p>
				</div>

				<picture className="max-w-[30rem]">
					<img src="./images/4.jpg" alt="" />
				</picture>
			</div>

		</section>

		<Footer />
		</>
	)
};

export default About;