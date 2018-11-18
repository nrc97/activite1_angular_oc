import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts=[
    {
      title:"Khalil al-Wazir",
      content:"Khalil al-Wazir (خليل الوزير), né en 1936 à Ramleh en Palestine britannique et mort le 16 avril 1988 à Tunis, est un dirigeant arabe palestinien, l'un des fondateurs du Fatah, membre de son comité central, numéro deux de l'OLP[1] et chef de son aile militaire.",
      loveIts:0,
      created_at:new Date(2018,11,17,20,11)
    },
    {
      title:"Ouderkerk aan den IJssel",
      content:"Ouderkerk aan den IJssel est un village situé dans la commune néerlandaise de Krimpenerwaard, dans la province de la Hollande-Méridionale. Le 1er janvier 2008, le village comptait environ 5 700 habitants.",
      loveIts:0,
      created_at:new Date(2018,11,17,20,35)
    },
    {
      title:"Langues nigéro-congolaises",
      content:"Les langues nigéro-congolaises (ou Niger-Congo selon la terminologie anglo-saxonne) constituent la plus étendue des familles de langues africaines, tant en répartition géographique qu'en nombre de locuteurs. La très grande majorité des langues d'Afrique subsaharienne appartient à ce groupe. Il s'agit aussi de la plus vaste des familles de langues dans le monde[1], avec 1 545 langues, soit 21 % des langues du monde[2], parlées par plus de 430 millions de locuteurs représentant 7 % de la population mondiale, dont la moitié sont parlées par moins de 28 000 locuteurs[1]. Une caractéristique fréquente des langues nigéro-congolaises est l'emploi d'un système de classes nominales.",
      loveIts:0,
      created_at:new Date(2018,11,17,21,17)
    },
    {
      title:"Les Apprentis Jedi",
      content:"Les Apprentis Jedi (titre original : Jedi Apprentice) est un série de vingt romans, tous écrits par Jude Watson, à l'exception du premier volume, Premières Armes qui lui a été écrit par Dave Wolverton. En France, les livres sont édités chez Pocket Junior et traduits par Patrick Eris. Ces romans sont placés dans l'univers étendu de Star Wars",
      loveIts:0,
      created_at:new Date(2018,11,17,22,0)
    },
    {
      title:"Almanach 1947",
      content:"Almanach 1947 est un album spécial du journal Spirou paru le 7 décembre 1946 en prévision des fêtes de Noël. Il est publié par les éditions Dupuis pour tester ses auteurs Belges qui doivent à terme remplacer les séries américaines. André Franquin y publie l'histoire Spirou et le Tank sa première qui y est dessinée. La série Lucky Luke paraît pour la première fois sous la plume de Morris. Eddy Paape reprend pour la première fois Jean Valhardi[1].",
      loveIts:0,
      created_at:new Date(2018,11,18,0,25)
    },
    {
      title:"Joseph de Saxe-Altenbourg",
      content:"Joseph-Frédéric de Saxe-Altenbourg, né le 27 août 1789 à Hildburghausen, décédé le 25 novembre 1868 à Altenbourg, fut duc de Saxe-Altenbourg de 1834 à 1848 (il abdique en faveur de son frère).",
      loveIts:0,
      created_at:new Date(2018,11,18,1,8)
    },
    {
      title:"Monica Valvik-Valen",
      content:"Grethe Monica Eikild Valvik-Valen, née Valen, le 15 septembre 1970 à Porsgrunn, est une coureuse cycliste norvégienne. Elle a notamment été championne du monde sur route en 1994. Sa sœur Anita a également été cycliste professionnelle.",
      loveIts:0,
      created_at:new Date(2018,11,18,1,15)
    },
    {
      title:"Alouette de Clot-Bey",
      content:"L'Alouette de Clot-Bey (Ramphocoris clotbey) est une espèce de passereau. Comme toutes les alouettes elle appartient à la famille des Alaudidae. C'est la seule espèce du genre Ramphocoris.",
      loveIts:0,
      created_at:new Date(2018,11,18,2,41)
    },
    {
      title:"Accessibilité du web",
      content:"L'accessibilité du web est la problématique de l'accès aux services et contenus en ligne non seulement pour les personnes handicapées et les seniors, mais aussi de manière plus générale pour tous les utilisateurs qui ne disposent pas du confort offert par un ordinateur de bureau situé dans une pièce tranquille[W3C 1]. En effet, son application concerne également les utilisateurs non handicapés placés dans des situations moins confortables comme avec un téléphone mobile, une tablette[W3C 2]… ou placés en situation particulière de bruit, de dimension d’affichage, etc. Définie par des normes techniques établies par la Web Accessibility Initiative (WAI) du World Wide Web Consortium (W3C), elle nécessite un traitement tout au long du cycle de vie d'un site web, par l'ensemble de ses acteurs, via des méthodes d'applications, des référentiels métiers et une démarche de suivi. Bien qu'elle soit une composante et un levier d'amélioration de leur qualité globale, le degré d'accessibilité effectif des sites web reste très faible en 2008[Note 1].",
      loveIts:0,
      created_at:new Date(2018,11,18,6,34)
    },
    {
      title:"D'où viennent mes postes",
      content:"Mes posts ont été pris par copier coller, aléatoirement sur Wikipedia. J'en décline donc la paternité :)",
      loveIts:0,
      created_at:new Date(2018,11,18,10,19)
    }
  ];
}
