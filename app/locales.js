var I18n = require('vue-i18n');
var Vue = require('vue');

const locales = {
    "en": {
        "lang": "en",
        "headlines": {
            "title": "Open Source<br>Password Generator",
            "subtitle": "generate an unique password based on the information you provide"
        },
        "footer": {
            "built_by": "built by",
            "contribute": "contribute"
        },
        "passwordgenerator": {
            "who_are_you": "Email / Username",
            "what_is_your_secret": "Password",
            "where_are_you_going": "Site (e.g. twitter.com)",
            "copy": "Copy",
            "advanced_options": "Advanced options",
            "lowercase_options": "lowercase (a-z)",
            "uppercase_options": "UPPERCASE (A-Z)",
            "numbers_options": "numbers (0-9)",
            "symbols_options": "symbols (@&%?)",
            "counter": "Counter",
            "generated_password": "Generated password",
            "length": "Length"
        },
        "faq": {
            "q_works_in_future": "Will LessPass work in the future?",
            "a_works_in_future": "Hosting, domain's name and SSL certificate have been <strong>pre-paid until February 2017</strong>.",
            "q_trust": "I don't trust password manager such as LastPass or 1Password, why should LessPass be any different?",
            "a_trust_we": "<strong>Neither do we</strong>. Hence our approach",
            "a_trust_oss": "unlike other services LessPass is <strong>open-source</strong>. So its security can be audited",
            "a_trust_code": "code is a <a href='https://github.com/lesspass/core'>available on Github</a> so you can <strong>install it on your own</strong> computer or corporate server",
            "a_trust_tracking": "we don't like being tracked, so <strong>NO third-parties</strong> are used site/app (e.g. no <i>Google Analytics</i>, <i>Facebook</i>, etc.)",
            "a_trust_client_side": "password generation is your business thus done <strong>entirely client-side</strong>",
            "a_trust_online": "<em>online mode</em> is here to suggest <var>email</var> and <var>site</var>, <i>i.e.</i> store only that",
            "source_code": "Audit source code",
            "q_make_it_safer": "How can I make LessPass even safer?",
            "a_make_it_safer_private": "Use the <strong><a href='https://en.wikipedia.org/wiki/Privacy_mode'>privacy mode</a></strong> of your browser and close when you're done.",
            "a_make_it_safer_update": "Also, keep your browser up-to-date (this one is obvious).",
            "q_roadmap": "What is the roadmap for future versions?",
            "a_roadmap_preset_saving": "<strong>Reduce cognitive load</strong> by saving generation settings in your account, so <var>email</var>, <var>site</var> and <var>ruleset</var> will be stored but not the <var>password</var>.",
            "a_roadmap_15min_memory": "<strong>improve security</strong> by removing password after 15 minutes of inactivity",
            "a_roadmap_web_extension": "Addon for Firefox and Chrome to improve user experience",
            "q_password_generation": "Where are the passwords generated?",
            "a_password_generation": "Generation is performed <strong>on your computer by your browser</strong> and never stored as they never reach LessPass servers (or any others).",
            "q_pricing": "Is LessPass free?",
            "a_pricing_free": "LessPass is free and always will be.",
            "a_pricing_enterprise": "LessPass Enterprise will add support for <abbr title='Lightweight Directory Access Protocol'>LDAP</abbr> and double-authentication for companies."
        },
        "features": {
            "no_cloud_title": "No storage",
            "responsive_title": "Available everywhere",
            "open_source_title": "Open Source",
            "free_title": "Free",
            "no_cloud": "LessPass regenerates your passwords when you need them. No cloud storage is required.",
            "responsive": "LessPass is a web application and works on all devices (computer, smartphone, tablet and your smartTV).",
            "open_source": "LessPass is <strong>open-source</strong>. So its security can be audited. Source code is available on <a href='https://github.com/lesspass/core'>Github</a>.",
            "free": "LessPass is free and always will be."
        },
        "how_it_works": {
            "title": "How LessPass works ?",
            "subtitle": "LessPass is a password generator that guarantees you to generate the same password on the basis of unique information you provide. You can use LessPass to create passwords for various internet services (social networks , email, server passwords , ...)."
        },
        "feedback": {
            "feedback_1": "Finally a security tool that I did not need to trust.",
            "feedback_1_author": "Édouard Lopez, LessPass Team Member",
            "feedback_2": "I no longer need a personal cloud to manage my passwords.<br>One secret and I have access to my passwords everywhere.",
            "feedback_2_author": "Guillaume Vincent, LessPass Founder"
        }
    },
    "fr": {
        "lang": "fr",
        "headlines": {
            "title": "Générateur de mot de passe open source",
            "subtitle": "construit un mot de passe unique lorsque vous en avez besoin sur la base d'informations uniques que vous lui fournissez. Plus besoin de synchronisation entre appareils."
        },
        "footer": {
            "built_by": "créé par",
            "contribute": "contribuer"
        },
        "passwordgenerator": {
            "who_are_you": "Email / Nom d'utilisateur",
            "what_is_your_secret": "Mot de passe",
            "where_are_you_going": "Site (ex: twitter.com)",
            "copy": "Copier",
            "advanced_options": "Options avancées",
            "lowercase_options": "minuscules (a-z)",
            "uppercase_options": "MAJUSCULES (A-Z)",
            "numbers_options": "nombres (0-9)",
            "symbols_options": "caractères spéciaux (@&%?)",
            "counter": "Version",
            "generated_password": "Mot de passe généré",
            "length": "Longueur"
        },
        "faq": {
            "q_works_in_future": "Est ce que LessPass fonctionnera encore demain ?",
            "a_works_in_future": "Vous nous posez souvent la question de la pérennité de LessPass. Rassurez-vous, LessPass ne coûte pas grand chose. L'hébergement, le nom de domaine et le certificat HTTPS sont déjà provisionnés jusqu'en février 2017.",
            "q_trust": "Je ne fais pas confiance à LastPass ou 1password, pourquoi je ferais confiance à LessPass ?",
            "a_trust_lesspass": "Contrairement aux autres services, LessPass est open source donc le code source peut être réutilisé, consulté et audité. Vous pouvez sauvegarder LessPass sur votre ordinateur ou votre serveur d’enterprise gratuitement. Ah et LessPass n'est connecté à aucun service externe (Google Analytics, Facebook, Twitter, etc..). Personne ne sait à part nous que vous utilisez LessPass.",
            "a_trust_we": "<strong>Nous ne vous demandons pas de nous faire confiance</strong>. D'où notre approche",
            "a_trust_oss": "À la différence d'autres services, LessPass est <strong>open-source</strong>. De ce fait il peut être –réellement– audité",
            "a_trust_code": "Le code source est <a href='https://github.com/lesspass/core'>disponible sur Github</a>, vous pouvez donc l'<strong>installer sur votre poste</strong> ou un serveur d'entreprise",
            "a_trust_tracking": "Nous nous opposons au fichage systématique, et par conséquent <strong>aucun outils d'analyse</strong> n'est utilisé dans l'appli ou le site (ex: pas de <i>Google Analytics</i>, <i>Facebook</i>, etc.)",
            "a_trust_client_side": "La génération des mots de passe doit rester sous votre controle, elle se fait sur votre <strong>navigateur</strong>",
            "a_trust_online": "<em>le mode connecté</em> a pour but de suggérer vos <var>email</var>s et <var>site</var>s, <i>c.-à-d.</i> qu'il ne stocke rien d'autre",
            "source_code": "Auditez le code source",
            "q_make_it_safer": "Comment puis-je rendre LessPass encore plus sûr ?",
            "a_make_it_safer_private": "Utilisez la <strong><a href='https://fr.wikipedia.org/wiki/Navigation_priv%C3%A9e'>navigation privé</a></strong> de votre navigateur</strong> et fermez le quand vous avez terminé.",
            "a_make_it_safer_update": "Garder votre navigateur à jour (ce qui corrige les bugs de sécurité).",
            "q_roadmap": "Quelles fonctionnalités sont prévues pour les versions à venir ?",
            "a_roadmap_preset_saving": "application connectée pour sauvegarder les informations sur les sites",
            "a_roadmap_15min_memory": "suppression du mot de passe après 15 minutes d’inactivités",
            "a_roadmap_web_extension": "Addon Firefox et Chrome pour améliorer l'expérience utilisateur",
            "q_password_generation": "Où sont générés les mots de passe ?",
            "a_password_generation": "La génération du mot de passe est effectué sur votre navigateur et pas sur les serveurs de LessPass.",
            "q_pricing": "Est ce que LessPass est gratuit ?",
            "a_pricing_free": "LessPass est gratuit et le sera toujours.",
            "a_pricing_enterprise": "LessPass Enterprise, avec le support <abbr title='Lightweight Directory Access Protocol'>LDAP</abbr> et la double authentication, sera payante pour les enterprises."
        },
        "features": {
            "no_cloud_title": "Pas de stockage",
            "responsive_title": "Disponible partout",
            "open_source_title": "Open Source",
            "free_title": "Gratuit",
            "no_cloud": "LessPass régénère vos mots de passe à chaque fois que vous en avez besoin. Aucun stockage sur le cloud n'est nécessaire.",
            "responsive": "LessPass est une application web et fonctionne sur tous les appareils (ordinateur, smartphone, tablette et smartTV).",
            "open_source": "LessPass est open source. Le code source est disponible sur <a href='https://github.com/lesspass/core'>Github</a>, vous pouvez l'auditer",
            "free": "LessPass est gratuit et le sera toujours."
        },
        "how_it_works": {
            "title": "Comment fonctionne LessPass ?",
            "subtitle": "LessPass est un générateur de mot de passe qui vous garanti générer le même mot de passe sur la base d'informations uniques que vous lui fournissez. Vous pouvez donc utiliser LessPass pour créer des mots de passe pour vos différents services internet (Réseaux sociaux, mails, mots de passe serveurs, ...)."
        },
        "feedback": {
            "feedback_1": "Enfin un outil de sécurité a qui je n'ai pas besoin de faire confiance.",
            "feedback_1_author": "Édouard Lopez,<br> membre de l'équipe de LessPass",
            "feedback_2": "Je n'ai plus besoin d'un cloud personnel pour gérer mes mots de passe.<br> Une seule phrase secrete et j'ai accès à mes mots de passe partout.",
            "feedback_2_author": "Guillaume Vincent,<br> créateur de LessPass"
        }
    }
};


var browserLanguage = (navigator.language || navigator.browserLanguage).split('-')[0];
var lang = browserLanguage in locales ? browserLanguage : 'en';
Vue.use(I18n, {
    lang: lang,
    locales: locales
});

module.exports = locales;
