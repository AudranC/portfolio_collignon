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
                    synopsis: "Le but premier de l'architecture logicielle est de produire une <b>base de code solide, claire et organisée</b> rendant ainsi nos futurs produits bien plus maintenable et plus <b>stable</b>.",
                    detail: `
<p>Cette compétence s'est pour moi développée au fur et à mesure de mes études et de mes expériences professionnelles. 
Pouvoir obtenir une architecture fiable est un processus demandant beaucoup de <b>théorie</b> qu'il faudra ensuite allié à la pratique.<br/>
Afin de produire l'architecture la plus adaptée au produit, il faudra d'abord avoir une bonne vue d'ensemble du sujet grâce aux <b>spécifications des fonctionnalités</b> nécessaires. 
Il faudra ensuite passer par une <b>étape de réflexion où schématiser les composants</b> et leurs interactions sera utile. 
Si nécessaire, l'usage de <b>prototype</b> permettra d'étudier les différentes possibilités. 
Cependant, il faut garder en tête qu'une partie de cette architecture pourra être amenée à évoluer avec de nouvelles demandes de fonctionnalités, d'où la nécessité de bases solides dès la première ébauche du produit.</p>`
                },
                {
                    type: 'hardSkill',
                    name: 'Lorem ipsum',
                    synopsis: "",
                    detail: `
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`
                },
                {
                    type: 'hardSkill',
                    name: 'Lorem ipsum',
                    synopsis: "",
                    detail: `
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`
                },
                {
                    type: 'softSkill',
                    name: 'Compréhension du besoin',
                    synopsis: "Anticiper les futurs besoins et de les proposer à l'avance",
                    detail: `
                    <p>Un des plus grands aspects du travail de développeur est de répondre au besoin exprimé. Cependant, le besoin est souvent assez général et à besoin d'être étayé. Grâce à mes multiples expériences de projets et stages, ma compréhension du besoin me permet d'anticiper les futurs besoins et de les proposer en avance.</p>
                    <p><h3>Outil de communication</h3> 
                    Cette compétence est omni-présente dans le développement d'interfaces logicielles où l'<b>expérience utilisateur</b> est cœur de métier. 
                    Cela va de paire avec une communication-client régulière afin de récupérer des <b>retours d'expériences</b> tout au long de la phase de développement. 
                    Ces retours permettront de réajuster les fonctionnalités si les besoins évoluent.<br/>
                    J'ai pu appliquer et développer cette compétence tout au long de mes diverses expériences professionnelles.</p>`
                },
                {
                    type: 'softSkill',
                    name: 'Lorem ipsum',
                    synopsis: "",
                    detail: `
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`
                },
                {
                    type: 'softSkill',
                    name: 'Lorem ipsum',
                    synopsis: "",
                    detail: `
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`
                },
            ],
            projects: [
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
