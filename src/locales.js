const locales = {
  en: {lang: 'en'},
  fr: {lang: 'fr'}
};

locales.en.index = {
  LOGIN: 'LOGIN',
  REGISTER: 'REGISTER',
  title: 'Take your passwords with you',
  subtitle: 'Stop wasting time synchronize your encrypted vault. Remember one master password to access your passwords, anywhere, anytime. No sync needed.'
};
locales.fr.index = {
  LOGIN: 'CONNEXION',
  REGISTER: 'INSCRIPTION',
  title: 'Emmenez tous vos mots de passe avec vous',
  subtitle: 'Arrêtez de perdre du temps à synchroniser vos coffres-forts cryptés. Mémorisez un mot de passe fort pour retrouver tous vos mots de passe, partout, à tout moment. Pas besoin de synchronisation.'
};

locales.en.passwordgenerator = {
  emailUsername: 'Email / Username',
  masterpassword: 'Master password',
  site: 'Site (e.g. twitter.com)',
  generatedPassword: 'Generated password',
  copy: 'Copy',
  advancedOptions: 'Advanced options',
  lowercaseOptions: 'lowercase (a‑z)',
  uppercaseOptions: 'UPPERCASE (A‑Z)',
  numbersOptions: 'numbers (0‑9)',
  symbolsOptions: 'symbols (@&%?)',
  counter: 'Counter',
  length: 'Length'
};

locales.fr.passwordgenerator = {
  emailUsername: 'Email / Nom d\'utilisateur',
  masterpassword: 'Mot de passe fort',
  site: 'Site (ex: twitter.com)',
  generatedPassword: 'Mot de passe généré',
  copy: 'Copier',
  advancedOptions: 'Options avancées',
  lowercaseOptions: 'minuscules (a‑z)',
  uppercaseOptions: 'MAJUSCULES (A‑Z)',
  numbersOptions: 'nombres (0‑9)',
  symbolsOptions: 'caractères spéciaux (@&%?)',
  counter: 'Version',
  length: 'Longueur'
};

locales.en.features = {
  noCloudTitle: 'No storage',
  responsiveTitle: 'Available everywhere',
  openSourceTitle: 'Open Source',
  freeTitle: 'Free',
  noCloud: 'LessPass regenerates your passwords when you need them. No cloud storage is required',
  responsive: 'LessPass is a web application and works on all devices (computer, smartphone, tablet and your smartTV)',
  openSource: 'LessPass is <strong>open-source</strong>. So its security can be audited. Source code is available on <a href="https://github.com/lesspass/lesspass/">Github</a>',
  free: 'LessPass is free<br>and always will be'
};

locales.fr.features = {
  noCloudTitle: 'Pas de stockage',
  responsiveTitle: 'Disponible partout',
  openSourceTitle: 'Open Source',
  freeTitle: 'Gratuit',
  noCloud: 'LessPass régénère vos mots de passe à chaque fois que vous en avez besoin.<br>Aucun stockage sur le cloud n\'est nécessaire',
  responsive: 'LessPass est une application web qui fonctionne<br>sur tous les appareils :<br>ordinateur, smartphone, tablette et smartTV',
  openSource: 'LessPass est open source. Le code source est disponible sur <a href="https://github.com/lesspass/lesspass/">Github</a>, vous pouvez l\'auditer',
  free: 'LessPass est gratuit et le sera toujours'
};

locales.en.testimonial = {
  feedback1: 'Finally a security tool that I did not need to trust.',
  feedback1Author: 'Édouard Lopez, LessPass Team Member',
  feedback2: 'I no longer need a personal cloud to manage my passwords.<br>One secret and I have access to my passwords everywhere.',
  feedback2Author: 'Guillaume Vincent, LessPass Founder'
};

locales.fr.testimonial = {
  feedback1: 'Enfin un outil de sécurité a qui je n\'ai pas besoin de faire confiance.',
  feedback1Author: 'Édouard Lopez,<br> membre de l\'équipe de LessPass',
  feedback2: 'Je n\'ai plus besoin d\'un cloud personnel pour gérer mes mots de passe.<br> Une seule phrase secrete et j\'ai accès à mes mots de passe partout.',
  feedback2Author: 'Guillaume Vincent,<br> créateur de LessPass'
};

