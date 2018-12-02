import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts=[
    {
      title:"Basilique Notre-Dame de la Paix",
      content:"La basilique Notre-Dame de la Paix de Yamoussoukro est l’édifice religieux catholique le plus grand au monde. Son apparence rappelle celle de la basilique Saint-Pierre à Rome. Située à Yamoussoukro, capitale de la Côte d'Ivoire, son emplacement a été choisi par le premier président du pays, Félix Houphouët-Boigny, en 1983. Le livre Guinness des records l'a reconnu en 1989 comme l'édifice religieux chrétien le plus large au monde (150 m de largeur contre 115 m pour la basilique Saint-Pierre). La basilique est aujourd'hui encore un lieu fervent de la foi catholique en Afrique.",
      loveIts:0,
      created_at:new Date(2018,11,17,20,11)
    },
    {
      title:"Fondation Félix-Houphouët-Boigny",
      content:"La Fondation Félix Houphouët-Boigny pour la recherche de la paix est un institut de recherche sur les questions de la paix dont le siège se trouve à Yamoussoukro en Côte d'Ivoire.",
      loveIts:0,
      created_at:new Date(2018,11,17,20,35)
    },
    {
      title:"Crocodiles de Yamoussoukro",
      content:"Les crocodiles de Yamoussoukro peuplent le lac entourant le Palais présidentiel de Yamoussoukro, construit sur le site de N'Gokro. Il s'agit de crocodiles du Nil. Ces bêtes pèsent près d'une tonne chacune et mesurent jusqu'à six mètres de long. Elles peuvent faire des sauts de plusieurs mètres pour saisir la nourriture qui leur est donnée quotidiennement (à 17h00). Le lac et ses crocodiles sont une attraction touristique réputée dans toute l'Afrique de l'Ouest. Ils sont aussi et surtout associés à la puissance politique de Félix Houphouët-Boigny et leur prestige participe du symbolisme africain. Les Crocodiles de Yamoussoukro est aussi le titre d'une nouvelle de l'écrivain britannique Vidiadhar Surajprasad Naipaul, prix Nobel de littérature, dans le recueil Sacrifices (1984)",
      loveIts:0,
      created_at:new Date(2018,11,17,21,17)
    },
    {
      title:"Hôtel Président de Yamoussoukro",
      content:"L'hôtel Président de Yamoussoukro est un hôtel 5 étoiles situé dans la capitale administrative de la Côte d'Ivoire, en Afrique de l'Ouest. Il est bâti dans un parc fleuri de 25 hectares, à 1 km du centre ville et à 14 km de l’aéroport.",
      loveIts:0,
      created_at:new Date(2018,11,17,22,0)
    },
    {
      title:"Félix Houphouët-Boigny",
      content:"Félix Houphouët-Boigny (serait né Dia Houphouët le 18 octobre 1905 à N'Gokro (Yamoussoukro) selon la biographie officielle - mort le 7 décembre 1993), surnommé « le sage » ou même « Nanan Boigny » ou « Nanan Houphouet » ou encore « le Vieux » (au sens africain du terme), est le « père » de l’indépendance de la Côte d’Ivoire.",
      loveIts:0,
      created_at:new Date(2018,11,18,0,25)
    },
    {
      title:"Yamoussoukro",
      content:"Yamoussoukro, ville dont la population est estimée en 2010 à 300 000 habitants, dans la région des Lacs, située à 240 kilomètres au nord d'Abidjan, est la capitale politique et administrative de la Côte d'Ivoire depuis 1983, la capitale économique du pays étant Abidjan, ancienne capitale politique. Elle comptait environ 207 000 habitants en 2014. Il s'agit de la 5e ville la plus peuplée de Côte d'Ivoire, après Abidjan, Bouaké, Daloa et Korhogo. La prononciation correcte de Yamoussoukro, utilisée généralement par les Ivoiriens, est /jam.so.kʁo/. On entend plus rarement /ja.mu.so.kʁo/.",
      loveIts:0,
      created_at:new Date(2018,11,18,1,8)
    },
    {
      title:"Côte d'Ivoire",
      content:"La Côte d’Ivoire, en forme longue république de Côte d’Ivoire, est un pays membre de l’Union africaine. D’une superficie de 322 462 km2, elle est limitée au nord par le Mali et le Burkina Faso, à l’ouest par le Liberia et la Guinée, à l’est par le Ghana et au sud par l’océan Atlantique. La population est estimée à 26 594 750 habitants en 2017. La Côte d’Ivoire a pour capitale politique et administrative Yamoussoukro bien que la quasi-totalité des institutions se trouvent à Abidjan; Abidjan est son principal centre économique. Bien qu'elle a pour langue officielle le français, plus de 60 autres dialectes sont parlés au quotidien. Elle a pour monnaie, le franc CFA. Le pays fait partie de la CEDEAO.",
      loveIts:0,
      created_at:new Date(2018,11,18,1,15)
    },
    {
      title:"Réserve d'Aboukouamékro",
      content:"La réserve d'Aboukouamékro, parfois orthographiée Abokouamékro, en Côte d'Ivoire, dans la région des Baoulés, est située à 50 km au nord de Yamoussoukro, capitale du pays. Elle couvre une superficie de 20 400 ha, située dans la région des lacs. On y croise des rhinocéros blancs, des cobs defassa, des buffles, des bubales, des guib harnachés, des pintades sauvages, etc., au milieu de nombreuses autres espèces animales et d'un inoubliable panorama jalonné de rivières. Sa faune accueille aussi des espèces disparues en Côte d'Ivoire comme les girafes ou les rhinocéros.",
      loveIts:0,
      created_at:new Date(2018,11,18,2,41)
    },
    {
      title:"Région des Lacs",
      content:"La Région des Lacs est une ancienne région administrative de la Côte d'Ivoire, située au centre du pays et qui avait pour chef lieu la ville de Yamoussoukro. La région avait une superficie de 8 920 km2 et une population estimée à 713 884 habitants en 2012 (densité : 80,03 hab./km2). Cette région était peuplée en majorité par les Baoulés. Depuis le redécoupage administratif de 2011, la ville de Yamoussoukro est devenue district autonome, tandis que le reste de l'ancienne région des Lacs (départements de Tiébissou et Toumodi) a été rebaptisée région du Bélier, qui fait partie du nouveau district des Lacs. Le nouveau district des Lacs regroupe donc l'ensemble de l'ancienne région des Lacs moins le département de Yamoussoukro (devenu district autonome), plus l'ensemble de l'ancienne région du N'zi-Comoé (qui a servi de base à la formation de trois nouvelles régions au sein du district des Lacs).",
      loveIts:0,
      created_at:new Date(2018,11,18,6,34)
    },
    {
      title:"District des Lacs",
      content:"Le district des Lacs est une division administrative de la Côte d'Ivoire, issue du redécoupage administratif de 2011. Il est situé au centre-est du pays, entre les districts de la Vallée du Bandama au nord, du Zanzan au nord-est, de la Comoé à l'est, des Lagunes au sud, du Gôh-Djiboua au sud-ouest, du Sassandra-Marahoué et de Yamoussoukro (district autonome) à l'ouest. Avant le redécoupage de 2011, il existait une région des Lacs. Cette région se limitait en fait à l'espace géographique qui constitue les actuels région du Bélier et district autonome de Yamoussoukro. Le district des Lacs actuel regroupe en fait l'ensemble de l'ancienne région du N'Zi-Comoé, qui a fusionné avec la plupart de l'ancienne région des Lacs, de laquelle on a ôté le département de Yamoussoukro (devenu district autonome). Son chef-lieu est la ville de Dimbokro. La population est constituée à une très grande majorité de Baoulés, même si on compte aussi des Agnis (région du Moronou).",
      loveIts:0,
      created_at:new Date(2018,11,18,10,19)
    }
  ];
}
