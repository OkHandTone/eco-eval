Projet Express – Agenda d’événements sobres : Adrien Dupont, Martin Leroy

L'objectif de ce projet est de développer une application web éco-conçue permettant de consulter et ajouter des
événements à venir. L’application doit être légère, responsive, rapide et minimaliste.

pour cela, on s est posé plusieur question sur comment mettre en place cette agenda

Il nous fallait : 
  Un framework performant
  Un base de donnée légér est adapté 

Front-end
Pour créer l’interface utilisateur notre choix s’est porté sur Svelte pour plusieurs raisons :

Légèreté du framework par rapports aux autres : JS natif et peu de librairies
Courbe d’apprentissage plus facile que les autres frameworks
Intégration dans le meta-framework SvelteKit pour des fonctionnalités back-end que Svelte tout seul n’offre pas

Svelte n’est ni plus ni moins qu’un système de templating pour améliorer l’expérience développeur et permettre une meilleure extensibilité pour l’application.

Back-end
Le meta-framework SvelteKit offre des fonctionnalités comme l’interaction avec une base de données sans avoir besoin d’API et cela évite donc les latences entre serveurs ou applications en plus de tout simplifier.
Dans notre application le fichier +page.server.js est exécuté sur le serveur avant que celui-ci ne génère le HTML du fichier +page.svelte.
La fonction load charge la template avec les événements enregistrés tandis que la fonction action ajoute un événement quand la page est rafraîchie et le formulaire reçu de la même page.

Nous avons opté pour une solution de persistance avec une base de données et non le local storage du client afin de rendre les événements accessibles depuis n’importe quel appareil.
C’est MongoDB que nous avons retenue en raison de la simplicité du besoin (des documents avec 3 informations chacune). Une base de donnés SQL aurait été plus performante mais sur de la data aussi peu volumineuse la différence est négligeable.



Site pour la phase de 1er test : 

![image](https://github.com/user-attachments/assets/6b11cd39-0168-4003-8e87-b27cbc107479)
