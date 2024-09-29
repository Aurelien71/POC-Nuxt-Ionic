# POC-Nuxt-Ionic

Setup :

* ```
  npx nuxi@latest module add ionic
  ```
* Installer les extensions VS Code Ionic (va permettre de build l'appli avec l'IHM et déployer) et Ionic Snippet

Chose à savoir sur Ionic :

* Ionic apporte la notion de **Capacitor** qui permet de faire une application multi-Plateforme, et permet de récupérer les fonctionnalités natives de l'appareil (ex. position GPS, notification, camera)

  Setup des capacitors (déjà fait) :

  ```
  npx @ionic/cli integrations enable capacitor
  npx @ionic/cli capacitor add ios
  npx @ionic/cli capacitor add android

  ```
  L'installation des SDK sont nécessaires : [https://capacitorjs.com/docs/getting-started/environment-setup
  ](https://capacitorjs.com/docs/getting-started/environment-setup)

  Pour Android (Résumé de la doc) :

  * Installer Android Studio et installer la version Android API 34 (dernière version stable) (dans Tools -> SDK Manager)
  * **IMPORTANT** : Le SDK par défaut n'est pas localisé, vous pouvez définir le chemin dans les variables d'environnement ou aller dans *POC-NUXT-IONIC/android* et créer un fichier `local.properties` et ajouter cette ligne (remplacer *aure2* par le nom de votre session) *sdk.dir=C:*\\*Users*\\***aure2***\\*AppData*\\*Local*\\*Android*\\*Sdk*
  * Pour lancer le projet j'ai créer des script Bash d'automatisation pour tous faire d'un coup (installer un émulateur si vous en avez pas, mais normalement avec android studio il y a déjà des émulateur installés). Commande : `npm run android`

  Pour IOS (Renseigné vous sur la doc flemme je peux pas essayer, merci de compléter la doc quand ça fonctionnera, également adapter le script ios.sh qui n'a pas été testé) :
* Le SSR n'est pas compatible avec le déploiement Android/IOS, utilisé le CSR

  ```typescript
  export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    modules: ['@nuxtjs/ionic'],
    ssr: false
  })
  ```
* Utilisé de préférence les composants de Ionic (doc. [https://ionicframework.com/docs/components](https://ionicframework.com/docs/components)), normalement on peut les personnalisés en TailWind à vérifier
* Chaque page doit être contenu dans la balise  `<ion-page> `**!!!**
