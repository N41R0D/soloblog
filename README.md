# soloblog
TP solo; création d'un blog Back: Symfony/Front: React

Notes pour Olivier sur ce qui a été fait:

Coté back :

    - entité user et article
    - route login avec création du token
    - datafixtures
    - Les route ne sont pas sécurisé pour le moment car le front n'applique pas token de manière stable pour le moment

Coté front : 

    - Page d'accueil (affichage d'une liste d'article sous form de card)
    - Page login (Connexion qui fonctionne, le token est censé s'enregistrer dans le local storage, et le tocker est censé s'appliqué a toutes les nouvelles requete)
    - Page New article (formulaire qui est bloqué par le fait que ma colonne categorie de la bdd attend un json et mon input select retourne une string)
    - Page manage new (censé permettre de voir toute les news et supprimer celle voulu, le lien de cette page est cencé n'etre affiché que si on est connecté en tant qu'admin, mais pas encore stable)
    - Pas mal d'étape son aussi bloqué par des history.push que je n'ai pas réussi a faire marché
    - Page article (affiche les information d'un article précis)

## BDD
---
Vérifier dans le fichier .env la variable DATABASE_URL pour qu'elle corresponde à votre base de données.

# Initialisation du projet

config la bdd dans le .env
```bash
composer install

npm install

php bin/console doctrine:database:create
```

Configurer la BDD dans le .env
```bash
symfony server:start
# url de test => localhost:8000/api
# Si le https ne fonctionne pas, lancer la commande suivante
symfony server:ca:install
#et
npm run dev-server
#Pour le front
```

config api platform
packages => api_platform.yml
routes => api_platform.yml

## Création simplifiée
---
### Créer une entité
```
symfony console make:entity
```
### Créer une migration
```
symfony console make:migration
```
### Lancer la migration
```
symfony console doctrine:migrations:migrate
```
### Commande pour créer une fixture
```
symfony console make:fixtures
```
### Lancer les fixtures
```
symfony console doctrine:fixtures:load
```
