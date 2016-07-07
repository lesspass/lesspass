import './app.scss'
import lesspass from 'lesspass';
import Clipboard from 'clipboard';

var encryptedLogin;

function showTooltip(elem, msg) {
  var classNames = elem.className;
  elem.setAttribute('class', classNames + ' hint--top');
  elem.setAttribute('aria-label', msg);
  setTimeout(function () {
    elem.setAttribute('class', classNames);
  }, 2000);
}

window.onload = function () {
  document.getElementById('generatedPassword').value = '';
};

function getColor(color) {
  var colors = ['EBBB56', '59E0EB', 'E8F464', 'D2B4ED', 'BBE96D', 'EF9FC8', '8EE083', 'DCBFD6', 'DDD15A', 'A1C8E8', 'C4D977', 'F1A49E', '79E8A0', 'E9A970', '60E3B4', 'D4C47D', '73DDCA', 'C4EAA7', 'A7D6D4', '9CC795'];
  var index = parseInt(color, 16) % colors.length;
  return '#' + colors[index];
}

document.getElementById('login').onblur = displayPasswordIndication;
document.getElementById('masterPassword').onblur = displayPasswordIndication;
function displayPasswordIndication() {
  var login = document.getElementById('login').value;
  var masterPassword = document.getElementById('masterPassword').value;
  var fingerprint = document.getElementById('fingerprint');
  var displayMasterPasswordButton = document.getElementById('displayMasterPasswordButton');
  if (!login || !masterPassword) {
    fingerprint.innerText = '';
    fingerprint.style.display = 'none';
    displayMasterPasswordButton.style.backgroundColor = '#FFFFFF';
    return;
  }
  lesspass.encryptLogin(login, masterPassword).then(function (secretHash) {
    encryptedLogin = secretHash;
    var color = secretHash.substring(0, 6);
    var colorHex = getColor(color);
    fingerprint.innerText = color;
    fingerprint.style.display = 'inline';
    displayMasterPasswordButton.style.backgroundColor = colorHex;
    generatePassword();
  });
}

document.getElementById('copyPasswordButton').addEventListener('click', generatePassword);
document.getElementById('generatedPasswordForm').addEventListener('change', generatePassword);
document.getElementById('passwordLength').addEventListener('input', generatePassword);
document.getElementById('passwordCounter').addEventListener('input', generatePassword);
document.getElementById('generatedPasswordForm').oninput = generatePassword;
function getData() {
  const defaultOptions = {
    login: document.getElementById('login').value,
    counter: document.getElementById('passwordCounter').value,
    password: {
      length: document.getElementById('passwordLength').value,
      settings: []
    }
  };
  const options = ['lowercase', 'uppercase', 'numbers', 'symbols'];

  for (let i = 0; i < options.length; i++) {
    if (document.getElementById(options[i]).checked) {
      defaultOptions.password.settings.push(options[i]);
    }
  }
  return defaultOptions;
}

function getFormData() {
  const initData = getData();
  initData.masterPassword = document.getElementById('masterPassword').value;
  initData.site = document.getElementById('site').value;
  return initData;
}

function generatePassword() {
  const data = getFormData();
  var generatedPasswordField = document.getElementById('generatedPassword');
  if (!encryptedLogin || !data.site || !data.password.settings.length) {
    generatedPasswordField.value = '';
    return;
  }
  generatedPasswordField.value = lesspass.renderPassword(encryptedLogin, data.site, data);
}

document.getElementById('displayMasterPasswordButton').addEventListener('click', toggleMasterPassword);
function toggleMasterPassword() {
  if (document.getElementById('masterPassword').type === 'password') {
    document.getElementById('masterPassword').type = 'text';
  } else {
    document.getElementById('masterPassword').type = 'password';
  }
}

function cleanData() {
  setTimeout(function () {
    document.getElementById('generatedPassword').value = '';
    document.getElementById('masterPassword').value = '';
  }, 10000);
}

var clipboard = new Clipboard('.btn-copy');

clipboard.on('success', function (e) {
  if (e.text) {
    showTooltip(e.trigger, 'copied !');
    cleanData();
  }
});

clipboard.on('error', function () {
  cleanData();
});


document.getElementById('displayOptionsButton').addEventListener('click', toggleBlocks);