locales.en.howItWorks = {
  title: 'How LessPass works&nbsp;?',
  detail: 'LessPass is a password manager that guarantees you to generate the same password on the basis of unique information you provide. You can use LessPass to create passwords for various internet services (social networks , email, server passwords , ...).',
  alwaysSync: 'No synchronisation',
  alwaysSyncDetail: 'LessPass don’t need any cloud storage. It’s a webapp, with some Javascript, that derive your password in a secure way. PBKDF2 and SHA-256 directly on your browser. <a href="https://github.com/lesspass/core/" class="white-link">Check the algorithm</a>.',
  extension: 'Firefox and Chrome extension',
  extensionDetail: 'Install the <a href="https://addons.mozilla.org/en-US/firefox/addon/lesspass/" class="white-link">firefox</a> or the <a href="https://chrome.google.com/webstore/detail/lesspass/lcmbpoclaodbgkbjafnkbbinogcbnjih" class="white-link">chrome</a> extension to connect automatically to all sites with a LessPass password. Use the extension to generate a unique password for your services. Use the extension to automatically connect to your sites.',
  connectedAppDetail: 'Some services have strange password rules. Sometimes you need to change a password without changing your master password. LessPass helps you to change your passwords with advanced options. To store those information, we have created a connected application : LessPass App.<br><br> LessPass App save the necessary information it needs to re-generate passwords. The master password and the generated passwords are never stored. There are no encrypted password to steal in our database. We plan to connect web extension with a LessPass App of your choice.',
  selfHosted: 'Self hosted',
  selfHostingDetail: 'If you want to test LessPass App on your server, you can by running these commands:'
};

locales.fr.howItWorks = {
  title: 'Comment fonctionne LessPass&nbsp;?',
  detail: 'LessPass est un gestionnaire de mot de passe qui n\'enregistre pas vos mots de passe. Il les regénère sur la base d\'informations uniques que vous lui fournissez. Vous pouvez donc utiliser LessPass pour créer des mots de passe pour vos différents services internet (Réseaux sociaux, mails, mots de passe serveurs, ...).',
  alwaysSync: 'Pas besoin de synchronisation',
  alwaysSyncDetail: 'Vous n\'avez plus besoin de synchroniser sur le cloud vos coffres fort pour mots de passe. LessPass est une application web qui dérive vos mots de passe de manière sécurisée. PBKDF2 et SHA-256 directement sur votre navigateur. <a href="https://github.com/lesspass/core/" class="white-link">Check the algorithm</a>.',
  extension: 'Mathématique et chiffrement',
  extensionDetail: 'Installez l\'extension <a href="https://addons.mozilla.org/en-US/firefox/addon/lesspass/" class="white-link">firefox</a> ou <a href="https://chrome.google.com/webstore/detail/lesspass/lcmbpoclaodbgkbjafnkbbinogcbnjih" class="white-link">chrome</a> pour vous connecter de manière automatique à vos sites avec un mot de passe LessPass. Utilisez l\'extension pour créer automatiquement des mots de passe unique pour vos sites. Utilisez l\'extension pour vous connecter automatiquement à vos sites.',
  connectedAppDetail: 'Certains services ont des règles de mot de passe étrange. Des fois vous voulez changer de mot de passe, sans changer votre mot de passe fort. LessPass permet de changer les options de vos mots de passe. Pour mémoriser ces informations particulières pour certains mots de passe, nous avons créé une application connectée : LessPass App.<br> LessPass App enregistre toutes les informations nécéssaires à la regénération d\'un mot de passe. Nous ne sauvegardons pas les informations comme le mot de passe fort ou les mots de passe générés. Il n\'y a aucun mot de passe chiffré à voler dans nos bases de données.<br> Nous prévoyons de connecter l\'extension web avec LessPass App.',
  selfHosted: 'Auto hébergement',
  selfHostingDetail: 'Si vous voulez tester LessPass App sur votre serveur, vous pouvez en lançant ces commandes:'
};

locales.en.footer = {
  createdBy: 'created by'
};

locales.fr.footer = {
  createdBy: 'créé par'
};

locales.en.login = {
  Email: 'Email',
  EmailPlaceholder: 'Enter your email',
  Password: 'Password',
  PasswordPlaceholder: 'Enter your Password',
  registerPasswordHelp: 'Do not use your master password here',
  SignIn: 'Sign In',
  welcome: 'Login successful, welcome on LessPass',
  credentialsInvalids: '<strong>Invalid Email or Password.</strong><br> Please try again.',
  forgotPassword: 'help, I  forgot my password',
  Register: 'Register (beta)',
  RegisterInfo: 'New to LessPass App ? You can create an account :',
  registerSuccess: 'Thank you for being registered, you can now login. Do not forget that LessPass connected application is in beta, and we love the feedback to improve our product.',
  registrationInvalidNotAnEmail: 'Your email is not a valid email address.',
  registrationInvalidUserAlreadyExists: 'You already have an account. Do you want to <a href="/#!/login/"><b>log in</b></a>?',
  registrationInvalid: 'The information you provided are invalid.'
};

