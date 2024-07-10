import { Observable } from "rxjs";
import { DateTime } from 'luxon';
import { IExpertise } from "../models/expertise.model";
import { AppData } from '../models/model';

export abstract class ApiService {
    public abstract getData(): Observable<AppData>;
}

export class LocalApiService extends ApiService {

    private readonly _data = new Observable<AppData>(subscribe => {

        const data: AppData = {
            name: 'Audran COLLIGNON',
            repository: 'https://github.com/AudranC/portfolio_collignon',
            creationYear: 2024,
            home: {
                job: 'Expert en ingénierie du logiciel',
                punchline: "Analyser, concevoir, développer. L'expertise logicielle au service de vos besoins."
            },
            skills: [
                {
                    type: 'hardSkill',
                    name: 'Architecture logicielle',
                    synopsis: "Le but premier de l'architecture logicielle est de produire une <b>base de code solide, claire et organisée</b> rendant ainsi nos futurs produits bien plus maintenables et plus <b>stables</b>.",
                    detail: `
<p>Cette compétence s'est pour moi développée au fur et à mesure de mes études et de mes expériences professionnelles. 
Pouvoir obtenir une architecture fiable est un processus demandant beaucoup de <b>théorie</b> qu'il faudra ensuite allier à la pratique.<br/>
Afin de produire l'architecture la plus adaptée au produit, il faudra d'abord avoir une bonne vue d'ensemble du sujet grâce aux <b>spécifications des fonctionnalités</b> nécessaires. 
Il faudra ensuite passer par une <b>étape de réflexion où schématiser les composants</b> et leurs interactions sera utile. 
Si nécessaire, l'usage de <b>prototype</b> permettra d'étudier les différentes possibilités. 
Cependant, il faut garder en tête qu'une partie de cette architecture pourra être amenée à évoluer avec de nouvelles demandes de fonctionnalités, d'où la nécessité de bases solides dès la première ébauche du produit.</p>
<br/><p>
Une des architectures logicielles les plus communes aux interfaces hommes machines est l'architecture <b>Modèle-Vue-Contrôleur</b> ou <b>MVC</b>. Comme son nom l'indique, c'est une architecture divisée en trois modules : un Modèle, une Vue et un Contrôleur.<br/> 
Le rôle du Modèle, aussi appelé <b>logique métier</b>, est de <b>stocker les données</b> utiles au logiciel ainsi que les différentes méthodes et fonctions pour les modifier.<br/>
De l'autre côté, la Vue est la partie émergée de l'iceberg. Elle représente l'<b>interface</b> et gérera toutes les <b>intéractions</b> directes que pourrait avoir un <b>utilisateur</b> avec le logiciel. Cette interface pourra alors afficher les données du Modèle qui lui auront été transmises par le dernier module.<br/>
Ce dernier étant le Contrôleur, ayant pour but d'assurer la <b>communication des données</b> du Modèle vers la Vue, et inversement, la <b>communication des interactions</b> reçues dans la Vue afin de modifier le Modèle.<br/> 

</p>
<p>Cependant, toutes les IHM ne respectent pas ce modèle et peuvent se voir complexifier dû aux différentes contraintes du produit.
 Dans le cadre du développement du Nouvel éditeur de scénario, l'interface est décorrélée du scénario en lui-même.
  En effet, les algorithmes du scénario peuvent tourner dans une simulation sans avoir besoin de l'éditeur en lui-même.
   Nous travaillons donc avec une surcouche serveur du côté de la simulation pouvant recevoir différentes informations de l'interface tels qu'une demande de déplacement d'une entité ou de la caméra.
    L'architecture de l'interface quant à elle va intégrer un client lié au contrôleur permettant l'envoie de ces informations.
</p>
`
                },
                {
                    type: 'hardSkill',
                    name: 'Développement applicatif et logiciel',
                    synopsis: "Le développement de logiciel consiste à étudier, concevoir, construire, transformer, mettre au point, maintenir et améliorer des logiciels.",
                    detail: `
<p>Grâce à mon BTS SIO et mon cursus à l'ESIEA, j'ai eu l'occasion de réaliser divers stages et projets. 
Ils m'ont d'abord tous amenés à développer, ou participer au développement, de <b>logiciels ou d'applications</b>, aussi appelés <b>Interface Homme Machine</b> ou <b>IHM</b>. 
Le principal aspect technique de ces IHM est la prise en compte des actions de l'utilisateur à travers une interface qui se devra d'être lisible et accessible.</p>
<br/><p>La mise en place d'IHM demande de <b>multiples compétences</b> allant des compétences classiques de développeur tel que la <b>création d'algorithmes</b> et la maîtrise des différents langages qui seront utilisés, à des compétences demandant plus de créativité et de <b>compétences transverses</b> telles que la compréhension des besoins des clients, l'expérience utilisateur ou un côté artistique.</p>
<br/><p>Mon expérience lors de mes projets en entreprise, où le besoin client est réel et est amené à évoluer, m'ont permis de réaffirmer l'importance de <b>communiquer</b> régulièrement avec les clients afin de s'assurer que le projet garde la bonne direction. 
Ensuite, il est aussi nécessaire de récupérer des seconds avis dans une démarche itérative afin de rendre les <b>intéractions utilisateurs</b> les plus fluides et agréables possibles.</p>
<p>Lors de la création d'un logiciel, j'ai appris à mettre en place une <b>démarche </b>pour arriver à une <b>base solide</b>; démarche que j'ai pu appliquer lors du développement d'Open Street Map Tile Generator. 
<br/>D'abord, la division des fonctionnalités principales et secondaires par ordre d'importance. Ensuite, mettre au point une <b>maquette</b> générale par rapport aux besoins exprimés. Puis décidé d'une <b>architecture logicielle</b>, qui sera la plupart du temps un modèle MVC (cf. article architecture logicielle).
<br/>Une fois ces points éclaircis, le développement peut commencer vers un premier prototype incluant les fonctionnalités les plus prioritaires.
</p>
`
                },
                {
                    type: 'hardSkill',
                    name: 'Expérience utilisateur',
                    synopsis: "Qualité du vécu de l'utilisateur dans des environnements numériques ou physiques.",
                    detail: `
<p>L'expérience utilisateur, ou <b>User Experience</b> (<b>UX</b>) en anglais, est un concept regroupant de multiples domaines ayant pour but de qualifier le <b>ressenti</b> d'un utilisateur lors de la participation à toute activité, aussi bien physique que numérique. Bien que l'expérience utilisateur soit applicable à de nombreuses situations, nous allons plutôt nous focaliser sur son application dans le cadre des applications, logiciels et sites webs.
<p></p>
L'expérience d'un utilisateur se doit de respecter les différents paramètres du futur produit. Par exemple, les <b>contraintes d'ergonomie</b> ne sont souvent pas les mêmes lors de la production d'une application pour un réseau social grand public (Facebook, Instagram, YouTube) comparé à un logiciel de calculs ou de 3D pour ingénieurs (MATLAB, SOLIDWORKS). Cela ne veut pas dire pour autant dire que nous pouvons nous permettre de produire des interfaces cryptiques et répulsives sous le prétexte que l'utilisateur aurait un profil plus technique. Un des axes principaux de l'UX est de prendre en compte le ressenti utilisateur et de s'assurer que les fonctionnalités principales soient <b>accessibles</b> et <b>compréhensibles</b>, ce qu'on appelle aussi l'<b>ergonomie logicielle</b>.
<p></p>
Afin de comprendre l'utilisateur lors du développement, il est nécessaire de prendre du recul, de réessayer des <b>scénarios d'utilisations</b> classiques par un utilisateur. En prenant un point de vue différent et en faisant abstraction de nos habitudes, nous pouvons alors nous rendre compte des points négatifs de l'utilisation de notre produit.
<p></p>
	
	La compréhension de l'expérience utilisateur est une compétence que j'ai pu développer au quotidien au fur et à mesure de mes expériences. Je me pose des questions dès la planification d'une nouvelle fonctionnalité telles que “Comment la rendre intuitive ?” ou “Est-ce que cette fonctionnalité secondaire serait un plus pour celle-ci ?”. Je refais aussi régulièrement des <b>tests de cas d'utilisations</b> en prenant du recul et demande, si possible, au client ou à des collègues de <b>tester</b> mes produits afin de récupérer leurs <b>retours</b> et <b>améliorer</b> le produit pour le mieux.
</p>
`
                },
                {
                    type: 'softSkill',
                    name: 'Compréhension du besoin',
                    synopsis: "Anticiper et reformuler les besoins",
                    detail: `
                    <p>Un des plus grands aspects du travail de développeur est de répondre au besoin exprimé. Cependant, le besoin est souvent assez général et a besoin d'être étayé. Grâce à mes multiples expériences de projets et stages, ma compréhension du besoin me permet d'anticiper les futurs besoins et de les proposer en avance.</p>
                    <p>
                    Cette compétence est omni-présente dans le développement d'interfaces logicielles où l'<b>expérience utilisateur</b> est au cœur de métier. 
                    Cela va de pair avec une communication-client régulière afin de récupérer des <b>retours d'expériences</b> tout au long de la phase de développement. 
                    Ces retours permettront de proposer des fonctionnalités si les besoins évoluent.<br/>
                    J'ai pu appliquer et développer cette compétence tout au long de mes diverses expériences professionnelles.</p>`
                },
                {
                    type: 'softSkill',
                    name: 'Communication',
                    synopsis: "Partager, présenter, recevoir",
                    detail: `
    
	<p>Au fur et à mesure des années, les <b>responsabilités</b> d'un développeur évoluent, j'ai déjà pu constater que les attentes d'un stagiaire présent pour quelques mois ne sont pas les mêmes qu'un ingénieur. Outre les compétences techniques inaliénables au métier, les compétences en communication des développeurs jouent de plus en plus dans la balance dû aux nécessités de satisfaire les clients avec un produit de qualité et la nécessité de <b>communiquer avec son équipe</b> afin d'éviter les quiproquos.
</p>
<p>
	Les compétences en communication sont nombreuses et diverses, mais voici pour moi les plus importantes dans mon métier : la communication verbale avec la <b>vulgarisation</b>, la<b> capacité empathique</b>, l'intégration des retours et la compréhension du besoin à travers <b>l'écoute</b> active.
<p>
</p>	
	L'empathie est un mot chargé et est une compétence assez difficile à présenter dans un contexte professionnel dû à sa présence dans chaque aspect d'une discussion en arrière-plan. Cependant, je la résumerai en une capacité à <b>comprendre et ressentir </b>l'état actuel de mes interlocuteurs. 
    Ce qui m'amène ensuite à mieux <b>analyser leurs attentes</b> et pouvoir les mettre en œuvre d'une façon qui leur correspond.<br/>
    Par exemple, je me suis déjà heurté à la situation où un client n'osait pas donner un avis négatif sur l'implémentation d'une fonctionnalité. 
    Après l'avoir remarqué, j'ai pu comprendre sa situation et lui proposer une implémentation alternative à celle actuelle.
</p>
<p>
La communication verbale est en soit très large, mais l'aspect qui me démarque est ma <b>démarche naturellement didactique</b>. 
En effet, je commence le plus souvent par redonner le contexte de la discussion en mettant au clair quels sont les attendus et communiquer les informations nécessaires à la résolution du problème. 
Cela passe souvent par ma capacité à <b>résumer et vulgariser</b> mon travail. 
J'ai souvent été amené à présenter mon travail ou demander des conseils auprès de personnes n'ayant que peu, voire aucune, connaissance de mon projet actuel ou même de mon métier.</p>
<p>	En résumé, l'utilisation de mes compétences en communication me permet une meilleure compréhension des clients, de leurs besoins, et donc permet de produire des produits de meilleure qualité.</p>
`
                },
                {
                    type: 'softSkill',
                    name: 'Adaptabilité',
                    synopsis: "S'informer, évoluer, s'adapter",
                    detail: `
<p>	Le monde professionnel de l'informatique est un espace où le <b>changement est constant</b>, les métiers évoluent vite, les techniques sont mises à jour fréquemment et les besoins des entreprises évoluent sans cesse. C'est là qu'entre en jeu une compétence nécessaire pour continuer à travailler dans ce milieu :  <b>l'adaptabilité</b>. Un développeur incapable de se tenir informer et de se former aux dernières avancées dans le domaine étudier sera contre-productif pour une équipe. L'adaptabilité va se manifester de différentes manières. Ses principales formes dans le monde de l'informatique vont être autour de la capacité à <b> faire évoluer son avis</b> sur différents sujets, à  <b>se mettre à jour</b> sur les techniques du métiers et  <b>s'adapter à des contraintes</b> organisationnelles.
	</p><p>
	Dans mon parcours professionnel, j'ai déjà pu maintes fois mettre cette compétence à l'épreuve :<br/>Un des premiers exemples est de devoir s'adapter aux contraintes technologiques des projets. Lors de mes projets en école, les langages de programmations étaient souvent différents. D'un autre côté lors de mes stages ou alternance les langages utilisés étaient encore différents de ceux les plus étudié à l'école, ce qui m'a demandé de me  <b>former </b> avec les différentes sources disponibles. <br/>
	Un autre exemple se situe dans les retours clients ou de l'équipe. J'ai déjà pu prendre en compte des avis allant à l'encontre de ma vision du futur d'un logiciel et de ce qui était prévu dans le cahier des charges. Ces avis ont demandé de grosses restructurations des fonctionnements en cours et ont donc demandé beaucoup d'effort pour les mettre en place.</p>
`
                },
            ],
            projects: [
                {
                    name: 'Open Street Map Tile Generator',
                    image: '',
                    tags: [
                        'Python',
                        'QtQML',
                        'OpenStreetMap',
                        'Cartographie'
                    ],
                    content: `Open Street Map Tile Generator est un logiciel permettant la génération de cartes basées sur des données OpenStreetMap`,
                    details: `<p>Lors de mon stage chez Thales et en début d'alternance, j'ai pu réaliser le développement d'un outil de cartographie à base de données OpenStreetMap.</p>
                    <p>Au sein du service Simulation et Dimensionnement, l'utilisation de cartes est fréquente. Elles permettent aux utilisateurs de se repérer sur un plan tactique, 
                    ou bien d'aider à mettre en place des décors réalistes pour les simulations. Cependant, les outils classiques capables de fournir des cartes
                    tels que Google Maps, OpenStreetMap ou encore Géoportail ne fournissent pas d'accès pratiques aux cartes affichées dans le navigateur web.
                    De plus, ces dernières ne possèdent que peu d'options de personnalisations des informations affichées.</p>
                    
                    <p>Je n'avais moi-même aucune connaissance sur le sujet des données OpenStreetMap et du langage de programmation 
                    utilisé pour l'interface. Cependant, j'ai pu passer deux semaines en début de stage pour me familiariser à ce
                    nouvel environnement à l'aide des ressources en ligne et en mettant en place quelques essais d'interfaces qui me serviront
                    de base pour la suite du projet.</p>
                    
                    <p>L'application finale permet de générer des cartes et de modifier leurs styles en profondeur.
                     Que ce soit l'affichage des routes, des forêts, des arrêts de bus ou bien des données personnalisées, 
                     elles sont toutes affichables de différentes manières.<br/>
                    De plus, j'ai pu y ajouter, lors de mon alternance, une fonctionnalité de recherche permettant
                     de trouver toutes les données présentes dans une zone et les mettre en valeur.</p>
                    `
                },
                {
                    name: 'Nouvel éditeur de scénario',
                    image: '',
                    tags: [
                        'Python',
                        'QtQML',
                        '3D',
                        'Simulation'
                    ],
                    content: `Le Nouvel édtieur de scénario est un logiciel permettant le déplacement d'entités dans un environnement 3D`,
                    details: `<p>
                    Lors de mon apprentissage à Thales, j'ai été amené à travailler sur le Nouvel éditeur de scénario. Le développement de ce logiciel avait déjà été commencé précédemment par un stagiaire avant mon arrivée. Ce qui m'a permis de ne pas avoir à mettre en place toutes les briques logicielles de base.<br/>
                    Le service possède un simulateur 3D permettant de faire vivre diverses entités dans un espace. Il possède aussi un directeur de scénario permettant de jouer des scénarios, c'est-à-dire faire se déplacer et agir des entités lorsque certains triggers (déclencheurs) sont activés; ainsi qu'un éditeur de scénario permettant de modifier ce dernier. Cependant, ces scénarios ne sont pas réactifs et se jouent toujours de la même façon.
                    </p><p>
                    Le service souhaite désormais avoir accès à des scénarios pouvant avoir des changements au cours du scénario. Par exemple, un utilisateur prend le contrôle d'une entité et sera amené à déclencher différents triggers qui affectent le déroulement des scénarios lancés.<br/>
                    Le but du développement du Nouvel éditeur de scénario est à la fois de proposer un directeur de scénario capable de diriger des scénarios dit “événementiels” et de produire une interface pour créer ces scénarios.<br/>
                        Mon apprentissage n'a pas pour but de fournir un produit fini mais de l'avancer le plus possible en ajoutant toutes les fonctionnalités nécessaires à une utilisation de base et plus si possible.
                    </p><p>
                        Aujourd'hui, le Nouvel éditeur de scénario est opérationnel et présente de nombreuses fonctionnalités secondaires que j'ai pu mettre en place afin de rendre l'expérience utilisateur la plus fluide et agréable telles que le ctrl Z, des gizmos permettant de repérer les unités ou la prévisualisation des entités. Malgré cela, et finalement comme prévu depuis le début, de nombreuses fonctionnalités peuvent encore être ajoutées.<br/>
                        Lors de ce projet j'ai pu me rendre compte, une fois de plus, de l'importance de la communication et des retours réguliers. Je pense ne pas avoir fait assez de demande de retours sur les premiers mois qui m'ont amené à parfois partir sur de mauvaises pistes ou même me retrouver à créer des briques logicielles complexes que le service possédait déjà. <br/>Un de mes grands regrets est d'avoir mis en place des affichages en 2D pour des trajectoires qui donnent une approximation souvent trompeuse des perspectives. Cet affichage était cependant demandé par le service pour pouvoir juger de la nécessité d'afficher les trajectoires en 3D qui demanderait un temps de développement beaucoup plus long. Cela a été un compromis pour que je puisse ajouter plus de fonctionnalités, mais je resterai grandement insatisfait de cette partie.<br/>
                    D'un autre côté, je suis quand même heureux de constater l'énorme différence en nombre de fonctionnalités disponibles et en termes d'amélioration de l'expérience utilisateur par rapport à ma première prise en main de cet éditeur.
                    </p>

                    `
                },
                {
                    name: 'Bot de discussion discord',
                    image: '',
                    tags: [
                        'JavaScript',
                        'Discord',
                        'discord.js',
                        'Chatbot'
                    ],
                    content: `Un bot utilitaire aux discussions`,
                    details: `
                    <p>Mes amis et moi possédons un serveur discord permettant à travers différents salons de discuter aussi bien à l'écrit qu'à l'oral. De nombreux serveurs intègrent des bots afin d'interagir avec la communauté et nous nous demandions avec nos amis qu'est-ce que nous pourrions faire en avoir un personnalisé. J'ai donc pris cette responsabilité car je n'avais encore jamais implémenté une application de ce genre.
                    </p><p>
                        Le bot portant le nom de Bot Jean-Michel avait pour but d'avoir quelques fonctionnalités utiles au jour le jour comme des calculs simples, des choix aléatoires entre plusieurs propositions ou encore de partager des phrases pré-enregistrées.
                        <br/>La mise en place d'un bot de discussion inclut aussi qu'il soit disponible en permanence, mais ne disposant que de peu de fonds il a fallu trouver une solution pour l'héberger à faible coût. 
                        </p><p>
                        Après quelques recherches sur les différentes méthodes de création, je me suis décidé sur Discord.js : une librairie permettant le développement de bots en JavaScript. Du côté hébergement, j'ai opté pour un nano-ordinateur de type Rapsberry Pi que je pourrai garder connectée à mon réseau. La population du discord étant d'une dizaine de personnes, la carte électronique ne devrait pas avoir de problème à supporter la charge.
                    <p></p>
                        Grâce à des tutoriels en ligne, le développement des premières fonctionnalités à pu être réalisé rapidement, permettant ainsi de tirer un nombre aléatoire et d'envoyer des phrases pré-enregistrées. L'hébergement permanent à cependant demander plus de temps avec l'installation de l'environnement de la Rapsberry Pi dû à mon manque de connaissances sur les distributions Linux.
                        <br/>Une fois le problème de l'hébergement réglé, j'ai pu reprendre le développement et ajouter les fonctionnalités manquantes puis rajouter des petits jeux au fur et à mesure permettant d'obtenir une monnaie virtuelle qui peut ensuite être utilisée pour faire des paris.
                    </p><p>
                        Aujourd'hui, je garde un avis mitigé sur ce projet. Le bot est au final très peu utilisé car la plupart des personnes n'y voit pas forcément de valeur ajoutée. D'un autre côté, il m'aura quand même permis de développer ma compréhension de ce type d'application, le fonctionnement des nano-ordinateurs et des méthodes d'hébergement sur serveur linux.
                    </p>
                    
                    `
                }
            ],
            about: [
                {
                    icon: 'user',
                    title: 'Qui suis-je ?',
                    content: `
<p>Je m'appelle Audran COLLIGNON, j'ai ${DateTime.fromObject({ year: 1997, month: 7, day: 18 }, { zone: 'Europe/Paris' }).diffNow().negate().toFormat('yy')} ans et je suis <b>expert logiciel</b>.
Passionné par le développement de logiciel de A à Z, je souhaite continuer à me spécialiser sur ce sujet.</p>
Utilisateur d'un ordinateur et joueur de jeux vidéo depuis plus de quinze années, j'ai connu nombre d'interfaces et méthodes permettant d'atteindre <b>une véritable fluidité</b> dans l'utilisation. Grâce à ces expériences, couplées à <b>mes études et mes expériences professionnelles</b>, je possède maintenant les compétences pour produire des logiciels et interfaces utiles et propres.
`
                },
                {
                    icon: 'heart',
                    title: 'Hobbies et passions',
                    content: `
<p><b>Chant, Musique</b> : Je poursuis des études de musiques sur mon temps libre avec mon instrument de prédilection qu'est ma voix. Chanter est pour moi est un moyen d'expression important dû à cette capacité de narration à la fois par la mélodie et par les paroles.</p>
<p><b>Manga, Animation Japonaise</b> : Le format dessin (ou 3d) étant leur base, les possibilités de thèmes, réalisation et mise en valeur permettent des récits atypiques et d'ainsi nous faire ressentir de nombreuses émotions uniques en leur genre.</p>
<p><b>Jeux vidéo</b> : Passion de longue date, voir son évolution et ses histoires racontées de plus en plus grandiose est une joie que j'aime partager et continue d'apprécier.</p>`
                },
            ],
            contact: {
                links: [
                    {
                        icon: 'github',
                        iconColor: 'black',
                        url: 'https://github.com/AudranC',
                        username: 'AudranC',
                        tooltipTitle: 'Voir mon GitHub'
                    }
                ]
            },
            path: [
                {
                    from: DateTime.fromObject({ year: 2022, month: 9 }),
                    title: 'Apprenti Ingénieur Simulation (alternance de deux ans)',
                    location: '<a href="https://www.thalesgroup.com/fr" target="_blank">THALES</a> - LAS Service Simulation et Dimensionnement, Élancourt (78)',
                    content: "Suite du développement d'une IHM en Python QtQML pour la génération de feuilles de styles OpenStreetMap, génération de tuiles cartographiques OpenStreetMap (6 mois)<br/>Reprise d'un outil d'édition de scénario militaire en Python QtQML (18 mois)"
                },
                {
                    from: DateTime.fromObject({ year: 2021, month: 11 }),
                    to: DateTime.fromObject({ year: 2022, month: 4 }),
                    title: 'Développeur logiciel (stage)',
                    location: '<a href="https://www.thalesgroup.com/fr" target="_blank">THALES</a> - LAS Simulation et Dimensionnement, Élancourt (78)',
                    content: "Développement d'une IHM en Python QtQML pour la génération de feuilles de styles OpenStreetMap<br/>Génération de tuiles cartographiques OpenStreetMap"
                },
                {
                    from: DateTime.fromObject({ year: 2019 }),
                    title: 'Expert en Ingénierie du Logiciel',
                    location: '<a href="https://www.esiea.fr/" target="_blank">ESIEA</a>',
                    content: "<p>Titre RNCP certifié niveau 7</p>"
                },
                {
                    from: DateTime.fromObject({ year: 2017, month: 9 }),
                    to: DateTime.fromObject({ year: 2018, month: 1 }),
                    title: 'Développeur logiciel, Intégrateur (alternance)',
                    location: 'PreKre - Viroflay (78)',
                    content: "Développement d'une IHM web pour visualisation de données d'un gant connecté en Java/JavaScript (jQuery)"
                },
                {
                    from: DateTime.fromObject({ year: 2017, month: 9 }),
                    to: DateTime.fromObject({ year: 2018, month: 3 }),
                    title: "Bachelor Développeur Nouvelles Technologies",
                    location: '<a href="https://ensup.eu/" target="_blank">ENSUP</a>',
                    content: "",
                },
                {
                    from: DateTime.fromObject({ year: 2017, month: 2 }),
                    to: DateTime.fromObject({ year: 2017, month: 4 }),
                    title: 'Développeur logiciel (stage)',
                    location: '<a href="https://www.thalesgroup.com/fr" target="_blank">THALES</a> - LAS Service des bancs, Élancourt (78)',
                    content: "Développement d'une IHM en Python QT pour la visualisation de courbes<br/>Étude comparative de l'IHM avec des solutions concurrentes de visualisation de courbes, documentation technique de l'IHM"
                },
                {
                    from: DateTime.fromObject({ year: 2016, month: 5 }),
                    to: DateTime.fromObject({ year: 2016, month: 7 }),
                    title: 'Développeur logiciel (stage)',
                    location: '<a href="https://www.thalesgroup.com/fr" target="_blank">THALES</a> - LAS Service des bancs, Élancourt (78)',
                    content: '<p>Développement d\'une IHM en Python QT pour la visualisation d\'images</p>'
                },
                {
                    from: DateTime.fromObject({ year: 2015, month: 9 }),
                    to: DateTime.fromObject({ year: 2017, month: 6 }),
                    title: 'BTS Services Informatiques aux Organisations',
                    location: '<a href="https://lyc-vilar-plaisir.ac-versailles.fr/" target="_blank">Lycée Jean Vilar</a>',
                    content: '<p>Option Solutions Logicielles et Applications Métiers (SLAM)</p>'
                },
                {
                    at: DateTime.fromObject({ year: 2015, month: 6 }),
                    title: 'Baccalauréat scientifique',
                    location: '<a href="https://lyc-mansart-st-cyr.ac-versailles.fr/" target="_blank">Lycée Mansart</a>',
                    content: 'Baccalauréat scientifique avec spécialité Science de l\'Ingénieur.'
                }
            ],
            expertises: [
                {
                    icons: [
                        '/assets/icon/c--4.svg',
                        '/assets/icon/dot-net-core-7.svg',
                    ],
                    title: 'Environnement .NET',
                    content: `
<p>Depuis maintenant ${DateTime.fromObject({ year: 2019, month: 9 }, { zone: 'Europe/Paris' }).diffNow().negate().toFormat('y')} ans,
je travaille régulièrement avec le langage <b>C#</b>. Je l'ai notamment utilisé à travers l'environnement <b>.NET Core</b> pour développer
des applications backend avec le framework <b>ASP.NET Core</b>.</p>
<p>J'ai pour habitude de développer sur <b>Visual Studio</b>. Je possède maintenant une bonne maîtrise de cet IDE
et des différents outils qu'il propose pour aider au développement et au débogage.</p>`
                },
                {
                    icons: [
                        '/assets/icon/angular-icon-1.svg',
                        '/assets/icon/vue-js-1.svg',
                        '/assets/icon/typescript.svg',
                        '/assets/icon/nodejs-1.svg'
                    ],
                    title: 'Autour de JavaScript',
                    content: `
Tout au long des mes études de développement informatique, et durant mes expériences professionnelles, j'ai souvent travaillé
avec l'écosystème autour de <b>JavaScript</b>. J'ai eu l'occasion de développer des applications backend avec <b>Node.js</b>,
mais aussi beaucoup de SPA sur de l'<b>Angular 12 et +</b> et du <b>Vue.js</b>, avec l'utilisation de <b>TypeScript</b>.`
                },
                {
                    icons: [
                        '/assets/icon/microsoft-sql-server-1.svg',
                        '/assets/icon/postgresql.svg',
                        '/assets/icon/mysql-3.svg'
                    ],
                    title: 'Côté base de données',
                    content: `
<p>Pendant mes études, j'ai eu l'occasion d'apprendre le fonctionnement du <b>SQL</b>,
notamment avec l'utilisation des bases de données que sont <b>MySQL</b> et <b>PosgreSQL</b>.</p>
<p>À la suite, pendant ma formation, j'ai beaucoup travaillé avec <b>Microsoft SQL Server</b>
où j'ai pu utiliser des fonctionnalités avancées du langage.</p>
<p>J'ai utilisé les interfaces que sont <b>pgAdmin</b> et <b>SQL Server Management Studio</b>
pour communiquer avec les bases de données.</p>`
                },
                {
                    icons: [
                        '/assets/icon/git.svg',
                        '/assets/icon/github-icon-1.svg',
                        '/assets/icon/gitlab.svg'
                    ],
                    title: 'Workflow',
                    content: `
<p>J'ai pris pour habitude que tous les projets sur lesquels je travaille aient un <b>Git</b>.
Je suis donc parfaitement rodé à l'utilisation de cet outil : utilisation des branches,
travail en parallèle, release sur master/develop, merge conlict.</p>
<p>J'utilise couramment les plateformes que sont <b>GitHub</b> et <b>GitLab</b> pour héberger mes projets
et les dépôts d'entreprise.</p>`
                },
                {
                    icons: [
                        '/assets/icon/stack-overflow.svg',
                        '/assets/icon/google-g-2015.svg',
                        '/assets/icon/openai-2.svg'
                    ],
                    title: 'Recherche et documentation',
                    content: `
<p>Le milieu de développement informatique est déjà très complexe et il continue d'évoluer.
Il est évidemment que personne ne peut tout connaître. Pour s'en sortir, il est donc important
de savoir se documenter, mais aussi de chercher aux bons endroits pour trouver les meilleures
solutions aux problèmes que l'on rencontre. Mes meilleurs amis dans ce cas-là sont <b>Stack overflow</b>,
Google et les pages de documentation.</p>`
                }
            ]
        };

        subscribe.next(data);
    });

    public override getData(): Observable<AppData> {
        return this._data;
    }
};
