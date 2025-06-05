
import Header from "../../components/header";
import Footer from "../../components/footer";
import { Link } from "react-router";
import Alert from "../../components/ui/alert";
import Button from "../../components/ui/button";

const Home = () => {
	return (
		<>
    <Header />


		<section className="flex flex-wrap justify-center gap-[1rem] px-[2rem] pt-[3rem] pb-[0]">
			<div className="flex flex-col gap-[1rem] w-[40rem]">
				<h1 className="text-h1 font-bold">
					Créez des pages de vente, encaissez, et suivez vos clients sur 
					<span className="ml-[1rem] text-green-600"> 
						WhatsApp!
					</span>
				</h1>
				<p className="text-p font-regular">
					Centralisez vos informations professionnelles dans une 
					carte digitale claire, personnalisable et facile à partager.
					 Offrez une première impression mémorable, accessible en un 
					 simple lien.
				</p>

				<Button>Commencer</Button>
			</div>

			<picture className="max-w-[32rem]">
				<img src="./images/1.jpg" alt="" />
			</picture>
		</section>

		<section className="flex flex-wrap justify-center items-center gap-[2rem] px-[2rem] py-[1rem]">
			
			<picture className="max-w-[24rem]" >
				<img src="./images/6.jpg" alt="" />
			</picture>

			<div className="flex flex-col h-fit gap-[1rem] w-[40rem]">
				<p className="text-tagline font-bold">
					1. Votre produit, votre page, votre style !
				</p>
				<h2 className="text-h2 font-bold">
					Pages Produits Personnalisées !
				</h2>
				<p className="text-p font-regular">
					Créez une page unique pour chaque produit avec vos 
					<span className="ml-1 font-semibold">
						couleurs
					</span>, 
					vos images, vos mots. <br/> Ajoutez une description <strong>claire</strong>, 
					le <strong className="ml-1 font-semibold">prix</strong>, et des visuels attrayants. Offrez à vos clients une expérience 
					<strong className="ml-1 font-semibold">fluide et professionnelle</strong>, sans avoir à coder.
				</p>

				<Button>Commencer</Button>
			</div>

		</section>

		<section className="flex flex-wrap justify-center items-center gap-[2rem] px-[2rem] py-[1rem]">

			<div className="flex flex-col h-fit  gap-[1rem] w-[40rem]">
				<p className="text-tagline font-bold">
					2. Encaissez sans effort, recevez directement.
				</p>
				<h2 className="text-h2 font-bold">
					Paiement Intégré
				</h2>
				<p className="text-p font-regular">
					Ajoutez un bouton de paiement sur chaque page produit pour 
					permettre à vos clients de régler leurs achats instantanément 
					via <strong className="text-yellow-400"> Mobile Money ou Kkiapay </strong>. Le processus 
					est rapide, sécurisé, et adapté aux réalités du marché africain. <br/>
					Vous <strong>vendez</strong>, et vous <strong>recevez</strong> – sans intermédiaire inutile.
				</p>

				<Link to="/login" className="flex items-center">
					<p className="underline text-primary-purple" >
						Commencer
					</p>
					<img src="./icons/chevron-right.svg" alt="" />
				</Link>
			</div>

						
			<picture className=" max-w-[32rem]" >
				<img src="./images/2.jpg" alt="" />
			</picture>

		</section>

		<section className="flex flex-wrap justify-center items-center gap-[2rem] px-[2rem] py-[1rem]">
			
			<picture className=" w-[28rem]" >
				<img src="./images/3.jpg" alt="" />
			</picture>

			<div className="flex flex-col h-fit  gap-[1rem]  w-[40rem]">
				<p className="text-tagline font-bold">
					3. Vendez. Ils achètent. Vous discutez.
				</p>
				<h2 className="text-h2 font-bold">
					Suivi WhatsApp !
				</h2>
				<p className="text-p font-regular">
					Après chaque achat, vos clients sont redirigés automatiquement 
					vers votre WhatsApp avec un message prérempli. <br /> Discutez, 
					<strong className="ml-1">confirmez</strong> la commande ou organisez la livraison directement. 
					Vous restez en contact, gagnez leur confiance et fidélisez 
					votre clientèle sans changer vos habitudes.
				</p>

				<Link to="/login" className="flex items-center">
					<p className="underline text-primary-purple" >
						Commencer
					</p>
					<img src="./icons/chevron-right.svg" alt="" />
				</Link>
			</div>

		</section>

		<section className="flex flex-wrap flex-col gap-[2rem] items-center py-[3rem] px-[2rem]">

			<h2 className="text-h2 text-center font-bold">
				Commence à vendre plus intelligemment, dès aujourd’hui.
			</h2>

			<p className="text-p text-center max-w-[42rem] font-regular">
				Ne laisse plus tes produits <strong>se perdre dans des discussions interminables !</strong>  <br />
				Avec <strong>What’sell</strong>, chaque lien que tu partages devient une boutique <strong> prête à
				encaisser </strong> et à te connecter à ton client. Simple, rapide, efficace — 
				même sans site web.
			</p>

			<Link to="/register ">
				<Button>Commencer</Button>
			</Link>

		</section>

    <Footer />
		</>
	)
};

export default Home;