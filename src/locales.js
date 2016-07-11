const locales = {
  en: {lang: 'en'},
  fr: {lang: 'fr'}
};

locales.en.index = {
  Login: 'Sign In',
  Download: 'Download',
  REGISTER: 'REGISTER',
  title: 'Password Manager<br>without synchronisation',
  subtitle: 'Stop wasting time synchronize your encrypted vault. Remember one master password to access your passwords, anywhere, anytime.<br>No sync needed.'
};
locales.fr.index = {
  Login: 'Connexion',
  Download: 'Téléchargement',
  title: 'Gestionnaire de mots de passe sans synchronisation',
  subtitle: 'Arrêtez de perdre du temps à synchroniser vos coffres-forts chiffrés. Mémorisez un mot de passe fort pour retrouver tous vos mots de passe, partout, à tout moment. Pas besoin de synchronisation.'
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
  generatedPassword: 'Mot de passe calculé',
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
  openSource: 'LessPass is <strong>open-source</strong>. So its security can be audited. Source code is available on <strong><a class="white-link" href="https://github.com/lesspass/lesspass/">Github</a></strong>',
  free: 'LessPass is free<br>and always will be'
};

locales.fr.features = {
  noCloudTitle: 'Pas de stockage',
  responsiveTitle: 'Disponible partout',
  openSourceTitle: 'Open Source',
  freeTitle: 'Gratuit',
  noCloud: 'LessPass régénère vos mots de passe à chaque fois que vous en avez besoin.<br>Aucun stockage sur le cloud n\'est nécessaire',
  responsive: 'LessPass est une application web qui fonctionne<br>sur tous les appareils :<br>ordinateur, smartphone, tablette et smartTV',
  openSource: 'LessPass est open source. Le code source est disponible sur <strong><a class="white-link" href="https://github.com/lesspass/lesspass/">Github</a></strong>, vous pouvez l\'auditer',
  free: 'LessPass est gratuit et le sera toujours'
};

locales.en.footer = {
  createdBy: 'Crafted with ♥ by'
};

locales.fr.footer = {
  createdBy: 'Construit avec ♥ par'
};

locales.en.login = {
  Email: 'Email',
  EmailPlaceholder: 'Enter your email',
  Password: 'Password',
  PasswordPlaceholder: 'Enter your Password',
  registerPasswordHelp: 'Do not use your master password here',
  SignIn: 'Sign In',
  welcome: 'Signed in successfully. Welcome on LessPass',
  credentialsInvalids: '<strong>Invalid Email or Password.</strong><br> Please try again.',
  forgotPassword: 'help, I  forgot my password',
  Register: 'Register (beta)',
  RegisterInfo: 'Create an account :',
  registerSuccess: 'Thank you for being registered, you can now login. Do not forget that LessPass connected application is in beta, and we love the feedback to improve our product.',
  registrationInvalidNotAnEmail: 'Your email is not a valid email address.',
  registrationInvalidUserAlreadyExists: 'You already have an account. Do you want to <a href="/#!/login/"><b>log in</b></a>?',
  registrationInvalid: 'The information you provided are invalid.',
  logoutMessage: 'Thanks for spending some quality time with LessPass App today.',
  orLogIn: 'Already registered ? Sign In',
  orRegister: 'Do not have an account ? Register',
  LogInInfo: 'Happy to see you here again',
  emailAndPasswordMandatory: 'Email and password are mandatory'
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
  RegisterInfo: 'Créez un compte :',
  registerSuccess: 'Merci de vous être enregistré, vous pouvez maintenant vous connecter. N\'oubliez pas que LessPass App est en beta et que nous aimons beaucoup les retours pour améliorer notre produit.',
  registrationInvalidNotAnEmail: 'Votre email n\'est pas un email valide',
  registrationInvalidUserAlreadyExists: 'Vous avez déjà un compte ici. Vous voulez peut être vous <a href="/#!/login/"><b>connecter</b></a>?',
  registrationInvalid: 'Vos informations de connection sont invalides',
  logoutMessage: 'Merci d\'avoir passé du temps de qualité avec LessPass App aujourd\'hui',
  orLogIn: 'Déjà un compte ? connectez-vous',
  orRegister: 'Vous n\'avez pas de compte ? Enregistrez-vous',
  LogInInfo: 'Content de vous revoir ici',
  emailAndPasswordMandatory: 'L\'email et le mot de passe sont obligatoires'
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
  length: 'Length',
  previous: 'previous',
  next: 'next'
};

