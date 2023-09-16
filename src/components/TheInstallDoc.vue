<script setup lang="ts">
import startScreenshot from '../assets/images/screenshots/2023-09-15_15.35.02.png';
</script>

<template>
  <div class="the-install-doc">
    <div class="the-install-doc__start">
      <img :src="startScreenshot" class="the-install-doc__start-background" />

      <div class="the-install-doc__overlay">
        <header class="the-install-doc__header">
          <h1 class="the-install-doc__title">Better Terra</h1>

          <span class="the-install-doc__sub-title">Documentation</span>
        </header>

        <div class="the-install-doc__server-info">
          <h2 class="the-install-doc__doc-title">Mods sur le serveur</h2>

          <p>
            <a href="http://89.87.26.86:25555/betterterra/resources/mods" target="_blank">Voir la liste des mods</a>
          </p>

          <p>
            <a href="http://89.87.26.86:25555/betterterra/resources/mods/zip" target="_blank">Téléchargez l'archive ZIP des mods</a>
          </p>
        </div>

        <div class="the-install-doc__steps">
          <h2 class="the-install-doc__doc-title">Règles & procédures à suivre</h2>

          <p>Installez <a href="https://apps.microsoft.com/store/detail/minecraft-launcher/9PGW18NPBZV5" target="_blank">Minecraft Launcher</a>.</p>

          <p>Le serveur est une version modidifée de Minecraft 1.20.1, grâce à <a href="https://modrinth.com/mod/fabric-api" target="_blank">Fabric</a>, qui va permettre d'installer les mods. Il faut que les mods soient donc à la fois compatible avec Minecraft 1.20.1 et Fabric.</p>

          <p><a href="https://fabricmc.net/" target="_blank">Suivre la documentation d'installation de Fabric.</a></p>

          <p>Une fois que Minecraft et Fabric sont installés, les mods peuvent être ajouté. Se référer au lien vers le .zip ci-dessus, contenant tous les mods nécessaires. Extraire les mods (ce sont eux aussi des .jar) dans le dossier "%USERPROFILE%\AppData\Roaming\.minecraft\mods". S'il n'existe pas, il faut le créer.</p>
        
          <p>
            Facultatif : installation des shaders. L'ajout de shaders permet de rendre le jeu plus beau. Ce mod n'est pas obligatoire et peut être différent de ce que les autres joueurs ont choisis. Nous avons choisis d'utiliser <a href="https://www.complementary.dev/">Complementary Reimaginated</a>, et sa procédure d'installation se trouve <a href="https://www.curseforge.com/linkout?remoteUrl=https%253a%252f%252fwww.complementary.dev%252fshaders%252f%2523download-section">ici</a>.
            <br />
            Pour activer les shaders dans le jeu, une fois lancé : Options > Options graphiques > Packs de shaders > Sélectionnez votre shaders.
          </p>

          <p>
            Facultatif : installation d'un ressource pack. Les ressources packs changent les textures du jeu. Ce mod n'est pas obligatoire et peut être différent de ce que les autres joueurs ont choisis. Nous utilisons <a href="https://www.curseforge.com/minecraft/texture-packs/faithful-32x" target="_blank">FaithFul 32x</a> ou bien <a href="https://www.curseforge.com/minecraft/texture-packs/stay-true" target="_blank">Stay true</a>, etc. C'est selon les préférences. Le .zip téléchargé doit être placé tel quel dans "%USERPROFILE%\AppData\Roaming\.minecraft\resourcepacks".
            <br />
            Pour activer le ressource pack dans le jeu, une fois lancé : Options > Packs de ressources > Cliquez sur votre pack a gauche (il se retrouvera à droite, parmi les ressource packs activés).
          </p>

          <p>Lancez Minecraft Launcher, à gauche du bouton "Jouer", cliquez sur la version, et choisissez "Fabric".</p>

          <p>Lancez le jeu, et connectez vous au serveur 89.87.26.86:25565. Attention, il faut d'abord demander les privilèges nécessaires auprès de l'administrateur, sinon le serveur refusera la connexion.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.the-install-doc {
  &__start {
    display: flex;
  }

  &__start-background {
    display: block;
    max-width: 100%;
    min-height: 100vh;
    width: auto;
    height: auto;
    object-fit: cover;
  }

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &__header {
    margin-top: 8%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #463D4B;
  }

  &__title {
    font-family: "minecraft-ten";
    font-size: 64px;
    text-align: center;
  }

  &__sub-title {
    font-family: "pro-font-windows";
    font-weight: bold;
    font-size: 24px;
    margin-top: 16px;
  }

  &__server-info {
    display: flex;
    gap: 8px;
    margin-top: 16px;
    flex-direction: column;
    align-items: center;
  }

  &__steps {
    display: flex;
    gap: 8px;
    margin-top: 16px;
    flex-direction: column;
    width: 85%;
    margin-left: auto;
    justify-content: center;
    align-items: center;
    margin-right: auto;
  }
}
</style>