function toggleVisibility(className) {
  var elements = document.getElementsByClassName(className);
  for (var i = 0; i < elements.length; i++) {
    var e = elements[i];
    if (e.style.display === 'block') {
      e.style.display = 'none';
    } else {
      e.style.display = 'block';
    }
  }
}

function toggleBlocks() {
  toggleVisibility('option-block');
}

var domains = ["lesspass.com", "google.com", "youtube.com", "facebook.com", "baidu.com", "yahoo.com", "amazon.com", "wikipedia.org", "twitter.com", "qq.com", "live.com", "taobao.com", "bing.com", "msn.com", "linkedin.com", "instagram.com", "weibo.com", "vk.com", "hao123.com", "ebay.com", "reddit.com", "pinterest.com", "google.fr", "netflix.com", "tmall.com", "microsoft.com", "onclickads.net", "paypal.com", "sohu.com", "wordpress.com", "tumblr.com", "imgur.com", "blogspot.com", "naver.com", "xvideos.com", "stackoverflow.com", "apple.com", "aliexpress.com", "fc2.com", "github.com", "imdb.com", "pornhub.com", "whatsapp.com", "jd.com", "diply.com", "craigslist.org", "office.com", "blogger.com", "alibaba.com", "soso.com", "pixnet.net", "go.com", "dropbox.com", "xinhuanet.com", "xhamster.com", "outbrain.com", "googleusercontent.com", "cnn.com", "coccoc.com", "booking.com", "ask.com", "popads.net", "microsoftonline.com", "wikia.com", "chase.com", "quora.com", "adobe.com", "163.com", "360.com", "haosou.com", "youku.com", "bbc.com", "alipay.com", "flipkart.com", "bongacams.com", "nytimes.com", "daum.net", "sogou.com", "txxx.com", "espn.go.com", "ettoday.net", "bankofamerica.com", "china.com", "indiatimes.com", "myway.com", "bilibili.com", "walmart.com", "godaddy.com", "salesforce.com", "buzzfeed.com", "zillow.com", "xnxx.com", "wellsfargo.com", "dailymotion.com", "detail.tmall.com", "steampowered.com", "steamcommunity.com", "theguardian.com", "indeed.com", "nametests.com", "aol.com", "etsy.com", "globo.com", "amazonaws.com", "yelp.com", "huffingtonpost.com", "tudou.com", "zhihu.com", "so.com", "tripadvisor.com", "soundcloud.com", "cnzz.com", "onlinesbi.com", "varzesh3.com", "vice.com", "directrev.com", "cnet.com", "uptodown.com", "weather.com", "bet365.com", "mediafire.com", "washingtonpost.com", "force.com", "gfycat.com", "stackexchange.com", "taboola.com", "tuberel.com", "vimeo.com", "feedly.com", "detik.com", "theladbible.com", "redtube.com", "pixiv.net", "homedepot.com", "slideshare.net", "taringa.net", "torrentz.eu", "foxnews.com", "target.com", "flickr.com", "hclips.com", "amazon.fr", "kakaku.com", "9gag.com", "ifeng.com", "udn.com", "ikea.com", "americanexpress.com", "iqiyi.com", "bp.blogspot.com", "terraclicks.com", "orange.fr", "fbcdn.net", "comcast.net", "youm7.com", "gmx.net", "tribunnews.com", "youporn.com", "deviantart.com", "hdfcbank.com", "tistory.com", "roblox.com", "capitalone.com", "doubleclick.net", "leboncoin.fr", "douyu.com", "ozock.com", "spotify.com", "babytree.com", "w3schools.com", "forbes.com", "wikihow.com", "wix.com", "upornia.com", "snapdeal.com", "mozilla.org", "livejournal.com", "bestbuy.com", "handycafe.com", "xfinity.com", "groupon.com", "skype.com", "adnetworkperformance.com", "onedio.com", "thepiratebay.org", "rdsa2013.com", "paytm.com", "icicibank.com", "twimg.com", "usps.com", "trello.com", "wikimedia.org", "tokopedia.com", "popcash.net", "webtretho.com", "xywy.com", "huanqiu.com", "yesky.com", "citi.com", "blastingnews.com", "shutterstock.com", "rediff.com", "ups.com", "eksisozluk.com", "1688.com", "bitauto.com", "slack.com", "files.wordpress.com", "pandora.com", "imzog.com", "speedtest.net", "2ch.net", "loading-delivery2.com", "about.com", "adexc.net", "chaturbate.com", "mbc.net", "goodreads.com", "wordpress.org", "softonic.com", "battle.net", "livejasmin.com", "accuweather.com", "icloud.com", "fedex.com", "slickdeals.net", "wittyfeed.com", "ndtv.com", "att.com", "giphy.com", "archive.org", "csdn.net", "sourceforge.net", "39.net", "youtube-mp3.org", "secureserver.net", "akamaihd.net", "taleo.net", "savefrom.net", "themeforest.net", "telegram.org", "rutracker.org", "cloudfront.net", "atlassian.net", "behance.net", "free.fr", "trackingclick.net", "npr.org", "seesaa.net", "coursera.org", "change.org", "researchgate.net", "streamcloud.eu", "clien.net", "sabq.org", "e-hentai.org", "uploaded.net", "inquirer.net", "alwafd.org", "4chan.org", "elfagr.org", "torcache.net", "buzzfil.net", "lequipe.fr", "kdnet.net", "gigazine.net", "bitbucket.org", "ero-video.net", "lemonde.fr", "europa.eu", "php.net", "reverso.net", "wiktionary.org", "sfr.fr", "eroterest.net", "ebay.fr", "fanfiction.net", "labanquepostale.fr", "bola.net", "credit-agricole.fr", "rapidgator.net", "vnexpress.net", "mayoclinic.org", "myanimelist.net", "minecraft.net", "pole-emploi.fr", "commentcamarche.net", "gutefrage.net", "archiveofourown.org", "ccm.net", "apache.org", "dmv.org", "wargaming.net", "lefigaro.fr", "eenadu.net", "poringa.net", "deviantart.net", "fishki.net", "jalan.net", "2ch-c.net", "cambridge.org", "convert2mp3.net", "pagesjaunes.fr", "oschina.net", "torrentkim3.net", "khanacademy.org", "dostor.org", "aljazeera.net", "codecanyon.net", "allocine.fr", "animeflv.net", "jb51.net", "jw.org", "nocookie.net", "pchome.net", "ali213.net", "edx.org", "zatnawqy.net", "ukr.net", "my-hit.org", "jsfiddle.net", "4gamer.net", "turbobit.net", "mangareader.net", "leo.org", "caf.fr", "windows.net", "comenity.net", "pbs.org", "opensubtitles.org", "xuite.net", "consumerreports.org", "programme-tv.net", "att.net", "python.org", "laposte.net", "p5w.net", "aarp.org", "docusign.net", "2chan.net", "caisse-epargne.fr", "cnki.net", "cityheaven.net", "toyokeizai.net", "blogspot.fr", "jkanime.net", "earthlink.net", "linkshrink.net", "oneplus.net", "tf1.fr", "cox.net", "seriesflv.net", "exhentai.org", "ap.org", "skyscanner.net", "sanjesh.org", "lds.org", "17track.net", "20minutes.fr", "dytt8.net", "shufoo.net", "postimg.org", "alaan.org", "navyfederal.org", "creditmutuel.fr", "zipbogo.net", "voirfilms.org", "ieee.org", "w3.org", "tripadvisor.fr", "societegenerale.fr", "kaiserpermanente.org", "lcl.fr", "bbb.org", "bouyguestelecom.fr", "lifehack.org", "familysearch.org", "monova.org", "laredoute.fr", "say-move.org", "banquepopulaire.fr", "baiducdn.org", "pbskids.org", "eurosport.fr", "go2cloud.org", "laposte.fr", "zimbra.free.fr", "ameli.fr", "linguee.fr", "westeros.org", "leroymerlin.fr", "leparisien.fr", "drupal.org", "hltv.org", "videolan.org", "slashdot.org", "angularjs.org", "francetvinfo.fr", "yify-torrent.org", "un.org", "acs.org", "fullhdfilmizlesene.org", "digitalprivacyalert.org", "jstor.org", "service-public.fr", "wikibooks.org", "ubuntuforums.org", "lexpress.fr", "tlootas.org", "collegeboard.org", "tvtropes.org", "impots.gouv.fr", "syosetu.org", "larousse.fr", "wikimapia.org", "new-rutor.org", "hbr.org", "washwasha.org", "marmiton.org", "4cdn.org", "doctissimo.fr", "britishcouncil.org", "cic.fr", "fdj.fr", "airbnb.fr", "media-fire.org", "thinkprogress.org", "oxfordjournals.org", "dyndns.org", "worldcat.org", "raspberrypi.org", "eclipse.org", "ouest-france.fr", "viamichelin.fr", "megafilmeshd20.org", "jooble.org", "lichess.org", "pixhost.org", "malwarebytes.org", "ets.org", "hattrick.org", "paultan.org", "indeed.fr", "6play.fr", "rueducommerce.fr", "joomla.org", "worldbank.org", "arxiv.org", "archlinux.org", "castorama.fr", "decathlon.fr", "huffingtonpost.fr", "lacentrale.fr", "lesechos.fr", "vidal.fr", "lepoint.fr", "zalando.fr", "worldoftanks.eu", "pmu.fr", "asos.fr", "successfactors.eu", "blablacar.fr", "liberation.fr", "urssaf.fr", "mycanal.fr", "auchan.fr", "conforama.fr", "meteociel.fr", "carrefour.fr", "canalplus.fr", "letudiant.fr", "groupon.fr", "3suisses.fr", "leclercdrive.fr", "ratp.fr", "ooreka.fr", "rtl.fr", "airfrance.fr", "meetic.fr", "francetv.fr", "mobile.free.fr", "ladepeche.fr", "paruvendu.fr", "rfi.fr", "spaggiari.eu", "metronews.fr", "worldofwarships.eu", "sudouest.fr", "colissimo.fr", "keeplinks.eu", "onelife.eu", "hardware.fr", "coco.fr", "imp.free.fr", "melty.fr", "jeux.fr", "europe1.fr", "education.fr", "bricodepot.fr", "edf.fr", "maxifoot.fr", "pap.fr", "education.gouv.fr", "dnvod.eu", "elle.fr", "letour.fr", "cmb.fr", "dfiles.eu", "onecoin.eu", "gls-group.eu", "seedpeer.eu", "dramanice.eu", "sia.eu", "filmezz.eu", "vshare.eu", "torrentbutler.eu", "watchcartoonsonline.eu", "politico.eu", "torrentking.eu", "feed2allnow.eu", "rockfile.eu", "yamaha-motor.eu", "tusciaweb.eu", "sexyadults.eu", "fidelityhouse.eu", "chainfire.eu", "ping.eu", "unibet.eu", "mastersportal.eu", "uploadfiles.eu", "ifirstrow.eu", "watchmovienow.eu", "xenesglosses.eu", "gayforit.eu", "streamcomplet.eu", "muzofox.eu", "jpfiles.eu", "df.eu", "kickasstorrents.eu", "autobazar.eu", "swisscoin.eu", "perfektdamen.eu", "echodnia.eu", "bombuj.eu", "funmix.eu", "safeurls.eu", "increas.eu", "luxexpress.eu", "gamecopyworld.eu", "cucirca.eu", "guess.eu", "ifirstrowus.eu", "nets.eu", "hostinger.eu", "immunicity.eu", "europsl.eu", "myenglishteacher.eu", "tme.eu", "payzen.eu", "jpopsuki.eu", "5dimes.eu", "xiaomi.eu", "magiccardmarket.eu", "romanews.eu", "mp3xd.eu", "fellent.eu", "livenewschat.eu", "ccc.eu", "bitminer.eu", "thenude.eu", "wufoo.eu", "firstrowas.eu", "minecraft-server.eu", "catawiki.eu", "firstsrowsports.eu", "omni-cash.eu", "buzzblog.eu", "ancient.eu", "pornoserver.eu", "xspeeds.eu", "skydsl.eu", "interrail.eu", "bonprixshop.eu", "harrisinteractive.eu", "ls-portal.eu", "nasze-kino.eu", "valueactive.eu", "meteoweb.eu", "serialonline.eu", "clickedu.eu", "bosettiegatti.eu", "mydailydose.eu", "gap.eu", "myadpack.eu", "iptorrents.eu", "aaate2016.eu"];
var list = document.getElementById('domains');

domains.forEach(function (item) {
  var option = document.createElement('option');
  option.value = item;
  list.appendChild(option);
});