locales.fr.login = {
  Email: 'Email',
  EmailPlaceholder: 'Entrez votre email',
  Password: 'Mot de passe',
  PasswordPlaceholder: 'Entrez votre mot de passe',
  registerPasswordHelp: 'N\'utilisez pas votre mot de passe fort ici',
  SignIn: 'Se connecter',
  welcome: 'Connexion réussie, bienvenue sur LessPass',
  credentialsInvalids: 'L\'adresse e-mail et/ou mot de passe sont invalides',
  forgotPassword: 'mot de passe oublié',
  Register: 'S\'enregistrer',
  RegisterInfo: 'Nouveau sur LessPass ? enregistrez-vous ?',
  registerSuccess: 'Merci de vous être enregistré, vous pouvez maintenant vous connecter. N\'oublier pas que l\'application connecté LessPass est en beta et que nous aimons beaucoup les retours pour améliorer notre produit.',
  registrationInvalidNotAnEmail: 'Votre email n\'est pas un email valide',
  registrationInvalidUserAlreadyExists: 'Vous avez déjà un compte vous voulez peut être vous <a href="/#!/login/"><b>connecter</b></a>?',
  registrationInvalid: 'Vos informations de connection sont invalides'
};

locales.en.entries = {
  search: 'search',
  CreateNewEntry: 'Create a new entry',
  createNewEntry: 'create entry',
  Cancel: 'Cancel',
  Create: 'Create',
  UpdateNewEntry: 'Update a new entry',
  Update: 'Update',
  entryCreated: 'Your entry has been successfully created',
  errorCreation: 'Your entry could not be created, try again in a moment',
  entryUpdated: 'Your entry has been successfully updated',
  errorUpdate: 'Your entry could not be updated, try again in a moment',
  DeleteEntry: 'Delete entry',
  deleteAreYouSure: 'Are you sure you want to delete this entry ?',
  Confirm: 'Confirm',
  entryDeleted: 'This entry has been deleted',
  errorDeletion: 'Your entry could not be deleted, try again in a moment',
  copyPassword: 'copy password',
  CopyPassword: 'Copy password',
  Copy: 'Copy',
  copyToClipboard: 'Copy to clipboard ctrl + c',
  login: 'Email / Username',
  site: 'Site',
  advancedOptions: 'Advanced options',
  lowercaseOptions: 'lowercase (a‑z)',
  uppercaseOptions: 'UPPERCASE (A‑Z)',
  numbersOptions: 'numbers (0‑9)',
  symbolsOptions: 'symbols (@&%?)',
  counter: 'Counter',
  length: 'Length'
};

locales.fr.entries = {
  search: 'recherche',
  CreateNewEntry: 'Créer un mot de passe',
  createNewEntry: 'créer un mot de passe',
  Cancel: 'Annuler',
  Create: 'Créer',
  UpdateNewEntry: 'Mettre à jour un mot de passe',
  Update: 'Mettre à jour',
  entryCreated: 'Votre mot de passe a bien été créé',
  errorCreation: 'Une erreur est survenue pendant la création, retentez dans un instant',
  entryUpdated: 'Votre mot de passe a bien été mis à jour',
  errorUpdate: 'Une erreur est survenue pendant la mise à jour, retentez dans un instant',
  DeleteEntry: 'Supprimer un mot de passe',
  deleteAreYouSure: 'Est vous sur de vouloir supprimer ce mot de passe ?',
  Confirm: 'Confirmer',
  entryDeleted: 'Votre mot de passe a bien été supprimé',
  errorDeletion: 'Une erreur est survenue pendant la suppression, retentez dans un instant',
  copyPassword: 'copier le mot de passe',
  Copy: 'Copier',
  copyToClipboard: 'Copier (CTRL + C)',
  login: 'Email / Nom d\'utilisateur',
  site: 'Site (ex: twitter.com)',
  advancedOptions: 'Options avancées',
  lowercaseOptions: 'minuscules (a‑z)',
  uppercaseOptions: 'MAJUSCULES (A‑Z)',
  numbersOptions: 'nombres (0‑9)',
  symbolsOptions: 'caractères spéciaux (@&%?)',
  counter: 'Version',
  length: 'Longueur'
};

export default locales;