locales.fr.entries = {
  search: 'recherche',
  CreateNewEntry: 'Créer une entrée',
  createNewEntry: 'créer une entrée',
  Cancel: 'Annuler',
  Create: 'Créer',
  UpdateNewEntry: 'Mettre à jour une entrée',
  Update: 'Mettre à jour',
  entryCreated: 'Votre entrée a été créé',
  errorCreation: 'Une erreur est survenue pendant la création, retentez dans un instant',
  entryUpdated: 'Votre entrée a bien été mise à jour',
  errorUpdate: 'Une erreur est survenue pendant la mise à jour, retentez dans un instant',
  DeleteEntry: 'Supprimer une entrée',
  deleteAreYouSure: 'Est vous sur de vouloir supprimer cette entrée ?',
  Confirm: 'Confirmer',
  entryDeleted: 'Votre entrée a bien été supprimée',
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
  length: 'Longueur',
  previous: 'précédent',
  next: 'suivant'
};

locales.en.help = {
  Welcome: 'Welcome on',
  help1: 'LessPass App save the necessary information it needs to re-generate passwords. The master password and the generated passwords are never stored. Here an example of the information we store on our database :',
  help2: 'To regenerate a password, LessPass ask your master password and your browser rebuild the password.',
  Tips: 'Tips',
  tip1: 'Keep your master password in your head.',
  tip2: 'Do not register on a site with your master password.',
  tip3: 'Use full qualified domain name for site field. The LessPass web extension pre-fill site field for you with this mecanism.<br><pre>ex: https://mail.google.com > google.com</pre></pre>',
  tip4: 'Change a password, without changing your master password by incrementing the counter.Changer un mot de passe, sans changer votre mot de passe fort en incrémentant le compteur.',
  letsGo: 'Let\'s go',
  letsGo1: 'Create your first entry by clicking the button'
};

locales.fr.help = {
  Welcome: 'Bienvenu sur',
  help1: 'LessPass App enregistre les informations dont il a besoin pour calculer vos mots de passe. Le mot de passe fort et les mots de passe calculés ne sont jamais stockés. Voici un exemple des informations que nous stockons dans notre base de données:',
  help2: 'Pour calculer un mot de passe, LessPass demande votre mot de passe fort et recalcule directement sur votre navigateur.',
  Tips: 'Astuces',
  tip1: 'Gardez votre mot de passe fort dans votre tête.',
  tip2: 'Ne vous inscrivez pas sur un site avec votre mot de passe fort.',
  tip3: 'Utilisez le nom de domaine pour le champ site. Ce champ est pré-rempli par l\'extension web avec ce mécanisme.<br><pre>ex: https://mail.google.com > google.com</pre></pre>',
  tip4: 'Changer un mot de passe, sans changer votre mot de passe fort en incrémentant la version du mot de passe.',
  letsGo: 'En avant',
  letsGo1: 'Créer votre première entrée en cliquant sur le bouton'
};

locales.en.settings = {
  ChangePassword: 'Change LessPass App password',
  currentPassword: 'Current password',
  currentPasswordPlaceholder: 'Enter your current password',
  newPassword: 'New password',
  newPasswordPlaceholder: 'Enter your new password',
  changePasswordButton: 'Update password',
  passwordChangedSuccess: 'password changed',
  passwordChangedError: 'Your current password is invalid',
  credentialsMandatory: 'Current password and new password are mandatory'
};

locales.fr.settings = {
  ChangePassword: 'Changement du mot de passe LessPass App',
  currentPassword: 'Mot de passe actuel',
  currentPasswordPlaceholder: 'Entez votre mot de passe actuel',
  newPassword: 'Nouveau mot de passe',
  newPasswordPlaceholder: 'Entrez votre nouveau mot de passe',
  changePasswordButton: 'Mettre à jour',
  passwordChangedSuccess: 'Mot de passe changé avec succès',
  passwordChangedError: 'Votre mot de passe actuel n\'est pas bon',
  credentialsMandatory: 'Le mot de passe actuel et le nouveau mot de passe sont obligatoires'
};

export default locales;
