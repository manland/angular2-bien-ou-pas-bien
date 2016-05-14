import {bootstrap} from "@angular/platform-browser-dynamic";
import {Component} from "@angular/core";
import {Talk, TalkModel} from "./Talk/Talk";

@Component({
    selector: 'my-app',
    template: `<talk *ngFor="let talk of talks" [talk]="talk"></talk>`,
    directives: [Talk]
})
export class App {

    talks: Array<TalkModel> = [
        {
            speaker: {avatar: 'http://www.gravatar.com/avatar/c6b552a4cd47f7cf1701ea5b650cd2e3'},
            title: 'AngularJS 2 : bien ou pas bien?',
            description: `Alors que Google nous dévoile sa nouvelle mouture d'Angular, je vous propose de découvrir quelques un de ses nouveaux concepts et ainsi de vous faire une idée par vous même. Devez-vous migrer votre application ? Devez-vous commencer une nouvelle application avec Angular2 ? Où en est le fameux duel React vs Angular ? Venez trouver une partie des réponses à ces questions.`
        },
        {
            speaker: {avatar: 'http://www.lirmm.fr/~sallaberry/img/lisb1.JPG'},
            title: 'Présentation du master MIASHS',
            description: `Le numérique transforme tous les secteurs d’activité et impacte la compétitivité des organisations. Ces dernières sont désormais confrontées à d’importants volumes de données hétérogènes et difficiles à manipuler. Une organisation doit savoir traiter « intelligemment » les données SHS qu’elle produit, afin d’évaluer ses contextes passé, actuel et à venir. Il ne s’agit pas d’une simple collecte d’informations mais de la capacité à cibler, ingérer, transformer, synthétiser des données et organiser, diffuser, visualiser de nouvelles connaissances. La maîtrise des outils et des méthodes permettant d’exploiter les données pour la prise de décision devient un enjeu crucial, dans de multiples secteurs économiques concernés par le savoir et la connaissance. L’objectif du Master est de former des data scientists spécialisés dans les analyses quantitatives. Son format sous la forme de l’alternance (2 semaines de cours/2 semaines en entreprise) est particulièrement adapté au tissu économique local et national des petites et moyennes entreprises.`
        },
        {
            speaker: {avatar: 'http://www.lirmm.fr/~sallaberry/img/lisb1.JPG'},
            title: 'Visualisation analytique',
            description: `La visualisation d'informations est un domaine informatique pluri-disciplinaire dont l'objet d'étude est la représentation visuelle de données, principalement abstraites, via une interface graphique. Par l'intermédiaire de différentes interactions avec une ou plusieurs représentations visuelles, l'utilisateur doit pouvoir acquérir de nouvelles connaissances sur ses données et mieux identifier et comprendre les relations entre elles. La visualisation analytique est quant à elle la science qui étudie le raisonnement analytique basé sur des interfaces visuelles. A travers plusieurs exemples, nous verrons comment la combinaison de méthodes d'analyse automatique et de représentations graphiques évoluées permettent d'extraire des informations pertinentes à partir de données brutes.`
        }
    ];

    constructor() {
    }

}


bootstrap(App, []);