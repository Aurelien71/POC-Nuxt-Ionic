#!/bin/bash
echo "🍦 Lancement du build de l'app ..."
echo "🏗️ Build du projet "
npx nuxi generate
echo "🔃 Sync des capacitors"
npx cap sync
echo "🏃 Lancement du projet"
eval "npx cap run android --livereload"