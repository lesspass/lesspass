<style>
    .lesspass-features {
        background-color: #0275D8;
    }

    .lesspass-features ul {
        line-height: 1.8em;
        font-size: 1.15em;
        margin: 0px auto;
        padding: 0px;
        list-style-type: none;
    }

    .lesspass-features ul li::before {
        content: "";
        display: inline-block;
        width: 24px;
        height: 24px;
        background: transparent url("../images/check.png") no-repeat scroll center center / 24px 24px;
        margin-right: 10px;
        position: relative;
        top: 4px;
    }

</style>
<template>
    <div class="lesspass-features p-y-3 m-t-2">

        <div class="container">
            <div class="col-lg-8 col-lg-offset-2">
                <h2>Vous devriez utiliser LessPass si :</h2>
                <ul>
                    <li>vous aimez l'open source</li>
                    <li>vous ne voulez pas mettre votre base de données de mots de passe sur le cloud</li>
                    <li>vous ne voulez pas installer des logiciels sur tous vos appareils</li>
                    <li>vous voulez un mot de passe différent pour chaque site</li>
                    <li>vous voulez que le mot de passe soit généré sur votre navigateur</li>
                </ul>
            </div>
        </div>
    </div>
</template>