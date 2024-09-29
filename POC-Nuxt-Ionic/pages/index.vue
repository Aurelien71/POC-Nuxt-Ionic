<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large">Nuxt Ionic</ion-title>
                </ion-toolbar>
            </ion-header>
            <div id="container">
                <ion-text>
                    <h1>Primary Text</h1>
                </ion-text>
                <ion-text color="secondary">
                    <h2 color="secondary">Secondary Text</h2>
                </ion-text>
                <ion-button router-link="/resources">Primary</ion-button>
            </div>
        </ion-content>
    </ion-page>
</template>

<style scoped>
#container {
    text-align: center;

    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
}

#container strong {
    font-size: 20px;
    line-height: 26px;
}

#container p {
    font-size: 16px;
    line-height: 22px;

    color: #8c8c8c;

    margin: 0;
}

#container a {
    text-decoration: none;
}
</style>